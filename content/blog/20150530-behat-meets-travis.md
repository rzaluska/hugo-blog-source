title: Behat meets Travis
link: http://jaffamonkey.com/11480/behat-meets-travis
author: jaffamonkey
description: 
post_id: 11480
created: 2015/05/30 20:11:33
created_gmt: 2015/05/30 20:11:33
comment_status: closed
post_name: behat-meets-travis
status: publish
post_type: post

# Behat meets Travis

This is a simple Travis config file to get Behat test applications builds running through Travis CI. It's is based on several assumptions:- The Behat github repo is not part of the application(s) it is testing (which would require more environment config). You have a Travis account with the Behat github repo set up (the one we are going to add the Travis config file to)  Add the following file **.travis.yml** to the root of your Behat repo. 
    
    
    # .travis.yml
    language: php
    sudo: required
    php:
      - "5.5"
    
    before_script:
      - composer install
      - sudo apt-get update
    # I am using apt-get to get packages, but npm supported also by default
      - sudo apt-get install xvfb
      - sudo apt-get install firefox
      - "wget http://selenium-release.storage.googleapis.com/2.45/selenium-server-standalone-2.45.0.jar"
    # Running selenium using the headless Firefox.  We have to set DISPLAY, as CI environments generally do not have any display pre-configured 
      - "DISPLAY=:10 xvfb-run java -jar selenium-server-standalone-2.45.0.jar &"
      - sleep 5
    
    script:
    # The command line to run your behat suite.  I added the format type "pretty", so that the output appears in the Travis Build log.
      - php bin/behat -f pretty features
    

_Click on the link below to see the Travis output from latest build of my Behat 3 Kickstart repo, based on example Travis config file above._ ![](https://travis-ci.org/jaffamonkey/behat-3-kickstart.svg?branch=master)