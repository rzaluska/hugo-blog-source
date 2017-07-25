title: How to Control Tab Order in HTML
link: http://jaffamonkey.com/3618/how-to-control-tab-order-in-html
author: jaffamonkey
description: 
post_id: 3618
created: 2011/02/28 12:47:19
created_gmt: 2011/02/28 17:47:19
comment_status: open
post_name: how-to-control-tab-order-in-html
status: publish
post_type: post

# How to Control Tab Order in HTML

Seems a common omission on websites, so posting for info ... tabindex is the key to doing this. Don't make assumptions on your users - you dont have to be disabled to use tabbing to navigate between fields. Example code snippet: input type="text" name="field1" tabindex=1 And if they arent in the right order, its a real irritation ("User, say byebye"). Click in first field then use TAB to navigate. Field 1 (first tab selection):  
  
  
Field 2 (third tab selection):  
  
  
Field 3 (second tab selection):