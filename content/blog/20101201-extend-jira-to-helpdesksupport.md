title: Extend JIRA to helpdesk/support
link: http://jaffamonkey.com/3400/extend-jira-to-helpdesksupport
author: jaffamonkey
description: 
post_id: 3400
created: 2010/12/01 10:37:27
created_gmt: 2010/12/01 15:37:27
comment_status: open
post_name: extend-jira-to-helpdesksupport
status: publish
post_type: post

# Extend JIRA to helpdesk/support

JIRA as heldesk system 1\. Use Email to JIRA feature. Limited, as will 

  * The subject of the email will become the issue summary.
  * The body of the email will be the issue description.
  * A bug will now be created for selected project with the above information.
  * Any attachments to the email will become attachments to the issue (assuming attachments have been enabled in JIRA). Note that, to ensure compatibility with various operating systems, any of the following characters in the filename will be replaced with an underscore character: , /, ", %, :, $, ?, *, <, |, >.
  * Comment Creation:
  * The body of the email will become a comment on the issue
  * Any attachments to the email will become attachments to the issue (assuming attachments have been enabled in JIRA)
![](http://blog.jaffamonkey.com/files/2010/12/jiraclient_editIssue-170x170.gif)2\. JIRA client, which enable users to log issues in JIRA without having to access it. this is good route if you want to provide users with more form options.