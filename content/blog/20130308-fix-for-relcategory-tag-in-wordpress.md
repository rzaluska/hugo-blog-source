title: Fix for rel=”category tag” in WordPress
link: http://jaffamonkey.com/8648/fix-for-relcategory-tag-in-wordpress
author: jaffamonkey
description: 
post_id: 8648
created: 2013/03/08 04:00:17
created_gmt: 2013/03/08 04:00:17
comment_status: open
post_name: fix-for-relcategory-tag-in-wordpress
status: publish
post_type: post

# Fix for rel=”category tag” in WordPress

HTML5 spec says that only certain rel types are allowed and WordPress’ “category tag” isn’t one of them. This replacement function code strips out the current rel=”category tag” and replaces it with rel="tag" in the functions.php file for the theme. By adding it to the functions.php for the theme, this provides a theme wide fix rather than having to edit individual templates. Replace the function remove_category_list_rel($output) in functions.php file /*======================================================================= * Remove rel attribute from the category list *=======================================================================*/ `function remove_category_list_rel($output) { $output = str_replace(‘rel="category tag"’, "", $output); return $output; }`