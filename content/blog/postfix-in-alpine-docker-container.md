+++
title = "Postfix in Alpine Docker Container"
date = 2021-09-06T00:00:00+01:00
tags = ['tutorial', 'linux', 'docker', 'postfix', 'alpine']
+++

In this blog post, I will show you how to set up a postfix SMTP server using the Alpine Linux Docker image.
At end of this tutorial, we will end up with a small Docker image with postfix inside of it that can be configured using
environment variables.

# Why?

So you might ask why to bother with installing Postfix in Docker container if you can do the same thing using your
Linux distribution's package manager. The answer is simple. I want to have a fully operational postfix with all
dependencies that can be configured very quickly using environment variables. I don’t want to browse through
documentation of config files every time I want to deploy it. Setup of postfix is no simple task. Especially if one
never did that before. Some wizards will lead you through the initial configuration process but after that, you
will be left alone to figure things out.

# Introduction

First of all, let's start with explaining what is postfix. This is for those who never installed or configured postfix
so far. Postfix is one of the most popular mail transfer agent (MTA) software that is currently used.
It allows users to submit emails into a special queue and then it handles final mail delivery into destination servers.
You can read more about it here in the official documentation: http://www.postfix.org/

# Prerequisites

I assume that you know how to use Docker to run pre-configured images. Knowledge of image building is not necessary
here because I will explain everything along the way.

# Choosing Docker base image

Before we start our implementation we need to decide on a Docker base image that we want to use.
I want my image to be as small as possible so I will use an Alpine base image. Alpine is small Linux distribution
that will suit our needs perfectly. I will stick to version 3 of this image.
If you want to pull it by hand you can use this command:

```sh
docker pull alpine:3
```

And then you can run `sh` shell and explore the image a little bit.

```sh
docker run --rm -ti alpine:3 sh
```

# Packages that we will use

- [postfix](https://pkgs.alpinelinux.org/package/edge/main/x86/postfix) - main program
inside a container and gather orphaned processes.
- [dockerize](https://github.com/jwilder/dockerize) - this will allow us to create a postfix config file dynamically using
environment variables

# Creating Dockerfile

We will start by creating dir where we will store all our config files and Docker file for this image

```bash
mkdir postfix-alpine && cd postfix-alpine
```

Create `Dockerfile` with the following contents

`Dockerfile`
```docker
FROM alpine:3
ENV DOCKERIZE_VERSION v0.6.1

# install packages
RUN apk add --no-cache --update postfix bash && \
    apk add --no-cache --upgrade musl musl-utils && \
    (rm "/tmp/"* 2>/dev/null || true) && (rm -rf /var/cache/apk/* 2>/dev/null || true)

# install dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# copy postfix config file template into image
COPY main.cf.tmpl /etc/postfix/main.cf.tmpl

# copy entrypoint script into an image
COPY docker-entrypoint.sh /

# postfix is listening on port 25
EXPOSE 25
STOPSIGNAL SIGKILL

CMD /docker-entrypoint.sh
```


# Config files

Next, we will create config files. We will start with `docker-entrypoint.sh` file. Create it in `postfix-alpine` dir where
your `Dockefile` is sitting.

`docker-entrypoint.sh`
```sh
#/bin/bash

# Run dockerize and template file main.cf.tmpl into main.cf
# then start postfix as child process
dockerize -template /etc/postfix/main.cf.tmpl:/etc/postfix/main.cf postfix start-fg
```

Make `docker-entrypoint.sh` executable.
```sh
chmod +x docker-entrypoint.sh
```

Next, we will create a dockerize template file. This template is using `go template` syntax. You can read more about it
here: https://pkg.go.dev/text/template. Functions available inside dockerize templates are documented here:
https://github.com/jwilder/dockerize#using-templates
Create file named `main.cf.tmpl` alongside with `Dockerfile` and
`docker-entrypoint.sh` files with following contents:

`main.cf.tmpl`
```cfg
maillog_file = /dev/stdout
smtp_helo_name = {{ .Env.POSTFIX_SMTP_HELO_NAME }}
myorigin = {{ .Env.POSTFIX_MYORIGIN }}

smtpd_banner = $myhostname ESMTP
biff = no
append_dot_mydomain = no
readme_directory = no

compatibility_level = 2

smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache

smtpd_relay_restrictions = permit_mynetworks permit_sasl_authenticated defer_unauth_destination
myhostname = {{ .Env.POSTFIX_MYHOSTNAME }}
alias_maps = hash:/etc/aliases
alias_database = hash:/etc/aliases
mydestination = localhost.localdomain, localhost
relayhost =
mynetworks = 127.0.0.0/8 192.168.0.0/16 172.16.0.0/12
mailbox_size_limit = 0
recipient_delimiter = +
inet_interfaces = all
inet_protocols = ipv4
```

As you can see we are using environment variables to create config file dynamically. For example this line:

`smtp_helo_name = {{ .Env.POSTFIX_SMTP_HELO_NAME }}`

is using `POSTFIX_SMTP_HELO_NAME` env variable that we will set on docker container start and dockerize will substitute
everything inside `{{ }}` with a value of this variable. Config file that is provided here is minimal and you can add more
configuration lines here. For full documentation of postfix main.cf config file go to:
http://www.postfix.org/postconf.5.html.

Alse take a close look at line:

`maillog_file = /dev/stdout`

Here we are telling postfix that we want all log files to go to stdout for us to be able to see them via `docker
logs` command.

# Build docker image
If all files are in place start build your docker image using the following command.

```
docker build -t postfix-alpine:latest .
```

Let's check if the image was created and what is its size. Type `docker images` in the terminal.
```sh
docker images
REPOSITORY          TAG          IMAGE ID       CREATED             SIZE
postfix-alpine      latest       61f9fa7f4a21   2 minutes ago      55MB
```
As you can see our image is very small - only 55MB.

# Running image

After build you can check if your new image is working with this command:

```sh
docker run \
        -d \
        --rm \
        --init \
        --env POSTFIX_SMTP_HELO_NAME=localhost \
        --env=POSTFIX_MYORIGIN=localhost \
        --env=POSTFIX_MYHOSTNAME=localhost \
        --name postfix-alpine \
        -p 8025:25 \
        postfix-alpine:latest
```

Next check if it is working by typing `docker ps`

```bash
docker ps
CONTAINER ID   IMAGE                   COMMAND                  CREATED         STATUS         PORTS                                   NAMES
e1e2198ba7fd   postfix-alpine:latest   "/bin/sh -c /docker-…"   3 seconds ago   Up 2 seconds   0.0.0.0:8025->25/tcp, :::8025->25/tcp   postfix-alpine
```

You should see the status `Up for x seconds`.

Go inside the container and check if the template file is properly configured.

```sh
docker exec -ti postfix-alpine sh
```
And type the following commands inside the docker shell
```sh
cd /etc/postfix/
cat main.cf
```
You should see the following result. As expected references to environment variables inside the template were replaced by
`localhost`.

```sh
maillog_file = /dev/stdout
smtp_helo_name = localhost
myorigin = localhost

smtpd_banner = $myhostname ESMTP
biff = no
append_dot_mydomain = no
readme_directory = no

compatibility_level = 2

smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache

smtpd_relay_restrictions = permit_mynetworks permit_sasl_authenticated defer_unauth_destination
myhostname = localhost
mydestination = localhost.localdomain, localhost
relayhost =
mynetworks = 127.0.0.0/8 192.168.0.0/16 172.16.0.0/12
mailbox_size_limit = 0
recipient_delimiter = +
inet_interfaces = all
inet_protocols = ipv4
```

# Testing connection

Your image is exposed for connections on port `8025` specified in the docker run command. We can try to connect and see if
postfix is running. Type `nc localhost 8025` and see the result. You should see something similar to this:

```sh
nc localhost 8025
220 localhost ESMTP
```

If this is the case that means postfix is working.

# What to do next

I purposefully omitted the part that should go here and would be about testing sending emails using our new server.
This is because to do this we need proper network / DNS configuration and this topic is so vast that it can
be described in a whole new blog post. What you can do instead is install a package named `msmtp-mta` using your Linux
distribution package manager and perform a simple test as follows.

Create `msmtp-mta` config file with the following contents.

`~/.msmtprc`
```cfg
defaults
auth           off
tls            off
logfile        ~/.msmtp.log

account        local
host           localhost
port           8025
from           root@localhost

account default : local
```

Try sending email to your private email address:
```
echo "Test email." | msmtp -a default *****@******.***
```

Open docker logs and see what happened:
```sh
docker logs -f postfix-alpine
```

```text
postfix/smtpd[103]: connect from unknown[172.17.0.1]
postfix/smtpd[103]: 03166B6078D: client=unknown[172.17.0.1]
postfix/cleanup[107]: 03166B6078D: message-id=<>
postfix/qmgr[84]: 03166B6078D: from=<root@localhost>, size=256, nrcpt=1 (queue active)
postfix/smtpd[103]: disconnect from unknown[172.17.0.1] ehlo=1 mail=1 rcpt=1 data=1 quit=1 commands=5
postfix/smtp[108]: connect to gmail-smtp-in.l.google.com[173.194.73.27]:25: Operation timed out
```

As you can see in my case connection is working but my internet provided is blocking port 25 to Gmail where my mailbox
is situated so I can't send this email. In your case, there could be another error if the network is not properly
configured.

# Summary

In this blog post, I described how to create a small docker image containing a postfix mail server. Based on this
instructions you can expand this image however you want to achieve a production-ready postfix server.

