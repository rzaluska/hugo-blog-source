title: Responsive Facebook Like Box
link: http://jaffamonkey.com/8498/responsive-facebook-like-box
author: jaffamonkey
description: 
post_id: 8498
created: 2013/02/03 12:44:57
created_gmt: 2013/02/03 12:44:57
comment_status: open
post_name: responsive-facebook-like-box
status: publish
post_type: post

# Responsive Facebook Like Box

The [facebook Like widget](https://developers.facebook.com/docs/reference/plugins/like-box/) that you can generate and copy/paste the code, does not respond well on browser resizing. You can make this widget responsive (i.e. dynamically resizing based on screen size) by adding this to your theme css. The problem is the dependence on iframe - a archaic, useful and sometimes annoying inline frame that is used to embed another document within the current HTML document. Here is the CSS you need to add:- `#fb-root { display: none; }` /* To fill the container and nothing else */ `.fb_iframe_widget, .fb_iframe_widget span, .fb_iframe_widget span iframe[style] { width: 100% !important; }`