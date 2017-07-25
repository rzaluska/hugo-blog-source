title: Zap Website Security Testing
link: http://jaffamonkey.com/3947/zap-website-security-testing
author: jaffamonkey
description: 
post_id: 3947
created: 2011/04/30 10:17:47
created_gmt: 2011/04/30 14:17:47
comment_status: open
post_name: zap-website-security-testing
status: publish
post_type: post

# Zap Website Security Testing

![](http://blog.jaffamonkey.com/files/2011/04/alerts-170x170.jpg)OWSAP ZAP is a useful website security testing tool, that any web savvy tester could use effectively. Apart from the annoyingly vague setup (ensure first task is to set up your browser to use same proxy as defined in ZAP), there are useful tools that you can start at a click. I ran the "Active Scan" option, just to see what this could do out-the-box. I would recommend "Passive Scan" really, as this is far safer to use (remember to try and use this tool only on test sites, as it does have potential to crash websites). 

> Active scanning attempts to find potential vulnerabilities by using known attacks against the selected targets.

Impressive - firstly, I was surprised by how much of a site directory is viewable - when using CMS's like Drupal or Wordpress, a lot of assumptions are made as to security. The number of updates to these CMS's purely on security issues should highlight the need to keep a handle on your website security in general. Click more to view the reports I generated, as it will illustrate that this tool is capable of. 

**ZAP Scanning Report**

Report generated at Sat, 30 Apr 2011 15:02:52. 

**Summary of Alerts**

**Risk Level**
**Number of Alerts**

High
1

Medium
0

Low
2

Informational
0

**Alert Detail**

**High (Warning)**
**Cross site scripting**

Description

Cross-site scripting or HTML injection is possible. Malicious script may be injected into the browser which appeared to be genuine content from the original site. These scripts can be used to execute arbitrary code or steal customer sensitive information such as user password or cookies.

Very often this is in the form of a hyperlink with the injected script embeded in the query strings. However, XSS is possible via FORM POST data, cookies, user data sent from another user or shared data retrieved from database.

Currently this check does not verify XSS from cookie or database. They should be checked manually if the application retrieve database records from another user's input.

> URL

http://[URL under test]/wp-content/plugins/yd-recent-posts-widget/timthumb/timthumb.php?src=%3CSCRIPT%3Ealert(%22OWASP%20ZAP%22);%3C/SCRIPT%3E&h=100&w=100&zc=1&q=100

> Parameter

src=<SCRIPT>alert("OWASP ZAP");</SCRIPT>

Solution

Do not trust client side input even if there is client side validation. Sanitize potentially danger characters in the server side. Very often filtering the <, >, " characters prevented injected script to be executed in most cases. However, sometimes other danger meta-characters such as ' , (, ), /, &, ; etc are also needed.

In addition (or if these characters are needed), HTML encode meta-characters in the response. For example, encode < as &lt;

Reference

  * The OWASP guide at http://www.owasp.org/documentation/guide
  * http://www.technicalinfo.net/papers/CSS.html
  * http://www.cgisecurity.org/articles/xss-faq.shtml
  * http://www.cert.org/tech_tips/malicious_code_FAQ.html
  * http://sandsprite.com/Sleuth/papers/RealWorld_XSS_1.html

**Low (Warning)**
**Cookie set without HttpOnly flag**

Description

A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.

Solution

Ensure that the HttpOnly flag is set for all cookies.

Reference

www.owasp.org/index.php/HttpOnly