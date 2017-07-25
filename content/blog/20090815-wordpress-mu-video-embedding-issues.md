title: Wordpress MU - Video Embedding Issues
link: http://jaffamonkey.com/2451/wordpress-mu-video-embedding-issues
author: jaffamonkey
description: 
post_id: 2451
created: 2009/08/15 10:59:10
created_gmt: 2009/08/15 09:59:10
comment_status: open
post_name: wordpress-mu-video-embedding-issues
status: publish
post_type: post

<!--<a href="http://blog.jaffamonkey.com/files/2009/08/viper.png"><img class="alignleft size-thumbnail wp-image-2453" src="http://blog.jaffamonkey.com/files/2009/08/viper-150x95.png" alt="viper" width="150" height="95" /></a>I had recent problems on both Wordpress and Wordpress MU, embedding video.    I tried embedding videos from Vimeo, Youtube, Vodpod ... all with same result - the object and/or embed code was stripped.    The forums threads lead into black holes, spattered with the usual annoying "works for me!" comments (without actually saying why they thought it works).  They might as well add "nyah nyah!" on the end of their comments.-->

# Wordpress MU - Video Embedding Issues

![viper](http://blog.jaffamonkey.com/files/2009/08/viper-150x95.png)I had recent problems on both Wordpress and Wordpress MU, embedding video.   I tried embedding videos from Vimeo, Youtube, Vodpod ... all with same result - the object and/or embed code was stripped.    The forums threads lead into black holes, spattered with the usual annoying "works for me!" comments (without actually saying why they thought it works). They might as well add "nyah nyah!" on the end of their comments. All the standard fixes, such as disabling the Visual Editor, did nothing to solve my problem, and as Wordpress themeselves have been quiet on this subject,  I assume its work in progress.    I do not have this problem with standalone Wordpress, but I would rather stick with MU as it is more progressive application, so the following seemed like a better solution all round. I got round this issue using a plugin - and I think I might stick with it. the one I am using very successfully is Viper's Video Quicktags, which supports most of the major and a few obscure video bookmarking sites. It has good history and is a popular download. The presentation is customisable, and the plugins get sround the issue of embnedding code directly into wordpress pages/post by using a shortcode to call a function, rather than scripts running within the page itself. These are inserted by buttons added to editor toolbar, when you install the plugin.  Video below is short demo, and was also inserted into this post using the plugin. [youtube]http://www.youtube.com/watch?v=fj8lw4SmUeg[/youtube] One of the solutions on the forums may work for you (such as outlined on here An example here http://wordpress.org/support/topic/233745/) - but in my testing experience, there is usually a fundamental flaw that causes issues like this - my own theory is the editor itself (either TinyMCE and FCKEditor). But life is short, so Viper Videotags is good solution - both short and long term. 

#### Currently supported videos:-

  * YouTube (including playlists)
  * Google Video
  * DailyMotion
  * Vimeo
  * Veoh
  * Viddler
  * Metacafe
  * Blip.tv
  * Flickr videos
  * Spike.com/IFILM
  * MySpaceTV
**And generic video support too!**

  * Flash Video Files (FLV)
  * QuickTime (MOV, etc.)
  * Generic video files (AVI, MPEG, WMV, etc.)