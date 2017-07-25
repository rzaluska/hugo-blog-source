title: Visual Studio Web Test & Tokens
link: http://jaffamonkey.com/5697/visual-studio-web-test-saml
author: jaffamonkey
description: 
post_id: 5697
created: 2012/01/08 02:26:10
created_gmt: 2012/01/08 02:26:10
comment_status: open
post_name: visual-studio-web-test-saml
status: publish
post_type: post

# Visual Studio Web Test & Tokens

Once you have created your web test which includes a secure login (using secure sessions), you end up with a token id in your Visual Studio Web Test script.  And it will only work for the user used in the test, and for a limited amount of time.   If you ran the test again with different login credentials, you would get a fail, because the token isn't valid anymore.   To solve this issue is simple, and utilises the extraction rules.  There are several ways to implement secure logins, in this particular example, the test is for a SAML process.   After selecting the relevant run step in Results tab window, we look for the SAML* security token in the Response tab. Highlight the value in the Response tab, then right-click to bring up the context menu (see screenshot below).  Select extraction rule, then the rule is automatically generated with a parameter name (you can change this later). _* Security Assertion Markup Language (SAML) is an XML-based open standard for exchanging authentication and authorization data between security domains_ ![Add Extraction Rule](/wp-content/uploads/2012/01/add_extraction_rule1.png)   Once the extraction rule is complete (this happens automatically),  you can use the parameter for the SSO token id (Right click over form parameter in web test, and select "Properties").  You will get an "extraction complete" message, which will tell you the parameter the value will be stored in with each web test playback (in this case, **Param0**). ![saml vs2010 using extraction rule](http://jaffamonkey.com/wp-content/uploads/2012/01/saml_vs2010_extraction.png)   So now the extraction rule paramater will be different every time the test is run, as the SSO token will change according to the Login. ![](http://jaffamonkey.com/wp-content/uploads/2012/01/finish1.png)