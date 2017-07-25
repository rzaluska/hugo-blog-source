title: Fitnesse and PHP
link: http://jaffamonkey.com/3826/fitnesse-and-php
author: jaffamonkey
description: 
post_id: 3826
created: 2011/04/12 06:15:55
created_gmt: 2011/04/12 10:15:55
comment_status: open
post_name: fitnesse-and-php
status: publish
post_type: post

# Fitnesse and PHP

One of the pieces of advice I have carried with me is from an Agile coach/menter with a lot of automated testing expertise. 

> If a project is near the beginning, use Fitnesse (primary objective is User Acceptance Tests) - if the project further along the line, use Selenium (primary objective is to test code).

[vimeo]http://vimeo.com/5860962[/vimeo]  As a statement, a little too over-simplified maybe, but I got his point ... Fitnesses is an acceptance (collaborative) testing and documentation tool. It provides a very simple way to collaboratively create documents, specify tests and run those tests. Fitnesse is best introduced in a the project is near the start - as adopting Fitnesse deeper into a project can cause issues with "catchup", as the idea is that technical and non-technical can use this tool to perform continual User Acceptance tests, at any point in the project. Reverse engineering, evem on requirements, is something best avoided. Key benefit across the project is that each time a test is run, the requirements AND the code is tested. Fitnesse is a personal preference, as it starts automated testing in the right way, i.e. the requirements. the method in Fitnesse is to generate user acceptance tests, before code is written. It provides a pseudo code framework from which to automate tests. Not everyone likes it wiki-style format, but it clean fast, and ANYONE can run tests on click of a button. To make Fitnesse easier to use, a range of plugins are available to cover other languages (for those who dont like the default), and I found php plugin (Slimphp), which enables me to write Fitnesse acceptance tests in php.