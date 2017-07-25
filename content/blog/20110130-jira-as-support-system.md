title: JIRA as Support System
link: http://jaffamonkey.com/3437/jira-as-support-system
author: jaffamonkey
description: 
post_id: 3437
created: 2011/01/30 20:06:22
created_gmt: 2011/01/31 01:06:22
comment_status: open
post_name: jira-as-support-system
status: publish
post_type: post

# JIRA as Support System

![](http://blog.jaffamonkey.com/files/2011/01/ClientSupportIssueLifecycle_1-170x170.png)JIRA was not designed to be a support system, but can be easily tailored to do so. the reasoning behind it is simple - your clients are testers! Traditional post-launch support is distant from the project development lifecycle, and rarely any kind of integration takes place. By incorporating support into JIRA, you give yourself the means to easily process client issues that are relevant for the project lifecycle. There are many ways to do this with JIRA, but this is the most pragmatic and maintainable appraoch I found.  1\. Create new project specifically for support. 2\. Create new project role for support. 2\. Create new custom fields for new issue type (hide these types in other forms) 3\. Create permission scheme for the project 4\. Add new project role to actions that you want the clients to perform (Below is suggested) Browse Projects 

  * Create Issues
  * Assginable User
  * Resolve Issues
  * Close Issues
  * Add comments
  * Create attachments
  * Delete attachments
For easier customisation purposes create a new Support Field Configuration Permission Scheme.