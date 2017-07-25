title: CURL in Testing
link: http://jaffamonkey.com/2196/curl-in-testing
author: jaffamonkey
description: 
post_id: 2196
created: 2009/05/08 12:55:18
created_gmt: 2009/05/08 13:55:18
comment_status: open
post_name: curl-in-testing
status: publish
post_type: post

# CURL in Testing

If you have access to XML config files, CURL is great testing tool, if you are happy at the command-line. In a nutshell, CURL effectively means of changing values on the fly (using PUT/GET commands), and this method is the basis for many test tools (notably Selenium). The main advantage (once you get up to speed with CURL) is speed. As with most tools, the more bloated the application, to slower it becomes. And therefore most potential for errors based on tool performance, rather than application under test. CURL takes advantage of data storage in XML format, rather than a DB. Here is an example of a CURL command used to create test scenario. _curl -d "subscription[end_date]=2008-12-31 15:57:00" -X PUT http://www.asite.com/subscribers/22/subscriptions/20.xml_ **Translation:-** This command is populating the "end_date" with a value in past (to test system reaction to expired subscription). How your XML config files may/will be differently structured, but that URL is pointing to Subscription record 20 for Subscriber id 22. This is a basic example, but if you have access to XML config files, this is a fast, easy way to test critical functions of a system, especially subscriptions, registrations and user account activity. **Some examples of uses of CURL in testing:-** [Curl for Testing Web Applications](http://brainflush.wordpress.com/2008/03/18/using-curl-for-testing-web-applications/) [CURL and Ruby on Rails](http://blog.inquirylabs.com/2006/08/04/how-to-use-curl-to-test-restful-rails/)

> curl is a command line tool for transferring files with URL syntax, supporting FTP, FTPS, HTTP, HTTPS, SCP, SFTP, TFTP, TELNET, DICT, LDAP, LDAPS and FILE. curl supports SSL certificates, HTTP POST, HTTP PUT, FTP uploading, HTTP form based upload, proxies, cookies, user+password authentication (Basic, Digest, NTLM, Negotiate, kerberos...), file transfer resume, proxy tunneling and a busload of other [useful tricks](http://curl.haxx.se/docs/features.html).