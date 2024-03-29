+++
title = "Certbot in Docker container"
date = 2022-04-02T00:00:00+02:00
tags = ["haproxy", "certbot", "docker", "ssl", "https"]
+++

Certbot is software that can be used to automatically issue free SSL
certificates for websites to be able to access them via secure HTTPS protocol.
It is provided by https://letsencrypt.org/
certificate authority. It is currently widely used on the internet as an
alternative to paid certificates.

To issue certificates using Let's Encrypt you typically need the Certbot script
https://certbot.eff.org/. It is written in Python programming language and
lets you manage free certificates on your server. Typically you install
Certbot using your operating system package manager. For example, installation
can be done by issuing this command:

```bash
pip install certbot
```

In this blog post, I will present a way to run Certbot using a docker container.
This approach is better than installation in the system because it will not suffer
from dependency management issues and it will allow us to update the Certbot 
script with ease. We will use acme over HTTP protocol to prove that
we are the owner of the domain and the owner of the server. You can read more about it here:
https://letsencrypt.org/docs/challenge-types/#http-01-challenge.


# Scripts

We will start with creating a directory structure for holding certificate files
scripts and configuration.

```bash
mkdir -p /var/certbot/etc
mkdir -p /var/certbot/bin
mkdir -p /var/certbot/renew_detect
```

Next, we will create the first script that will be used to issue new certificates.
Subcommand used in Certbot that will be used here is `certonly`. We will use
the built-in HTTP server by providing `--standalone` parameter. This server
will be available on the standard `docker0` network interface address on port `8080`
as set by parameter `-p 172.17.0.1:8080:80`. You can verify that this IP
address is valid on your system by running this command

```bash
ip a show dev docker0
```

I will talk more
about it when we will configure the HTTP server to pass traffic to
Certbot script.

Create file named `certbot_certonly.sh` in `/var/certbot/bin` directory
with following content:

```bash
#!/bin/bash

docker run --rm -p 172.17.0.1:8080:80 \
    -v /var/certbot/etc:/etc/letsencrypt \
    -v /var/certbot/renew_detect:/renew_detect \
    certbot/certbot:v1.25.0 \
    certonly \
    --standalone \
    -m user@example.com \
    --agree-tos \
    --keep \
    -d example.com
```

There are two important parameters that I will explain. First is `-m`. Using it
we specify email address that will receive email if certificate is due to expire.
Next is `-d` used to specify our domain name. Here I will use `example.com`. Replace
this domain with your own everywhere where you will see this domain in this post.
What is important to see here is how easy it is to specify the version of Certbot
that we are going to use. We are doing it by giving the docker image tag to our
docker run command. In this case, the version is `1.25.0` and this is the newest
one available right now when I am writing this blog post (April 2022).

The next script will be used to renew certificates that are due to expire.
Sometimes we need to execute some action if a certificate is renewed. For example,
we need to build a certificate bundle file that will be used in the HAProxy server.

Create file named `certbot_renew.sh` in `/var/certbot/bin/ directory
with following content:
```bash
#!/bin/bash

docker run --rm -p 172.17.0.1:8080:80 \
    -v /var/certbot/etc:/etc/letsencrypt \
    -v /var/certbot/renew_detect:/renew_detect \
    certbot/certbot:v1.25.0 \
    renew \
    --deploy-hook "touch /renew_detect/renew" \
    --no-random-sleep-on-renew

[[ ! -f /var/certbot/renew_detect/renew ]] && exit 0

cat /var/certbot/etc/live/example.com/fullchain.pem /var/certbot/etc/live/example.com/privkey.pem > /docker/certbot/etc/live/example.com/cert-privkey-chain.pem

docker restart haproxy
rm -f /docker/certbot/renew_detect/renew
```

In this script, we are using `--deploy-hook` parament with the `touch` command.
This approach will allow us to create file outside docker container in directory
mounted via `-v /var/certbot/renew_detect:/renew_detect` parameter.

Next, we are checking if this file exists and it this is the case we are concatenating
the certificate chain and private key files for usage in haproxy. This `cat` command 
is the only example of possible things that we can run if the certificate is renewed.

The last two commands are restart of haproxy docker container needed to load new
certificate and removal of `renew` file to mark that we executed all
things that need to run after a new certificate is created.

We also added `--no-random-sleep-on-renew` parameter to prevent
the Certbot from sleeping the random number of seconds. This is used to prevent
you from overloading certbot servers by issuing frequent renew requests.
This can cause a temporary ban if you are not respecting the no-DDoS rule.
We are planning to use renew in cron and run it every day so there is no
risk of blocking us.

The last command is utility one that will be used to list certificates managed by
certbot. This can be used to see what domain names currently have certificates
and how long those certificates will be valid.

Create file named `certbot_list.sh` in `/var/certbot/bin` directory
with following content:
```bash
#!/bin/bash

docker run --rm -p 172.17.0.1:8080:80 \
    -v /docker/certbot/etc:/etc/letsencrypt \
    -v /docker/certbot/renew_detect:/renew_detect \
    certbot/certbot:v1.25.0 certificates
```

# Configuration in HAProxy

I will assume that you are serving your web page using the HAProxy web server.
The first step to being able to use our Certbot scripts in that scenario is to add
some configuration snippets to haproxy.conf. First of all,
let's proxy all traffic that goes to the path starting with `/.well-known/acme-challenge/`
to Certbot standalone server.

Add following config snipped to HAproxy frontend that is listening on port 80.
```sh
listen http
    bind *:80
    use_backend acme if { path_beg /.well-known/acme-challenge/ }
```

Next, add backend to config using the following content.
```sh
backend acme
    mode http
    server acme 172.17.0.1:8080
```

Here we are using ip and port specified in our certonly and renew scripts.

After configuration in HAProxy, we are ready to issue our certificate using
`certonly` script. Run it to check if everything is ok.

```bash
/var/certbot/bin/certbot_certonly.sh
```

# Cron job

Next, we will add the `renew` script to crontab to automatically check
and renew our certificate. Add the following line to the root user crontab file.

```c
0 0 * * * /var/certbot/bin/certbot_renew.sh
```

Renew command will every day at midnight and check if the certificate is due to expire.

# Summary

In this blog post, I presented a solution to running certbot via docker container.
Using this approach you can keep the Certbot script up to date just by changing
the Docker tag version number in scripts. This solution is also easy to port to other systems
and will not pollute the package list with the dependencies needed only for the Certbot script.
