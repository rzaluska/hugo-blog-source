title: Linux CLI File/Folder Management
link: http://jaffamonkey.com/10916/linux-cli-filefolder-management
author: jaffamonkey
description: 
post_id: 10916
created: 2014/06/25 12:12:36
created_gmt: 2014/06/25 12:12:36
comment_status: open
post_name: linux-cli-filefolder-management
status: publish
post_type: post

# Linux CLI File/Folder Management

A growing page ... 

#### Replace instance of word/phrase in multiple directories

find /path/to/directory/ -name 'filename filter' -print0 | xargs -0 sed -i -e 's/**xyz**/**zyx**/g' 

#### Delete subfolders that contain content within 1 or many files

_Execute from directory containing sub-directories for deletion_ find dir.* -mindepth 2 -type f -exec grep -q "**search word/phrase**" {} \; -delete