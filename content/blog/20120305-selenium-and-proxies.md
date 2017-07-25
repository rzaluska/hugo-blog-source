title: Selenium and proxies
link: http://jaffamonkey.com/6719/selenium-and-proxies
author: jaffamonkey
description: 
post_id: 6719
created: 2012/03/05 14:11:34
created_gmt: 2012/03/05 14:11:34
comment_status: open
post_name: selenium-and-proxies
status: publish
post_type: post

# Selenium and proxies

It is common when trying to automated web tests within company, you will be behind an HTTP proxy that requires authentication. To get round this, you have to specify the proxy details when starting Selenium.  Example: java -jar selenium-server.jar -Dhttp.proxyHost=**my.proxy.com** -Dhttp.proxyPort=**8080** -Dhttp.proxyUser=**my_username** -Dhttp.proxyPassword=**my_password**