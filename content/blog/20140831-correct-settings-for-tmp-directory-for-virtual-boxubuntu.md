title: Correct settings for tmp directory for Virtual Box/Ubuntu
link: http://jaffamonkey.com/11004/correct-settings-for-tmp-directory-for-virtual-boxubuntu
author: jaffamonkey
description: 
post_id: 11004
created: 2014/08/31 01:09:16
created_gmt: 2014/08/31 01:09:16
comment_status: open
post_name: correct-settings-for-tmp-directory-for-virtual-boxubuntu
status: publish
post_type: post

# Correct settings for tmp directory for Virtual Box/Ubuntu

Seems small. but causes a lot of issues, if you search VirtualBox forums. The common output from not setting the tmp directory permissions correctly is NS_ERROR_FACTORY_NOT_REGISTERED. Here are correct settings [code language="bash"]$ sudo bash $ chown root.root /tmp $ chmod ug-s /tmp $ chmod 1777 /tmp[/code]