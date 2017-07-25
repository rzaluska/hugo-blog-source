title: Changing Wordpress 3.5x from sub-domain to sub-directory setup
link: http://jaffamonkey.com/8730/changing-wordpress-3-5x-from-sub-domain-to-sub-directory-setup
author: jaffamonkey
description: 
post_id: 8730
created: 2013/03/12 11:19:11
created_gmt: 2013/03/12 11:19:11
comment_status: open
post_name: changing-wordpress-3-5x-from-sub-domain-to-sub-directory-setup
status: publish
post_type: post

# Changing Wordpress 3.5x from sub-domain to sub-directory setup

Firstly, it goes without saying that you must **backup your database and the wp-config.php and .htaccess files**, before starting. One of the big advantages of WordPress is in it's recovery robustness, but it cannot recover if you don't have backed up data.  Newer versions of Wordpress allow this process of changing changing an existing WordPress 3.5x sub-domain install, to a sub-directory setup.  Better for SEO too, as now it is posible for sub-domains to adversely affect the SEO ranking of your to-level domain. NOTE: This won't change existing blogs to sub-directory setup.  This is possible if you want to trawl through database editing settings.  But you would end up with a more robust setup is you exported all your content (uing XML export), then set up WordPress again, correctly.  Sub-domain exports will import fine into a sib-directory WordPress installation. 

### Step 1

Update wp-config.php with: `define('MULTISITE', true); define('SUBDOMAIN_INSTALL', false); define('DOMAIN_CURRENT_SITE', 'yourdomain.com'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);`

### Step 2

Your .htaccess should look like this:- `RewriteEngine On RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L] RewriteRule ^([_0-9a-zA-Z-]+/)?files/(.+) /wp-includes/ms-files.php?file=$2 [L] RewriteRule ^([_0-9a-zA-Z-]+/)?wp-admin$ $1wp-admin/ [R=301,L] RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^([_0-9a-zA-Z-]+/)?(wp-(content|admin|includes).*) /$2 [L] RewriteRule ^([_0-9a-zA-Z-]+/)?(.*.php)$ /$2 [L] RewriteRule . index.php [L]` Because of the .htaccess rewrite, you don't need to set WP_CONFIG_DIR and WP_CONFIG_URL they are calculated by WordPress accordingly. You can now create sub-folder sites, and access your admin pages at http://yourdomain.com/wp-admin or http://yourdomain.com/subsite/wp-admin