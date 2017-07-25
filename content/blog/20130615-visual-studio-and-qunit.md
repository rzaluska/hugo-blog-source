title: Visual Studio and QUnit
link: http://jaffamonkey.com/9623/visual-studio-and-qunit
author: jaffamonkey
description: 
post_id: 9623
created: 2013/06/15 13:06:33
created_gmt: 2013/06/15 13:06:33
comment_status: open
post_name: visual-studio-and-qunit
status: publish
post_type: post

# Visual Studio and QUnit

QUnit is similar to other unit testing frameworks like JUnit, but makes use of the features JavaScript provides and helps with testing code in the browser, e.g. with its stop/start facilities for testing asynchronous code. This is short example of how to use QUnit with Visual Studio.

##### Create a Visual Studio Project

Open Visual Studio. Go to File | New | Project. Create a new ASP.NET MVC Empty Application. 

##### Add QUnit to you project

Right-click on your Project and choose Manage NuGet Packages. Search for QUnit and locate QUnit for ASP.NET MVC. Click Install next to QUnit for ASP.NET MVC. _There should now be a  folder called Content with a QUnit.css file, and a folder called Scripts with a QUnit.js file._

##### Create an HTML file to display test results

Right-click on the project and add new HTML Page (I named it Test Results.htm). **TestResults.htm** `

# QUnit Test

## 

## 

test markup

` _I have added html, head and body elements, referenced an additional .js file and added some more markup for QUnit to interact with._

##### Create your first QUnit Test

Right-click on the Project and choose Add | New Folder. Rename the folder to TestScripts. Note: I like to keep the test scripts separate from the other scripts. Right-click on the TestScripts folder a a JScript File (I named mine tests.js). Add a test method to the tests.js file. **tests.js** `function format(string, values) { for (var key in values) { string = string.replace(new RegExp("{" + key + "}"), values[key]); } return string; } test("basics", function () { var values = { name: "World" }; equal(format("Hello, {name}", values), "Hello, World", "single use"); equal(format("Hello, {name}, how is {name} today?", values), "Hello, World, how is World today?", "multiple"); });` **Run the tests** Right-click on the project and choose Set as StartUp Project. Right-click on TestResults.htm (in Solution Explorer window), and choose Set As Start Page. Click Debug to start Debugging, and you should see this in browser. ![qunit](/wp-content/uploads/2013/06/qunit.png)