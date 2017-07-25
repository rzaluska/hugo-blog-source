title: WordPress DB Tidy
link: http://jaffamonkey.com/8770/wordpress-db-tidy
author: jaffamonkey
description: 
post_id: 8770
created: 2013/03/14 21:25:02
created_gmt: 2013/03/14 21:25:02
comment_status: open
post_name: wordpress-db-tidy
status: publish
post_type: post

# WordPress DB Tidy

As all WordPress developers know, it doesn't take too long for the database to get clunky, especially with the wp_options table.  A lot of plugins/themes do not uninstall gracefully.  This junk is generally harmless but does compromise efficiency.  There are a set of plugins are use that deal with this issue to a large degree. [Bulk Delete](http://wordpress.org/extend/plugins/bulk-delete/) Bulk delete posts from selected categories or tags. Use it with caution. [Mass delete unused tags](http://wordpress.org/extend/plugins/mass-delete-unused-tags/) Deletes all unused tags, handy tool if you want to start over with a quick clean blog. [Options Optimizer](http://wordpress.org/extend/plugins/options-optimizer/) Optimizes WP-options tables by highlighting all the unused options. You may be careful to validate where the options reported and unused originated from. A search on the option in Google usually finds the plugin or theme that uses it. [WP CleanFix](http://wordpress.org/extend/plugins/wp-cleanfix/) WP CleanFix is an all in one tool for check, repair, fix and optimize your WordPress blog. This is one to run after you have completed the above 3 steps.