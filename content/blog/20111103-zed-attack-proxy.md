title: Zed Attack Proxy
link: http://jaffamonkey.com/4864/zed-attack-proxy
author: jaffamonkey
description: 
post_id: 4864
created: 2011/11/03 12:10:30
created_gmt: 2011/11/03 12:10:30
comment_status: open
post_name: zed-attack-proxy
status: publish
post_type: post

# Zed Attack Proxy

> The Open Web Application Security Project (OWASP) is a 501c3 not-for-profit worldwide charitable organization focused on improving the security of application software. Our mission is to make application security visible, so that people and organizations can make informed decisions about true application security risks

A very nifty tool to do some lightweight (but nonetheless effective) security testing. It picks up on basic errors such a cookie flag setting, script vulnerabilities, accessible unused pages, etc.. here is a brief guide on setup and operation 1\. [Download](https://www.owasp.org/index.php/Main_Page) and Install Zed Attack Proxy (ZAP) 2\. In ZAP Options -> Connections, set proxy settings to match your browser proxy settings (and proxy exclusions) 3\. ZAP Options -> Local proxy enter localhost (port: 85), 4\. In your browser of choice, set proxy in LAN settings to localhost (port: 85), and clear the proxy exclusions list. 5\. Access a URL to verify settings all applied correctly (The Zed Attack Proxy "Sites" window should populate with all URL's visited) OWSAP Video Tutorial (1 of 3) [youtube]http://www.youtube.com/watch?v=CDbWvEwBBxo[/youtube]