title: First Wordpress plugin
link: http://jaffamonkey.com/9400/first-wordpress-plugin
author: jaffamonkey
description: 
post_id: 9400
created: 2013/05/20 00:11:44
created_gmt: 2013/05/20 00:11:44
comment_status: closed
post_name: first-wordpress-plugin
status: publish
post_type: post

# First Wordpress plugin

I released my first Wordpress plugin today. I have have been trawling through custom code I have coded over years, and found some that are ideal to turn into plugins. The first is a simple on that adds an address field on the post form, and allows user to add a googlemap identifying location, with a customisable widget. Will be adding a proximity search and multiple map marker display in future releases.  Will also be creating a user guide to demontsrate how to create plugins, and how this particular one was made.

### Plugin Details

  * Plugin Name: Post Map
  * Plugin URI: http://jaffamonkey.com
  * Description: Add coordinates post meta based on location, and display map widget in sidebar.
  * Version: 0.1
  * Author: jaffamonkey
  * Author URI: http://jaffamonkey.com
  * License: GPL2
**INSTALLATION** _[Download plugin_](/plugins/PostMap.zip) _[Download from wordpress.org](http://wordpress.org/extend/plugins/post-map/)_ 1\. Upload plugin folder to Plugins directory of your Wordpress Installation. 2\. Activate! On your Add/Edit post form you will see an additional location field. You can type a full address, or simply just a postcode/zipcode (best to add country also). To display a map, there is a "Post Map" widget, with option to set Zoom level, map width and map height. This simple plugin comprises of two files. The index.php takes care of generating coordinates based on address input, and ensures plugin funtionaility is hooked into wordpress. mapwidget.php creates widget, options and map rendering. 

#### index.php

<? require ('mapwidget.php'); class add_coords { function addcoords($post_ID)  { $address = $_POST["postcode"]; $prepAddr = str_replace(' ','+',$address); $geocode=file_get_contents('http://maps.google.com/maps/api/geocode/json?address='.$prepAddr.'&sensor=false'); $output= json_decode($geocode); $latitude = $output->results[0]->geometry->location->lat; $longitude = $output->results[0]->geometry->location->lng; add_post_meta($post_ID, 'post_latitude', $latitude, true); add_post_meta($post_ID, 'post_longitude', $longitude, true); add_post_meta($post_ID, 'postcode', $address, true); }} function my_post_options_box() { add_meta_box('location', 'Post Location', 'custom_post_info', 'post', 'side', 'high'); } function custom_post_info() { global $post; ?> <fieldset id="mycustom-div"> <div> <p> <label for="postcode">Enter postcode:</label><br /> <input type="text" name="postcode" id="postcode" value="<?php echo get_post_meta($post->ID, 'postcode', true); ?>"> </p> </div> </fieldset> <?php } $myCoordsClass = new add_coords(); add_action('publish_post', array($myCoordsClass, 'addcoords')); add_action('admin_menu', 'my_post_options_box'); add_action('wp_head', '<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>'); ?>

#### mapwidget.php

<?php add_action("widgets_init", array('Post_map', 'register')); class Post_map { function control(){ $data = get_option('post_map'); echo '<p><label>Map width<input name="post_map_option1" type="text" value="'.$data['option1'].'" /></label></p> <p><label>Map height<input name="post_map_option2" type="text" value="'.$data['option2'].'" /></label></p> <p><label>Map zoom level<input name="post_map_option3" type="text" value="'.$data['option3'].'" /></label></p>'; if (isset($_POST['post_map_option1'])){ $data['option1'] = attribute_escape($_POST['post_map_option1']); $data['option2'] = attribute_escape($_POST['post_map_option2']); $data['option3'] = attribute_escape($_POST['post_map_option3']); update_option('post_map', $data); } } function widget($args){ global $post; $result = get_option('post_map'); $mapzoom = $result ['option3']; $mapwidth = $result ['option1']; $mapheight = $result ['option2']; $postlatitude2 = get_post_meta($post->ID, 'post_latitude', true); $postlongitude2 = get_post_meta($post->ID, 'post_longitude', true); echo $args['before_widget']; echo $args['before_title'] . 'Location' . $args['after_title']; echo '<div id="map" style="width:'.$mapwidth.'px;height: '.$mapheight.'px;"></div> <script type="text/javascript"> var myOptions = { zoom: '.$mapzoom.', center: new google.maps.LatLng('.$postlatitude2.', '.$postlongitude2.'), mapTypeId: google.maps.MapTypeId.ROADMAP, }; var map = new google.maps.Map(document.getElementById("map"), myOptions); var marker = new google.maps.Marker({position: new google.maps.LatLng('.$postlatitude2.', '.$postlongitude2.'),map: map}) </script> '; echo $args['after_widget']; } function register(){ register_sidebar_widget('Post Map', array('post_map', 'widget')); register_widget_control('Post Map', array('post_map', 'control')); } }