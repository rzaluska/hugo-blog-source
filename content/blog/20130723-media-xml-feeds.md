title: Media XML feeds parsing
link: http://jaffamonkey.com/10079/media-xml-feeds
author: jaffamonkey
description: 
post_id: 10079
created: 2013/07/23 23:21:15
created_gmt: 2013/07/23 23:21:15
comment_status: open
post_name: media-xml-feeds
status: publish
post_type: post

# Media XML feeds parsing

Media XML feeds parsed by php (file_get_contents and SimpleXmlElement) [code language="php"] $context = stream_context_create( array( 'http' => array( 'follow_location' => false ) ) ); $content = file_get_contents("http://xyogasangeetax.api.channel.livestream.com/2.0/latestclips.xml", false, $context); $data = new SimpleXmlElement($content); foreach($data->channel->item as $entry) { if ($media = $entry->children('media', TRUE)) { echo "<div style=\"width:160px;display:block;float:left;padding:15px;\">"; $attributes = $media->content->attributes(); $src = $play_attributes['url']; if ($media->thumbnail) { $attributes = $media->thumbnail->attributes(); $imgsrc = (string)$attributes['url']; echo "<img src=\"$imgsrc\" alt=\"\" \/>"; } } $pub_date= explode("-",$entry->pubDate); echo date('F d,Y',strtotime(trim($pub_date[0]))); echo "</div>"; }[/code]