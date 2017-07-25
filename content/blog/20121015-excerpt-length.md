title: Control Post Excerpt Length using Filters
link: http://jaffamonkey.com/7600/excerpt-length
author: jaffamonkey
description: 
post_id: 7600
created: 2012/10/15 11:07:28
created_gmt: 2012/10/15 11:07:28
comment_status: open
post_name: excerpt-length
status: publish
post_type: post

# Control Post Excerpt Length using Filters

By default, excerpt length of a Wordpress post is set to 55 words.  To change excerpt length using excerpt_length filter, add the following code to functions.php file in your theme folder: function custom_excerpt_length( $length ) { return 20; } add_filter( 'excerpt_length', 'custom_excerpt_length', 999 ); The new word count setting is highlighted in red - leave the rest of the code as-is.