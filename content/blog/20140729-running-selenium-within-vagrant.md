title: Running Selenium within Vagrant
link: http://jaffamonkey.com/10971/running-selenium-within-vagrant
author: jaffamonkey
description: 
post_id: 10971
created: 2014/07/29 13:33:54
created_gmt: 2014/07/29 13:33:54
comment_status: open
post_name: running-selenium-within-vagrant
status: publish
post_type: post

# Running Selenium within Vagrant

_i.e. how to run selenium tests when no XServer configuration or GUI present_ apt-get install xvfb apt-get install firefox DISPLAY=:10 xvfb-run java -jar selenium-server-standalone-2.42.2.jar Now run your selenium tests ...