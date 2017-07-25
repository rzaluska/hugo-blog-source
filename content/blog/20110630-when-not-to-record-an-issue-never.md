title: When not to record an issue ... never!
link: http://jaffamonkey.com/4356/when-not-to-record-an-issue-never
author: jaffamonkey
description: 
post_id: 4356
created: 2011/06/30 11:48:15
created_gmt: 2011/06/30 15:48:15
comment_status: open
post_name: when-not-to-record-an-issue-never
status: publish
post_type: post

# When not to record an issue ... never!

![](http://blog.jaffamonkey.com/files/2011/06/documents-125x125.png)The biggest fear QA brings in documentation, or over-documentation. There is good reason for this historically, as quality of testing was commonly judged by weight of documentation - without even ready it. As with any government documentation, the only thing you really need to read in test documentation is the summary, which should include high-level details of testing done, and some issue statstics. Whether it's in a spreadsheet, software or web-based system, keeping chronological record of testing is imperative, and don't let anyone tell you otherwise! Undocumented testing, unrecorded issues have a habit of coming back on you. When the wandering finger of blame starts to float around, QA can be an easy target if issues are not documented. By far the most important issues are REOPENED issues, but ANY issue should be recorded. Reopened issues are indicative of regression, and very important as there is always a cause -either an error in build/release process or negative impact of either another fix or new functionality. It is not a game to catch people out, this is path to good software. One good example which illustrates how pedantic you should be is when an issue arises during course of testing, that provides anough of a blocker to prevent testing continuing. This is fix on the fly, and new deployment made. Now it is quite natural to think "why bother?" when it comes to raising an issue. BUT if that issue arises again, it will become a new issue. And what doesnt happen with new issues is investigation, beyond the solution. Reopened issues indicate more deep-rooted issues, which a developer can investigate, but only if he/she knows this problem is a reoccurrence. An issue may seem irrelevant to user stories, but some bugs/improvments are generic to any project. Just because there is no defintion for accessibility requirements, should you ignore the multiude of images with no Alt tag? of course not. Log it. It may be rejected in bug triages, as user stories/requirements have to take priority, but at least the issue exists. You may be spared the embarassment of an amateur pointing out issues like this during a stakeholder show 'n tell session! While you are part of the project team, you have to sometimes act purely on QA instincts.