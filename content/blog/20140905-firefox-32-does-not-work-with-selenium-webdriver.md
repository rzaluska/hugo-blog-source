title: Firefox v32 issues with Selenium WebDriver (Linux)
link: http://jaffamonkey.com/11018/firefox-32-does-not-work-with-selenium-webdriver
author: jaffamonkey
description: 
post_id: 11018
created: 2014/09/05 15:31:20
created_gmt: 2014/09/05 15:31:20
comment_status: open
post_name: firefox-32-does-not-work-with-selenium-webdriver
status: publish
post_type: post

# Firefox v32 issues with Selenium WebDriver (Linux)

Firefox 32 does not work with Selenium WebDriver, and if you use Ubuntu and have upgraded recently, this is version you will probably have.  You will have seen some kind of error message from selenium, complaining about being unable to bind to the port firefox driver uses. To get round this annoyance, and as Ubuntu dont make it easy to downgrade Firefox version, I used following steps:- 

  * sudo apt-get remove firefox
  * Download binary version of your choice (I used version 31)
  * Extract to location of you choice
  * Create link: ln -s /path/to/your/firefox/folder/firefox /usr/bin/firefox
Now Selenium and Firefox will play nicely :)