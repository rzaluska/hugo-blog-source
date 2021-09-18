+++
title = "HAProxy Dynamic Maintenance Page Using Unix Admin Socket"
date = 2021-09-18T00:00:00+02:00
draft = false
+++

In this blog post, I will describe a method of dynamically enable maintenance page backend using HAProxy
ACL and Unix admin socket. This method allows us to stop traffic to your webpage and move all requests to a dedicated
Nginx server that is used only to show simple Html page with maintenance information to users. All of that can
be done without reloading of HAProxy config. This is useful for situations when you want to block all traffic to
your webpage during production deployment.

# Configuration of admin socket in HAProxy

To enable dynamic configuration of HAProxy via admin socket we need to add this line to `haproxy.conf` file.

```ini
global
...
  stats socket /tmp/haproxy/socket/haproxy.sock mode 666 level admin
...
```

You can choose another path for your socket. In our example I used `/tmp/haproxy/socket/`.
What is important is that the user of the HAProxy process needs to be able to write
to this path. For demo purposes, we set permission to `666` to allow every user to read and write to
this socket. In the production server, you should restrict access to `600` because you don't want everyone to have
permission to modify haproxy settings.

If you are running your haproxy in docker container remember to add socket directory to your volumes. For example,
for `docker-compose` you should add this line. Remember that volume should be in `rw` mode.

```yaml
version: "2"
services:
  haproxy:
    image: haproxy:alpine
    volumes:
       - ./socket/:/tmp/haproxy/socket/:rw
```

After setup of socket reload haproxy config and check if `haproxy.sock` file is available on directory that we
specified, like so:

```shell
$ ls -alhn
drwxr-xr-x 2   99   99 4,0K 09-18 18:27 .
drwxr-xr-x 4 1000 1000 4,0K 09-15 21:13 ..
srw-rw-rw- 1   99   99    0 09-18 18:27 haproxy.sock
```

Notice that file mode is `666` and it is owned by the user that is running the HAProxy process. In my case, it is uid:gid `99:99`

# Testing if the socket is working

To communicate with haproxy using Unix socket you need to install the `socat` command-line tool.

Ubuntu
```bash
sudo apt install socat
```
Arch Linux
```bash
sudo pacman -S socat
```

Next got to the directory where a socket is situated and invoke this command

```bash
echo "show servers state" | socat UNIX-CONNECT:haproxy.sock stdio
```

What it does is sending command `show servers state` to the HAProxy socket and then print out the response. In the `socat` command
line we are essentially connecting the `haproxy.sock` Unix socket to stdin and stdout of socat so we can communicate.
You can find more commands that can be sent to haproxy here: https://cbonte.github.io/haproxy-dconv/1.8/management.html#9.3

As a result, you should get something similar to this:

```sh
# be_id be_name srv_id srv_name srv_addr srv_op_state srv_admin_state srv_uweight srv_iweight srv_time_since_last_change srv_check_status srv_check_result srv_check_health srv_check_state srv_agent_state bk_f_forced_id srv_f_forced_id srv_fqdn srv_port srvrecord srv_use_ssl srv_check_port srv_check_addr srv_agent_addr srv_agent_port
9 ***** 1 ****** ***.***.***.*** 2 0 1 1 428 6 3 4 6 0 0 0 ****.*** 80 - 0 0 - - 0
```

If this is the case you are good to go to the next steps. If you get an error here that means probably there is some kind
of mistake in your `haproxy.cfg`.


# Adding ACL to haproxy.cfg

The next step is adding a special ACL to our haproxy config. Find your default frontend section and add the following lines.

```cfg
...
frontend frontend-http
...
    ACL maintenance path -i -u 9999 -m reg
...
    use_backend maintenance if maintenance
...
```

In the first config-line, we specify that we want to have a new ACL of name `maintenance`. It will be matching URL `path` using
regex and it will be case insensitive. We specify flag `-u 9999` to give this maintenance ACL rule a unique id.
If id `9999` is colliding with your other ACL rules ids then change it to something else. In the next sections of this
article I assume that id is `9999` so if you changed it then make sure you adjusted all commands to fit the new id.
This will be important later when we will use this id in your communication with haproxy. In beginning our ACL rule is
empty. There is no regex specified in it. That means that all requests will be rejected by this ACL and no traffic will
go to the maintenance backend by default.
The second line is the standard `use_backend` directive that will move traffic that matches maintenance ACL to maintenance backend.

## Adding Maintenance Backend

Let's specify our backend like so by placing those lines at end of `haproxy.cfg` file. If you already have some kind
of maintenance backend, you can skip this part.

```cfg
...
backend maintenance
  server maintenance-nginx ip_address:port
```

## Confirming that ACL is loaded

After all, modifications are made reload the `haproxy.cfg` file and check if our new ACL rule is in place. To do so
go to the directory where `haproxy.sock` is located and invoke the following command:

```bash
echo "show all" | socat UNIX-CONNECT:haproxy.sock stdio
```
And you should see output similar to this. Our rule is marked by `9999` is and that is matching our configuration
setting.

```sh
# id (file) description
...
9999 () acl 'path' file '/usr/local/etc/haproxy/haproxy.cfg' line 32. curr_ver=0 next_ver=
...
```

# Using ACL

After the setup of the ACL rule, we can start using it. We will use 2 commands to change ACL behavior dynamically.

The first one is for the clean-up of ACL. We will use this command to return to the state that we have in our config file there rule
is empty and no requests are going through the maintenance backend.

```bash
echo "clear acl #9999" | socat unix-connect:haproxy.sock stdio
```

The second one is for enabling maintenance backend. We specify that we want all pages to go to maintenance by giving
a regex pattern like so `^.*$`. This pattern matches every path so effectively if makes all requests to go to maintenance.

```bash
echo "add acl #9999 ^.*$" | socat unix-connect:haproxy.sock stdio
```

As a bonus command we can test if the given URL is matched by our rule by issuing this command:
```bash
echo "get ACL #9999 /test_url/" | socat unix-connect:haproxy.sock stdio
```
In my case I got the following output:
```bash
type=reg, case=insensitive, match=no
```
As you can see there is no match. When we enable our rule we got the match.

```bash
echo "add acl #9999 ^.*$" | socat unix-connect:haproxy.sock stdio
echo "get acl #9999 /test_url/" | socat unix-connect:haproxy.sock stdio
```
```bash
type=reg, case=insensitive, match=yes, idx=list, pattern="^.*$"
```

So our ACL is working as it should.


# Bash script for wrapping ACL control commands

As the last step, we will prepare a small bash script that can be used to change ACL. Go to directory
where haproxy socket is placed and create a file named
`maintenance.sh`. Then add the following contents to it:

```bash
#!/bin/bash

set -euo pipefail

if [[ $1 == "on" ]]; then
        # clean our acl to avid duplicate rules beging added
        echo "clear acl #9999" | socat unix-connect:haproxy.sock stdio
        echo "add acl #9999 ^.*$" | socat unix-connect:haproxy.sock stdio
elif [[ $1 == "off" ]]; then
        echo "clear acl #9999" | socat unix-connect:haproxy.sock stdio
else
        echo "Usage: maint [on,off]"
fi
```

Make the file executable:

```bash
chmod +x maintenance.sh
```

You can use it like that:

```bash
# enable maintenance mode - all traffic goes to maintenance backend
./maintenance.sh on

# disable maintenance mode
./maintenance.sh off
```

# Summary

In this blog post, I described how one can set up a dynamic maintenance page in haproxy using an admin Unix socket.

