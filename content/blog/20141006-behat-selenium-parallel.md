title: Behat/Selenium/Parallel
link: http://jaffamonkey.com/11056/behat-selenium-parallel
author: jaffamonkey
description: 
post_id: 11056
created: 2014/10/06 23:26:52
created_gmt: 2014/10/06 23:26:52
comment_status: open
post_name: behat-selenium-parallel
status: publish
post_type: post

# Behat/Selenium/Parallel

This exercise demonstrates how to run behat tests (feature files) in parallel, to reduce test run time.  It is important to ensure you have no inter-dependencies between tests before you start.  It also assumes Linux or macOS platform. First install [parallel](https://www.gnu.org/software/parallel/), a shell tool for executing jobs in parallel using one or more computers:-  [code]apt-get install parallel[/code] Edit your behat.yml file [code]extensions: Behat\MinkExtension\Extension: ......................... selenium2: capabilities: version: ''[/code] Next, start up selenium as hub (you can use Grid, but unnecessary unless you want to go for serious load, as Selenium WebDriver has built-in thread management):- [code]java -jar selenium-server-standalone-[version number].jar --role hub[/code] Then in another terminal window, go to Behat root folder, and run the command below to execute your tests in parallel. The 'j8' part denotes the number of parallel processes you want to run at any one time. [code]find features/path/to/tests -iname '*.feature'|  parallel --gnu -j8 --group path/to/behat/executable --tags @your tag --ansi {}[/code] Simple, huh? The best things are :) #standingonshouldersofgiants