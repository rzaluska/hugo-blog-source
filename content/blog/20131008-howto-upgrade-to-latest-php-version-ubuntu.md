title: Howto: Upgrade to latest php version (Ubuntu)
link: http://jaffamonkey.com/10321/howto-upgrade-to-latest-php-version-ubuntu
author: jaffamonkey
description: 
post_id: 10321
created: 2013/10/08 14:45:23
created_gmt: 2013/10/08 14:45:23
comment_status: open
post_name: howto-upgrade-to-latest-php-version-ubuntu
status: publish
post_type: post

# Howto: Upgrade to latest php version (Ubuntu)

**Upgrading php to php 5.5 (currently stable version)**

  * add-apt-repository ppa:ondrej/php5
  * apt-get install python-software-properties
  * apt-get update
  * apt-get upgrade
  * apt-get dist-upgrade
You do get option to replace your apache2.conf file, but I would select to keep your old version.  In this instance, upon starting Apache, you MAY get error relating to httpd.conf and Lockfile statements. Just comment both of them out of apache.conf, and Apache will start fine.