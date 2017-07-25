title: Command-line wordpress install
link: http://jaffamonkey.com/3295/command-line-wordpress-install
author: jaffamonkey
description: 
post_id: 3295
created: 2010/07/13 07:11:45
created_gmt: 2010/07/13 11:11:45
comment_status: open
post_name: command-line-wordpress-install
status: publish
post_type: post

# Command-line wordpress install

* ssh root@domain.com
  * cd /var/www/vhosts/domain.com/httpdocs/
  * wget http://wordpress.org/latest.zip
  * unzip latest.zip
  * cp -rf ./wordpress/* ./
  * mysql -uusername -ppassword
  * create database dbname
  * grant usage on *.* to username@localhost identified by 'password'
  * grant all privileges on dbname.* to username@localhost
  * mv wp-config-sample.php wp-config.php
  * vi ./wp-config.php