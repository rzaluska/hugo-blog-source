title: Running Cucumberjs/Protractor tests using Phantomjs on Windows
link: http://jaffamonkey.com/11765/running-cucumberjsprotractor-tests-using-phantomjs-on-windows
author: jaffamonkey
description: 
post_id: 11765
created: 2016/02/08 12:26:12
created_gmt: 2016/02/08 12:26:12
comment_status: closed
post_name: running-cucumberjsprotractor-tests-using-phantomjs-on-windows
status: publish
post_type: post

# Running Cucumberjs/Protractor tests using Phantomjs on Windows

Using gitbash ( from [gitSCM](https://git-for-windows.github.io/)) or similar Windows _BASH_ emulation software: 

  * npm install webdriver-manager
  * download [window binary](http://phantomjs.org/download.html) and extract somewhere
  * rename phantomjs.exe to phantomjs and copy to \\\Users\\[user id]\AppData\Roaming\npm
Change capabilities in conf file: 
    
    
    capabilities: {
    browserName: 'phantomjs',
    debug: true
    }
    

webdriver-manager start DISCLAIMER: I am not syaing this is the right way - this is the way I got the damn set-up to work on Windows ;)