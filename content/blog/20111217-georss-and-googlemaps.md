title: Wordpress and georss
link: http://jaffamonkey.com/9067/georss-and-googlemaps
author: jaffamonkey
description: 
post_id: 9067
created: 2011/12/17 12:36:33
created_gmt: 2011/12/17 12:36:33
comment_status: open
post_name: georss-and-googlemaps
status: publish
post_type: post

# Wordpress and georss

How to create georss from your wordpress site feed. Firstly, you will need to ensure that your posts have post meta values for latitude and longitude. Geonames provide extensive amount of worldwide geolocation data http://www.geonames.org/export/. Plugins can do this work, but this is an exercise to remove dependncy from googlemaps wordpress plugins (which add overhead and sometimes unecessary complaication with wordpress and/or theme upgrades. I was using geo-mashup plugin which was excellent, but I realised quickly I was only using about 5% of the functionality it offered - overkill!  Add the following to you functions.php file add_action('init', 'my_maps_init'); function my_maps_init() { add_feed('georss','my_georss_feed'); } function my_georss_feed() { load_template( TEMPLATEPATH . '/wp-georss.php' ); } Now you can create your new wp-georss.php template. As well as standard post meta, it contains latitude and longitude coordinates from two new custom fields set up in the post itself. How you are generating/adding these values is down to the tools you are using, or you can do a manual postmeta adding process. 
    
    
    <?php
    
    echo '<?xml version="1.0" encoding="'.get_option('blog_charset').'" standalone="yes"?'.'>'; ?>
    
    <feed xmlns="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
     xmlns:georss="http://www.georss.org/georss"
     xmlns:woe="http://where.yahooapis.com/v1/schema.rng"
     xmlns:media="http://search.yahoo.com/mrss/">
    
     <title><?php bloginfo_rss('name'); echo ' - '; wp_title_rss(); ?></title>
     <link rel="self" href="<?php self_link(); ?>" />
     <link rel="alternate" type="text/html" href="<?php bloginfo_rss('url') ?>"/>
     <subtitle><?php the_category_rss(); ?></subtitle>
     <updated><?php echo mysql2date('D, d M Y H:i:s +0000', get_lastpostmodified('GMT'), false); ?></updated>
     <generator uri="<?php bloginfo('url'); ?>"><?php bloginfo('name'); ?></generator>
    
     <?php while( have_posts()) : the_post(); 
     $geoLat = get_post_meta($post->ID, 'geoLat', true);
     $geoLon = get_post_meta($post->ID, 'geoLon', true);
     $coords = $geoLat.' '.$geoLon;
    
     if ($geoLat && $geoLon) :
     ?>
     <entry>
     <title><?php the_title_rss() ?></title>
     <link rel="alternate" type="text/html" href="<?php the_permalink_rss() ?>"/>
     <published><?php echo mysql2date('r', get_the_time('Y-m-d H:i:s')); ?></published>
     <updated><?php echo mysql2date('r', get_the_modified_time('Y-m-d H:i:s')); ?></updated>
     <content type="html"><![CDATA[<div class="window"><p>Snapshot blog post: <a href="<?php the_permalink_rss() ?>">Read original</a></p><p><?php the_post_thumbnail('thumbnail'); ?></p><p><?php the_excerpt_rss(); ?></p></div>]]></content>
     <author>
     <name><?php the_author(); ?></name>
     <uri>?php the_author_posts_link(); ?></uri>
     </author>
     <link rel="enclosure" type="image/jpeg" href="<?php //the_post_thumbnail('large'); ?>" />
     <georss:point><?php echo $coords ?></georss:point>
     <geo:lat><?php echo $geoLat ?></geo:lat>
     <geo:long><?php echo $geoLon ?></geo:long>
     </entry>
     <?php endif; endwhile; ?>
    </feed>

Now to view your new feed, use the following format:- **http://www.yourwordpresssite.com/?feed=georss** Part 2 - [Generating postmeta coordinates when you add a post](http://blog.jaffamonkey.com/2012/02/03/generating-coordinates-from-location/)