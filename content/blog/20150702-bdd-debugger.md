title: BDD debugger
link: http://jaffamonkey.com/11606/bdd-debugger
author: jaffamonkey
description: 
post_id: 11606
created: 2015/07/02 15:22:58
created_gmt: 2015/07/02 15:22:58
comment_status: closed
post_name: bdd-debugger
status: publish
post_type: post

# BDD debugger

So what are we really building when we develop in test on a BDD project? A test framework, a test application? Well, both of these, but most importantly it is a debugging application, ideally integrated into CI and/or whatever the code build/deploy process the code goes through. Sometimes the debugging application is part of the application under test, and all for the better.  Because the test app can run as standalone, integration into the app it's testing is as easy as placing it under the same folder tree.  To further integrate, the required extensions and other setup can be bundled into the overall application configuration. It all sounds sound sweet and simple, and once you reach that point, it is. Even more straightforward if you follow good practice from from outset (I know, not always possible - akin to shutting the gate, after the horse has bolted, is a more common standard). This leads to an interesting part of the QA process - debugging the debugger. But no need to treat it as a separate entity, the app under tests and the debugger app are as one. When a test fails, it could be the test code or test data needs correction, not just a bug in the application under test. It's a mentality that commonly escapes people, but if you are building a framework, with extensions and customisations, then it's only natural it will be subject to the same areas of risk as any other type of application. You start with failing tests, create the code to pass the test, then assuming green, move on. But this test is always regularly run (or should be), so there is always a risk of a fail, for numerous reasons. It is important to have faith in your debugging application, otherwise you will fall into trap of blaming test first, which can mislead the investigation right to start with. Time is precious commodity, so a few hours wasted is half a day, a tenth of a working week. We can't always avoid these time losses, but we can avoid wasting time by ensuring our tests output something meaningful upon error. A common web UI test fail, is the test failing to find an element with particular id or name. You may have extension running that covers this scenario out-of-the-box, but with your custom test code, ensure you are able to output something to screen - and preferably stack trace error. You can always examine that later. 

So, treat your test application as a debugger, because that is exactly what it is.  And realise the development and testing are, in fact, one and the same.  Just from different directions ;)