title: Upgrade to php 5.5 on mac OS
link: http://jaffamonkey.com/11002/upgrade-to-php-5-5-on-mac-os
author: jaffamonkey
description: 
post_id: 11002
created: 2014/08/08 13:31:15
created_gmt: 2014/08/08 13:31:15
comment_status: open
post_name: upgrade-to-php-5-5-on-mac-os
status: publish
post_type: post

# Upgrade to php 5.5 on mac OS

Save yourself some plain, and run the following 3 command lines to upgrade to php 5.5 (or later version) on (bad, very very bad) MAC OS. [code]$ curl -s http://php-osx.liip.ch/install.sh | bash -s 5.5 $ export PATH=/usr/local/php5/bin:$PATH $ php -v[/code]