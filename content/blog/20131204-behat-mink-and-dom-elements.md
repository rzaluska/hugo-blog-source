title: Behat, Mink and DOM elements
link: http://jaffamonkey.com/10578/behat-mink-and-dom-elements
author: jaffamonkey
description: 
post_id: 10578
created: 2013/12/04 15:40:39
created_gmt: 2013/12/04 15:40:39
comment_status: open
post_name: behat-mink-and-dom-elements
status: publish
post_type: post

# Behat, Mink and DOM elements

![DOM elements](/wp-content/uploads/2013/12/dom_elements-200x200.png)There is a constriction around how mink selects DOM elements, but you can customise the mink selectors easily. For instance, what if you have an image link that has no id or title? By default, mink will look for dom elements of id,title,alt or text for links, but this is not always relevant. To add other DOM elements .... [code language="bash"]$ sudo nano vendor/behat/mink/src/Behat/Mink/Selector/NamedSelector.php[/code] You will find sections in this file for each type of selector - in this example, I am adding a dom element called **data-id** to the link type, which Mink will now look for in any UI link reference (text or image). ,'link' => <<<XPATH .//a[./@href][(((./@id = %locator% or contains(normalize-space(string(.)), %locator%)) or contains(./@title, %locator%) **or contains(./@data-id, %locator%)** or contains(./@rel, %locator%)) or .//img[contains(./@alt, %locator%)])] | .//*[./@role = 'link'][((./@id = %locator% or contains(./@value, %locator%)) or contains(./@title, %locator%) **or contains(./@data-id, %locator%)** or contains(normalize-space(string(.)), %locator%))] XPATH