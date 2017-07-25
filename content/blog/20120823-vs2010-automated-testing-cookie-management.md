title: VS2010 - Automated Testing Cookie Management
link: http://jaffamonkey.com/7437/vs2010-automated-testing-cookie-management
author: jaffamonkey
description: 
post_id: 7437
created: 2012/08/23 15:45:41
created_gmt: 2012/08/23 15:45:41
comment_status: open
post_name: vs2010-automated-testing-cookie-management
status: publish
post_type: post

# VS2010 - Automated Testing Cookie Management

One of the values of automated testing is being able to run a set of tests as part of a suite or load. However, if you have sensibly built in some good protection using MVC anti-forgery or SAML tokens, then there is strong possibility tests can fail due to security functionality disallowing tests run too rapidly. This is due to key information also being stored in cookies. So even though you may have parametized the MVC anti-forgery token generated at each logon point, old token values may remain in cookie content. To get round this, you can delete the cookie with each test run, but utilising plugin feature (which you add on to each test). Below is example plugin file to delete cookies in active browser (i.e. the playback browser). As you may have more than one project under your test solution, it is wise to create another project under your solution for purpose of storing plugins. You will then need to add this Plugins project to the References section of each project under your test Solution. 1\. Create new project under you Automated Test Solution called **Plugins** 2\. Add new class file, and copy and paste in the following code:- using System; using System.Collections.Generic; using System.Linq; using System.Text; using Microsoft.VisualStudio.TestTools.WebTesting; using System.Net; namespace WebTestPluginNamespace { public class MyProxyWebTestPlugin : WebTestPlugin { public override void PreWebTest(object sender, PreWebTestEventArgs e) { // Purge any cookies associated with this server System.Net.CookieCollection cookies = ActiveBrowser.Cookies.GetCookies(Settings.Current.BaseUrl); foreach (System.Net.CookieCookie cookie in cookies) { ActiveBrowser.Cookies.DeleteCookie(cookie); } } } } 3\. **Rebuild** and **Clean** Solution 4\. Open **References** folder within a test project. 5\. Right-click and select** Add Reference**. 6\. Click on projects tab and you will see your newly added Plugins project. 7\. Click OK to add and **Rebuild** and **Clean** solution. The plugin will now run each time the test is played back.