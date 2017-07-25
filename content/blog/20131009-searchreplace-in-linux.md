title: Search/Replace in Linux
link: http://jaffamonkey.com/10328/searchreplace-in-linux
author: jaffamonkey
description: 
post_id: 10328
created: 2013/10/09 13:59:00
created_gmt: 2013/10/09 13:59:00
comment_status: open
post_name: searchreplace-in-linux
status: publish
post_type: post

# Search/Replace in Linux

Search and replace on multiple files in multiple directories is really easy in Linux:- [code language="bash"]find *enter directory here* -type f -exec sed -i 's/*enter search string here*/*enter replacement string here*/g' {} \;[/code] Example: [code language="bash"]find /home/jaffamonkey/testfiles -type f -exec sed -i 's/I am a nerd/I am a geek/g' {} \;[/code]