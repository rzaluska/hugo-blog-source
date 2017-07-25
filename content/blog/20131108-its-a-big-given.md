title: Its a big Given ....
link: http://jaffamonkey.com/10473/its-a-big-given
author: jaffamonkey
description: 
post_id: 10473
created: 2013/11/08 16:39:53
created_gmt: 2013/11/08 16:39:53
comment_status: open
post_name: its-a-big-given
status: publish
post_type: post

# Its a big Given ....

BDD is an enjoyable way to develop and test, but introduce business and that pesky client, it can rapidly change into stressful [Waterscrum or (the even worse) Scrummerfall](http://blogs.msdn.com/b/nickmalik/archive/2007/06/04/waterscrum-vs-scrummerfall.aspx).  Transparency is an easy word to throw out there, but who wants it?  No-one wants to hear bad news and show and tells rapidly descend into a perception game, to pander to client expectations of how development process works.  As with any engineering, most are shocked to learn that engineering is very much an incremental learning process, involving regular mistakes and learning exercises. The average client expectation is still of having a tangible product, and not to be drawn into the more painful side of development process. It's a two steps forward, one step back style process. And with BDD, even more so, as the business side is defining a lot more than just high level user stories - they are defining expectations on more granular level.  And in natural language.  Why the last point is very valid is that developers inherently have problems visualising the natural language of requirements in terms of code.  When in fact a scenario line could be viewed as a chunk of functional code. When reviewing user stories, where the eyes should immediately be drawn to are the "Given" statements.  These generally can appear innocuous, but can hide a whole host of requirements upon development and QA.  Usually used to specify location, authentication and test data.  Test data itself can be a hugely underestimated task, and usually the specifications are wrapped up the the Given statements. Also smart to analyse any example tables for assumptions. It may look like innocuous input/output data, but it may be referencing part of a system that are not built yet, or have existing caveats. BDD gives Agile a sledgehammer edge, and all the better for it - as long as you stay on top of the process, and can manage the client concerns over their over-exposure to the process.