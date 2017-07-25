title: VS2010 - Using Database Unit Test For Cleanup
link: http://jaffamonkey.com/8892/vs2010-using-database-unit-test-for-cleanup
author: jaffamonkey
description: 
post_id: 8892
created: 2012/06/15 10:39:57
created_gmt: 2012/06/15 10:39:57
comment_status: open
post_name: vs2010-using-database-unit-test-for-cleanup
status: publish
post_type: post

# VS2010 - Using Database Unit Test For Cleanup

Tidying up after running test scripts is essentially for reusability. And one of the easiest and slickest way is to use the database unit test.  Once you have created this unti test it can be executed independantly, or inlcuding as part of the stop/start setup scripts. This example assumes you have access to the test database, and 

  1. Create new Test of type "Database Unit Test"
  2. Select database from dropdown, or click to "Create New Connection"
  3. Click the "Click to create" link of resultant window, to enter in SQL statements
_You can include SQL to run in three part of the same unit test. This is useful if doing a pure database unit test, but as this is demonstration of using database unit tests to set up and clear test data, using the different sections is purely for identifying which SQL to run at what time:-_ Pre-test (SQL to run prior to test execution) ![Pre-test SQL](/wp-content/uploads/2012/06/vs2010_db_test1-300x201.png) Test (SQL to run during test execution) Post-test ![Post-test SQL](http://jaffamonkey.com/wp-content/uploads/2012/06/vs2010_db_test2-300x194.png) _There are "Test Conditions" that can be set, but as purpose of this guide is using Database Unit Tests for db setup and cleanup, test conditions will be dealt with in separate post._