title: Visual Studio 2010 : Looping tests using CSV input
link: http://jaffamonkey.com/6540/visual-studio-2010-looping-tests-using-csv-input
author: jaffamonkey
description: 
post_id: 6540
created: 2012/02/26 22:07:31
created_gmt: 2012/02/26 22:07:31
comment_status: open
post_name: visual-studio-2010-looping-tests-using-csv-input
status: publish
post_type: post

# Visual Studio 2010 : Looping tests using CSV input

To do this, you need to adjust the Test Settings, available in the Test menu.  If you leave the default settings, and you are using csv input, the test will only run once (i.e. take the first line from csv file). ![](/wp-content/uploads/2012/02/vs2010_testsettings.png) Within dialog, select Web test then “One run per data source row” ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_testsettingsdialog.png) It is recommended to use “Save As …” option, so you keep the original setting intact. Then to switch the test settings as/when needed. ![](http://jaffamonkey.com/wp-content/uploads/2012/02/vs2010_testsettingssaveas.png)