title: WP Admin white screen of death
link: http://jaffamonkey.com/8432/wp-admin-white-screen-of-death
author: jaffamonkey
description: 
post_id: 8432
created: 2013/01/17 22:54:09
created_gmt: 2013/01/17 22:54:09
comment_status: open
post_name: wp-admin-white-screen-of-death
status: publish
post_type: post

# WP Admin white screen of death

The WP Admin white screen of death can occur for several reasons, but by far the most common is spaces at the beginning and/or end of the w-config.php file. Or erronoeus BOMs (Byte-order marks) - usually introduced using windows editing software. When the BOM is used in web pages or editors for UTF-8 (standard European character set) encoded content it can sometimes introduce blank spaces or short sequences of strange-looking characters (such as **ï»¿**) onto a webpage. To avoid the problem to start with, and also to diagnose if you do have BOMs in files, use a Vi-type editor.  Avoid using editors such as Notepad or Wordpad (both notorious for adding BOMs).  And wouldn't you want to see ALL the contents of code file you are editing anyway? Also, stick to quality ftp clients such as Filezilla or Mindterm (ftp programs can add these BOMs "in transit").  Also ensure that your ftp client is set to transfer file in format UTF-8, and not something like Unicode.  Of course, the best way is to avoid problem at source, which is in the choice of code editor.