title: Directory Buster
link: http://jaffamonkey.com/3982/directory-buster
author: jaffamonkey
description: 
post_id: 3982
created: 2011/05/11 07:38:03
created_gmt: 2011/05/11 11:38:03
comment_status: open
post_name: directory-buster
status: publish
post_type: post

# Directory Buster

![](http://blog.jaffamonkey.com/files/2011/05/owasp_dir_buster-170x170.png)Another great security tool from the [Open Web Application Security Project](https://www.owasp.org). Asides from worrying spelling in a lot of these open source projects ("Responce"??), there is little gem to identify hidden pages/directories and directories with a web application, which highlights possible security holes (an emailer script in unused page for example). This can be used safely as the tool will not exploit anything it finds, just to find other possible attack vectors that are not immediately obvious.  It works by using a large list was generated from scratch, by crawling the Internet and collecting the directory and files that are actually used by developers. There a total of 9 different lists included with application. There is an option to perform a pure brute force, which leaves the hidden directories and files nowhere to hide. This tool is not quick, due to amount of data it is using - a good tool to leave running overnight. The following lists are included with DirBuster 

  * directory-list-2.3-small.txt - (87650 words) - Directories/files that where found on at least 3 different hosts
  * directory-list-2.3-medium.txt - (220546 words) - Directories/files that where found on at least 2 different hosts
  * directory-list-2.3-big.txt - (1273819 words) - All directories/files that where found
  * directory-list-lowercase-2.3-small.txt - (81629 words) - Case insensitive version of directory-list-2.3-small.txt
  * directory-list-lowercase-2.3-medium.txt - (207629 words) - Case insensitive version of directory-list-2.3-medium.txt
  * directory-list-lowercase-2.3-big.txt - (1185240 words) - Case insensitive version of directory-list-2.3-big.txt
  * directory-list-1.0.txt - (141694 words) - Original unordered list
  * apache-user-enum-1.0.txt - (8916 usernames) - Used for guessing system users on apache with the userdir module enabled, based on a username list I had lying around (unordered)
  * apache-user-enum-2.0.txt - (10341 usernames) - Used for guessing system users on apache with the userdir module enabled, based on ~XXXXX found during list generation (Ordered)