title: Visual Studio 2010 : Adding and using datasources with tests
link: http://jaffamonkey.com/6546/visual-studio-2010-adding-and-using-datasources-with-tests
author: jaffamonkey
description: 
post_id: 6546
created: 2012/02/26 22:06:20
created_gmt: 2012/02/26 22:06:20
comment_status: open
post_name: visual-studio-2010-adding-and-using-datasources-with-tests
status: publish
post_type: post

# Visual Studio 2010 : Adding and using datasources with tests

This is short tutorial on how to add data sources to your test projects, and how to use them to replace recorded test data, in order to make the values dynamic.  After you have created your Performance Test Script recording, right-click on top of the tree (the test name), and select “Add Data Source”. ![](/wp-content/uploads/2012/02/vs2010_adddatasource1.png) Next, select CSV file and proceed with upload ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource2.png) Assuming the format of your CSV file is correct you will get display similar to below. ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource3.png) Finish Upload process, and then your newly added DataSource appears in the Data Sources folder, that appears after your scripting. ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource41.png) Now select a parameter that will use the uploaded Data Source to feed in values (this enables you to loop and script and automatically add new values). To do this, select paramater value string in script, and right-click to select “Properties” ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource5.png) If you click on the dropdown, you will see the DataSource uploaded visible. If you click down the tree, you will be presented with the CSV table columns. Select one that you want (in this case, I selected “User” column, as it is the username parameter I want to add values to. ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource6.png) Once you select a column, the recorded value is replaced with reference to the CSV column name. (To reverse this, simply select “Unbind” from the dropdown options). ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource7.png) And there you have it – the parameter is now being fed by the CSV file. If running test once, it will simply take the first line in CSV file. ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_adddatasource81.png)