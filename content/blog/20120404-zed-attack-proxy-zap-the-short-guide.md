title: Zed Attack Proxy (ZAP) - The short guide
link: http://jaffamonkey.com/6915/zed-attack-proxy-zap-the-short-guide
author: jaffamonkey
description: 
post_id: 6915
created: 2012/04/04 16:25:24
created_gmt: 2012/04/04 16:25:24
comment_status: open
post_name: zed-attack-proxy-zap-the-short-guide
status: publish
post_type: post

# Zed Attack Proxy (ZAP) - The short guide

> The Zed Attack Proxy (ZAP) is an easy to use integrated penetration testing tool for finding vulnerabilities in web applications. It is designed to be used by people with a wide range of security experience and as such is ideal for developers and functional testers who are new to penetration testing. ZAP provides automated scanners as well as a set of tools that allow you to find security vulnerabilities manually.

  1. Download [Zed Attack Proxy (ZAP)](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project), and install
  2. Run Zed Attack Proxy (ZAP)
  3. Go to Tools -> Options -> Connections, and set proxy settings to match your browser proxy settings (and proxy exclusions)
  4. Go to Tools -> Options -> Local proxy and enter localhost (port: 85),
  5. In your browser of choice, set proxy in LAN settings to localhost (port: 85), and clear the proxy exclusions list.
  6. Access a test site URL to verify settings all applied correctly (The Zed Attack Proxy "Sites" window should populate with all URL's visited)
  7. If the site requires Authentication, go to Tools -> Options -> Authentication, and add details in the table.
  8. Run Active Scan on root URL (Click Active Scan tab, and select URL from dropdown if not already selected).
  9. Click Report -> Generate HTML report, to view issues found.
  10. Run Spider test, which will pick up on 404 errors, missing URL references, and help you identify redundant file calls.