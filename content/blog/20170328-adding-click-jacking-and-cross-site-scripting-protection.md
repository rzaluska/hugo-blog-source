title: Adding click-jacking and cross-site scripting protection
link: http://jaffamonkey.com/12351/adding-click-jacking-and-cross-site-scripting-protection
author: jaffamonkey
description: 
post_id: 12351
created: 2017/03/28 14:00:27
created_gmt: 2017/03/28 14:00:27
comment_status: closed
post_name: adding-click-jacking-and-cross-site-scripting-protection
status: publish
post_type: post

# Adding click-jacking and cross-site scripting protection

Two of the common found vulnerabilities found by the OWASP ZAP tool are missing X-Frame-Options and X-XSS-Protection response header values. These go some way to prevent clickjacking and cross-site scripting attacks. The fix is to add headers refs to the web server confirmation files. Below is example for Nginx (**nginx.conf**): [code]server { ... location / { add_header X-Content-Type-Options nosniff; add_header X-XSS-Protection "1; mode=block"; add_header X-Frame-Options "SAMEORIGIN" always; } } [/code]