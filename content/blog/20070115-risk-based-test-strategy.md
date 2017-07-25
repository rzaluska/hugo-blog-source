title: Risk Based Test Strategy
link: http://jaffamonkey.com/237/risk-based-test-strategy
author: jaffamonkey
description: 
post_id: 237
created: 2007/01/15 16:07:54
created_gmt: 2007/01/15 21:07:54
comment_status: open
post_name: risk-based-test-strategy
status: publish
post_type: post

# Risk Based Test Strategy

Risk based testing is a common approach in the fast demanding modern methodologies in development. In this strategy we assume that it's undoable to test everything. From a economic point of view it doesn't even make sense; spending lots of time to parts of a system where the changes of having a bug are low, or even if a bug has been found, where the impact of it will be low. Risk and requirements based testing helps you to determine what to test first, in which sequence, so you spend the time you have to the parts that really matter.

The strategy starts with a risk analysis to determine the functions (requirements) with the highest risk, and plan your test activities guided by this analysis.

To help you identify the risks involved in all your requirements, consider the following aspects:

  * Functions often used by the users
  * Complex functions
  * Functions that have a lot of updates or bugfixes
  * Functions that require high availibility
  * Functions that require a consistent level of performance
  * Functions that are developed with new tools
  * Functions that require interfacing with external systems
  * Functions with requirements with a low level of quality
  * Functions developed by more programmers at the same time
  * New functions
  * Functions developed under extreme time pressure
  * Functions that are most important to the stakeholders
  * Functions that reflect a complex business process