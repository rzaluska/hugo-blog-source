title: ab - Apache HTTP server benchmarking tool - Apache HTTP Server
link: http://jaffamonkey.com/1421/ab-apache-http-server-benchmarking-tool-apache-http-server
author: jaffamonkey
description: 
post_id: 1421
created: 2008/11/27 11:42:33
created_gmt: 2008/11/27 11:42:33
comment_status: open
post_name: ab-apache-http-server-benchmarking-tool-apache-http-server
status: publish
post_type: post

# ab - Apache HTTP server benchmarking tool - Apache HTTP Server

![](http://www.jaffamonkey.co.uk/wp-content/uploads/apache-150x150.jpg)**ab **is a tool for benchmarking your Apache Hypertext Transfer Protocol (HTTP) server. It is designed to give you an impression of how your current Apache installation performs. This especially shows you how many requests per second your Apache installation is capable of serving. Load and Stress Testing your web applicartion can be a costly exercise, but there are tools such as this that can provide you with some confidence in the robustoness of your web application.  As a sidenote, most databases have some form of test tool, though they usaually require technical understanding to analyse results, and diagnose issues. Manual of **ab** is rather extensive, so here is just useful example of it’s usage: `_ab -n 100 jaffamonkey.co.uk/_` will send 100 requests to Apache server of this website.