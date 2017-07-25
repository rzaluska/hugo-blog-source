title: HtmlUnit for .NET Headless Browser Automation
link: http://jaffamonkey.com/6811/htmlunit-on-net-for-headless-browser-automation
author: jaffamonkey
description: 
post_id: 6811
created: 2012/05/28 15:25:31
created_gmt: 2012/05/28 15:25:31
comment_status: open
post_name: htmlunit-on-net-for-headless-browser-automation
status: publish
post_type: post

# HtmlUnit for .NET Headless Browser Automation

HtmlUnit for .NET Headless Browser Automation is possible, as conversion from java to .NET is a far simpler process than you would imagine. Steps to do conversion of HtmlUnit from Java to .NET are:- 

  * Download [HtmlUnit](http://sourceforge.net/projects/htmlunit/) (as a compiled JAR file) from SourceForge and extract all its files from the ZIP archive.
  * Download [IKVM binaries from ikvm.net/SourceForge](http://sourceforge.net/projects/ikvm/files/), and again extract all its files from the ZIP archive.
  * Open a command prompt, ensure you’ve added IKVM’s /bin folder to your PATH variable, change directory to
  * HtmlUnit’s /lib folder, and then run ikvmc to convert the Java bytecode of all of the HtmlUnit JAR files into .NET bytecode.
  * Command to run (replace x.x with the version you downloaded)
  * Run command:- **ikvmc out:htmlunit-x.x.dll *.jar**
  * In Visual Studio (2010), create a new solution with a test projects
  * Add all HtmlUnit and IKVM DLLs to References folder
  * Clean and ReBuild
_**You are now ready to create some HtmlUnit driven tests!**_ There are several options to run these tests - I prefer to use [NUnit ](http://www.nunit.org/)(which can be added as an external tool to VS2010)