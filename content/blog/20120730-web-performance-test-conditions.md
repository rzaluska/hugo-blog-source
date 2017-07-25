title: VS2010 Web Performance Test Conditions
link: http://jaffamonkey.com/7320/web-performance-test-conditions
author: jaffamonkey
description: 
post_id: 7320
created: 2012/07/30 13:29:52
created_gmt: 2012/07/30 13:29:52
comment_status: open
post_name: web-performance-test-conditions
status: publish
post_type: post

# VS2010 Web Performance Test Conditions

The main sell around CodedUI is the use of Assertions - with Web Performance Test (WPT), it's Conditions. They are the same thing, just done in different ways. Web Performance Test is misleading terminology, because of all the test script types available, this proved the most slick and useful for the tester, AND portable.  You can add your automated test solution to Source Control to be used by anyone on any machine. The way you can add Conditions with WPT adds an array of possibilities. And with it's minimalistic site rendering technique, upon playback, means tests run faster, and you have a view of website at every step. One hug weakness of CodedUI, though no doubt this is down to it's focus on Desktop Apps as well as web apps, is dependency on using coordinates to locate screen elements. Web Performance Test logically hooks into html to determine elements and action. And extracting text elements can be done using Response window in Result section. 

  * Record a Web Performance test on website using login and search process.
  * The playback will probably fail - this is normal, as one of the first issues to resolve with automated tests is dealing with dynamic vairables (such as session tokens).
  * From Results window click on the test run steps in turn
  * In the Response window you will find things such as session tokens and screen elements (static and dynamic).
  * The Extraction Rule should be used from this window.
  * To extract, highlight selected Response window text (such as session token or a search result), right click and select **Add Extraction Rule**
  * An extraction rule is added to the relevant step in your test script; rename with extracted value name to something meaningful
  * On that step, check **Properties** window.
  * Click on Value dropdown and you will see your named Extraction Rule variable.
  * Select that, and now the process is complete.
  * This can be done for any variable, be it form element or dynamic text that is displayed upoin certian actions.
  * By using Extraction Rules, you can now add effective conditions, and also assertions to value stored in Expected Results test data ( in form of csv files, that you can add to your Solution folder)
_It is more than likely you will have a "$HIDDEN" value for some dynamic variables. These are useless so the first thing to do is "Unbind" in the Properties -> Value dropdown. This will enable you to search for the recorded value in Response tab so you can perform Extraction Rule on it_ The prime benefit of Web Performance Test method over CodedUI, is that it uses element name/ids to identify webpage elements. CodedUI depends on coordinates, which although a relatively safe method to use with desktop applications, is not going to be stable method when testing web applications. The audience for CodedUI tests appears to be developers, given it's local machine dependencies. Web Performance test runs in slim browser client, which is useful to run tests at speed, when specific browser testing is not required.  And as near-as-dammit to a headless browser. 

> The embedded Internet Explorer control on the Web Browser tab in the Web Performance Test Viewer only displays response pages received by the Web Performance Test Engine. The Web Performance Test Engine writes the responses to a temporary location on disk and then loads the temporary files in the Internet Explorer control in the Web Performance Test Viewer. This browser control has in the result viewer is configured specifically not to run JavaScript or ActiveX controls. A common source of confusion is when customers are testing pages that host controls, which result in an error being displayed in the browser control in the result viewer. This does not mean the test is not working correctly. You have to examine the response tab to validate the response.