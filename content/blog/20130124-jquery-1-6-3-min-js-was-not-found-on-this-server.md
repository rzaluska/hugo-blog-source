title: jquery-1.6.3.min.js was not found on this server
link: http://jaffamonkey.com/8468/jquery-1-6-3-min-js-was-not-found-on-this-server
author: jaffamonkey
description: 
post_id: 8468
created: 2013/01/24 19:59:10
created_gmt: 2013/01/24 19:59:10
comment_status: open
post_name: jquery-1-6-3-min-js-was-not-found-on-this-server
status: publish
post_type: post

# jquery-1.6.3.min.js was not found on this server

If you an ugly "jquery-1.6.3.min.js was not found on this server" message at the top of your WordPress, it is guaranteed to be result of a call made by either your theme or an active plugin. A search of your themes and plugins folder will identify. Most of the time, just removing the line that calls the file, fixes the problem. The problem is related to the URL that the theme/plugin is calling to obtain the jquery-1.6.3.min.js file. 

  1. Search theme and plugins folders for "jquery-1.6.3.min.js" (most likely will only appear once)
  2. Open file(s) and remove the whole variable string.
  3. Recheck your site.
Of course this could potentially happen with any version of any library, but "jquery-1.6.3.min.js was not found on this server" appears to be particularly common error.