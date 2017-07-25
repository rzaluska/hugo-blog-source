title: VS2010 Automated Testing - Extraction Rules and Conditions
link: http://jaffamonkey.com/6038/vs2010-automated-testing-extraction-rules-and-conditions
author: jaffamonkey
description: 
post_id: 6038
created: 2012/01/24 17:00:09
created_gmt: 2012/01/24 17:00:09
comment_status: open
post_name: vs2010-automated-testing-extraction-rules-and-conditions
status: publish
post_type: post

# VS2010 Automated Testing - Extraction Rules and Conditions

To validate values on screen is easy, as Visual Studio provides method of extraction values displayed on screen in a number of ways. I found the most reliable is to extract using relevant field id and/or name, but good markup practices are not always observed.  The method demonstrated here is to use the html code surrounding the value you want to extract, as method of extraction.  One you have extracted value and stored in meaningful parameter name, it will be available to select. To do this, identify step in recorded test (I always use Web Performance Test template) where the value you want to extract is visible (you can use the test results window to discover this). Then right-click over the test step and “Add Extraction Rule”.  The screenshots below should give you some kind of guidance as to way to what to enter. In example here, I am simply using the “Extract text” option – the ideal would be form elements or attributes to isolate values, but this is example when that isn’t an option. Now you extracted value will be available to select for other functions, such as Conditional rules. After you have followed steps above, you will have added a parameter Context Parameters available, when you create a conditional rule.  For conditional rules, you can now select your extracted value into Context Parameter name field. For the value to compare to (i.e. the same field extracted at later test step), you cannot select it the same manner, so use the format {{extracted_parameter_name}}. This is how Visual Studio recognises that the value is a parameter. ![](/wp-content/uploads/2012/01/4.png) Below are examples of how to use the general “Extract text” and "Extract Form Field" options of extraction. ![](http://jaffamonkey.com/wp-content/uploads/2012/01/1.png) ![](http://jaffamonkey.com/wp-content/uploads/2012/01/5.png)