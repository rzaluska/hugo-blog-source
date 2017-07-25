title: Xebium - Selenium bridge for Fitnesse
link: http://jaffamonkey.com/5001/xebium-selenium-bridge-for-fitnesse
author: jaffamonkey
description: 
post_id: 5001
created: 2011/11/14 16:43:11
created_gmt: 2011/11/14 16:43:11
comment_status: open
post_name: xebium-selenium-bridge-for-fitnesse
status: publish
post_type: post

# Xebium - Selenium bridge for Fitnesse

Xebium, as with Fitnium, extends the script fixture of Fitnesse. After evaluating the pair, I found Xebium to be superior in terms of setup and usuability. The feature I do like is how you can take Firefox Selenium IDE addon recordings and export them as Fitness/Xebium format, for cutting and pasting into fitnesse.  For example, below is the export from a simple site login action, viewing account details screen then logging out:- !define TEST_SYSTEM {slim} !path xebium-0.5-jar-with-dependencies.jar | script | selenium driver fixture | | start browser | firefox | on url | http://www.securesite.com | | ensure | do | open | on | /Account/LogOn?ReturnUrl=%2f | | ensure | do | type | on | id=login | with | Paull1 | | ensure | do | type | on | id=password | with | Password11 | | ensure | do | clickAndWait | on | name=LogOn | | ensure | do | clickAndWait | on | id=account_details | | ensure | do | clickAndWait | on | link=Secure Site | | ensure | do | clickAndWait | on | link=Logout | | stop browser | When this test is run, Selenium script commands are initiated from Fitnesse, the web browser is opened and closed after test actions performed, and results displayed in Fitnesse test page. To set all this up is very easy:- 

  * Download and install Xebium from [here](http://xebia.github.com/Xebium/). Extract folder/file structure into Fitnesse folder.
  * Download and install Xebium firefox Addon from [here](https://addons.mozilla.org/en-US/firefox/addon/selenium-xebium-formatter/) (for exporting IDE recorded scripts into Fitnesse format).
  * Download Selenium Server and Selenium IDE Firefox Addon from [here](http://seleniumhq.org/download/). Download latest Fitnesse from [here](http://fitnesse.org).
1\. Start Fitnesse (java -jar fitnesse.jar -p [_Enter chosen port number_]) 2\. Start Selenium (java -jar selenium-server.jar) 3\. Ensure to add the following lines to beginning of your test pages:- !define TEST_SYSTEM {slim} !path xebium-0.5-jar-with-dependencies.jar