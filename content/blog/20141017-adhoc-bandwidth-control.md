title: Adhoc bandwidth control
link: http://jaffamonkey.com/11113/adhoc-bandwidth-control
author: jaffamonkey
description: 
post_id: 11113
created: 2014/10/17 10:19:25
created_gmt: 2014/10/17 10:19:25
comment_status: open
post_name: adhoc-bandwidth-control
status: publish
post_type: post

# Adhoc bandwidth control

[Trickle](http://monkey.org/~marius/pages/?page=trickle) (Linux) enables you to set bandwidth constrictions on the fly, either for a particular url, or when started as a daemon, will constrict network bandwidth for any application. Very useful to diagnose issues relating to application performance, across lower bandwidth connections. First, install trickle:-  `sudo npm install trickle` Run trickle for particular URL (this is setting both download and upload speed to 56k):- `sudo trickle -d 56 -u 56 wget http://www.google.com/bigfile` Run trickle in daemon mode `sudo trickled -d 56 -u 56 -v`