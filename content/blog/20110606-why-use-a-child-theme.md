title: Why use a child theme?
link: http://jaffamonkey.com/4219/why-use-a-child-theme
author: jaffamonkey
description: 
post_id: 4219
created: 2011/06/06 05:49:41
created_gmt: 2011/06/06 09:49:41
comment_status: open
post_name: why-use-a-child-theme
status: publish
post_type: post

# Why use a child theme?

![wireframe1](http://blog.jaffamonkey.com/files/2011/06/wireframe-125x125.jpg)It's an odd question now perhaps, as child themes are still pretty thin on the ground. I think this is largely down to misunderstandings about the concept and how they can help. The main advantage of child theme is:-

1\. You can generate sites quickly from the same core/parent template. 2\. Updates to core/parent theme design also updates the associated child themes as well. 3\. Encourages cleaner coding, as you are forced to observe a process in order for child themes to work properly.

It’s only okay to not use a child theme if you plan on making no modifications to code. But in this day and age, even this is a little short-sighted. For example, if you plan on modifying the sidebar widget style, then you should create a child theme. As a web designer, think about it - you create many sites, and how different are they once you strip away images, fonts and colour?

Taking Wordpress as example platform - a child theme is a theme that inherits the functionality of another theme, called the parent theme, and allows you to modify, or add to, the functionality of that parent theme. Wordpress already deals in child themes - every wordpress theme released is essentially a child theme of wordpress core templete structure. So more accurate to call these themes "parent themes".

Making a start on a child theme is very simple. Create a directory, put a properly formatted style.css file in it, inlcude call to parent theme stylesheet, and you have a child theme. With a little understanding of HTML and CSS, you can make that very basic child theme modify the styling and layout of a parent theme to any extent without editing the files of the parent theme itself. That way, when the parent theme is updated, your modifications are preserved. To really extend a parent theme, you can also add your own page templates into the equation, though best to make sure your parent theme includes the more generic templates.

The parent theme is important here - the quality and flexibility of the code will determine how far you can go with the child themes, including more complex changes to do with functions, and layouts. for more in depth look into child themes, have a look here http://codex.wordpress.org/Child_Themes.

  
  


> ![](http://blog.jaffamonkey.com/files/2011/06/webpagelayout-200x440.png) Creating a strong parent WordPress Theme framework is critical for WordPress Theme development, as described in Why I Created a WordPress Theme Framework by Justin Tadlock. With a solid framework in the parent Theme, the child Theme will integrate easily when the user makes changes to the Theme or wants to use a child Theme. Think of the parent/child feature of WordPress like selecting blueprints for construction of your new home. You look at the various room placements and sizes, the layout, the traffic flow, the architectural specifications that you prefer. You know the decision of which floor plan to choose isn’t based upon the desire to have the walls in the kitchen painted yellow with green stonework, or the carpet in the bedrooms be blue with wood floors in the living areas. It isn’t about the wall paper, curtains, or paint. You just want the master bedroom far from the room where the kids will be playing and watching movies all night. The paint and carpets come later. Once you have the floor plan and blueprints selected, and the house is under construction, then it’s time to start hunting up paint and carpet samples to begin the home decoration process. The floor plan blueprint, in this simple analogy, is the parent WordPress Theme. It sets the overall structure of the design. The decorations are found in the Child Theme, with the stylesheet guiding the paint, carpet, wall paper, and home decorations. [Lorelle on Wordpress](http://lorelle.wordpress.com/2008/12/30/parentchild-themes-in-wordpress-the-future-of-wordpress-themes/)