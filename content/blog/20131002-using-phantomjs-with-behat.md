title: Using PhantomJS with Behat
link: http://jaffamonkey.com/10303/using-phantomjs-with-behat
author: jaffamonkey
description: 
post_id: 10303
created: 2013/10/02 16:08:38
created_gmt: 2013/10/02 16:08:38
comment_status: open
post_name: using-phantomjs-with-behat
status: publish
post_type: post

# Using PhantomJS with Behat

Firstly, to install phantomjs you need to install it's dependency, NodeJS:- [code language="bash"]sudo npm install -g nodejs[/code] Then install PhantomsJS (I would recommend using npm as it installs it correctly, including updating bin path):- [code language="bash"]sudo npm install -g phantomjs[/code] 

##### Add to your composer "require" section

[code language="bash"] "behat/behat": "2.4.*@stable", "behat/mink": "1.4.*@stable", "behat/mink-extension": "*", "behat/mink-browserkit-driver": "*", "behat/mink-selenium2-driver": "*", [/code] It's smart to use profiles in your behat.yml file, as these are easily initiatized by behat (using -p parameter followed by profile name, in the behat run command) 

##### Add this to you behat.yml

[code language="bash"] phantomjs: extensions: Behat\MinkExtension\Extension: default_session: selenium2 javascript_session: selenium2 browser_name: 'phantomjs' selenium2: wd_host: "http://127.0.0.1:4444/wd/hub" capabilities: { "browser": "phantomjs", "version" : "xx.xx"}[/code] Before you run your behat tests, startup selenium and connect phantomjs to it:- [code language="bash"]java -jar selenium-server-standalone-[version number].jar **phantomjs --webdriver=[enter a port number here][/code] Run behat using profile parameter:- [code language="bash"]bin/behat -p phantomjs[/code]