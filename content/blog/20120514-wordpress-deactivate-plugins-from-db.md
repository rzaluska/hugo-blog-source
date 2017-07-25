title: Wordpress - deactivate plugins from db
link: http://jaffamonkey.com/7123/wordpress-deactivate-plugins-from-db
author: jaffamonkey
description: 
post_id: 7123
created: 2012/05/14 01:26:00
created_gmt: 2012/05/14 01:26:00
comment_status: open
post_name: wordpress-deactivate-plugins-from-db
status: publish
post_type: post

# Wordpress - deactivate plugins from db

Sometimes it may be necessary to deactivate plugins, but you can't access the administrative menus to do so. usually down to a flaky plugin that not only fails to work, but leaves garbage that causes wordpress to throw a hissy fit. In the table wp_options, under the option_name column (field) find the active_plugins row TO deactivate ALL plugins, change the option_value field to: a:0:{}.  Hopefully this should intially bring your site back to life, and you can gradually activate each plugin until you find the offending one (that causes your site to fall over), Here is an example from the option record:- a:11:{i:0;s:31:"autocompleter/autocompleter.php";i:1;s:48:"classipress-ajax-post-sort/wp-ajax-post-sort.php";i:2;s:21:"cpmobile/cpmobile.php";i:3;s:21:"exec-php/exec-php.php";**i:4;s:43:"image-sizes-manager/image-sizes-manager.php";**i:6;s:30:"premium-gallery/sp-gallery.php";i:7;s:40:"related-ads/related-posts-thumbnails.php";i:8;s:35:"si-contact-form/si-contact-form.php";i:9;s:25:"user-photo/user-photo.php";i:10;s:41:"wordpress-importer/wordpress-importer.php";} To remove reference to a plugin, that you already know is the likely problem, simply remove the whole entry (terminated by a ";").  The blue highlighted text illustrates a complete plugin entry.