title: Redirect subdomain URL path to main domain (WordPress)
link: http://jaffamonkey.com/8911/redirect-subdomain-url-path-to-main-domain-wordpress
author: jaffamonkey
description: 
post_id: 8911
created: 2013/03/20 03:06:43
created_gmt: 2013/03/20 03:06:43
comment_status: closed
post_name: redirect-subdomain-url-path-to-main-domain-wordpress
status: publish
post_type: post

# Redirect subdomain URL path to main domain (WordPress)

Firstly I have to credit [Mika Epstein](http://profiles.wordpress.org/ipstenu/) for providing solution to this. You can qucikly tie yourself in knots with htaccess and mod_rewrite. Becasue I had transferred my blog from WordPress multisite subdomain to main blog, I wanted to be able to catch people following links to old blog site URL. Basically I wanted a rewrite to transform the URL by chaging the domain only, but retianing folder structure. For example if some clicking on:- **<http://blog.jaffamonkey.com/2013/03/16/dont-disappear-in-your-own-life/>** it would redirect to the new URL:- **http://jaffamonkey.com/2013/03/16/dont-disappear-in-your-own-life/** Here is the htaccess file that makes it work - the two key lines at the ones at the top. 
    
    
    RewriteCond %{HTTP_HOST} ^blog.example.com  [NC]
    RewriteRule ^(.*) http://example.com/$1 [L,R=301]
    
    # BEGIN WordPress
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index.php$ - [L]
    
    # uploaded files
    RewriteRule ^files/(.+) wp-includes/ms-files.php?file=$1 [L]
    
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    RewriteRule . index.php [L]
    # END WordPress
    
    <IfModule mod_security.c>
     SecFilterEngine Off
     SecFilterScanPOST Off
    </IfModule>