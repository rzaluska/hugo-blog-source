title: BDD pain relief
link: http://jaffamonkey.com/4845/tbdd-pain-relief
author: jaffamonkey
description: 
post_id: 4845
created: 2011/11/01 23:12:11
created_gmt: 2011/11/01 23:12:11
comment_status: open
post_name: tbdd-pain-relief
status: publish
post_type: post

# BDD pain relief

> BehaviourDrivenDevelopment is all about GettingTheWordsRight. We find that when we use a consistent vocabulary, much of the traditional disconnect between Business and Technology simply disappears. http://behaviour-driven.org/ItsAllBehaviour

This is an alternative approach to BDD, which can help developers, in the form of using acceptance test frameworks such as Fitnesse (for which there a lot of plugins, to hook into to most IDE's, including the montrosity that is TFS).  The scripting language is down to user choice, but if you a language compatible with the application under test, you can do some more fancy hookup between unit tests, and acceptance tests.  In BDD the onus is on the developer to write code directly from high-level user story/scenario. Using a good acceptance test framework will ensure:- 

  * Traceability from user story to acceptance test
  * Developers and testers work effectively together for a good acceptance end-to-end test script.
  * Testers can take responsibility of the point when user stories/scenarios are put into initial pseudo code (or the basic acceptance test).
  * Developers get the basic test to work with coding.
Extending the developer role to include them more proactively at requirements definition stage creates unnecessary stress factor, though on paper looks a good idea.  I have come to this conclusion recently as there were questions around retrospectively creating or repairing unit tests. And the failures of BDD tools to account for slight deviations in process, and question of ongoing maintenance. Changes to requirements should be done by consensus and so any changes made to requirements have to permeate down quickly. Can you see the big weakness now? What does a developer do when there are changes to requirements and it doesn't come through the strict BDD route? The developer themseleves can end up changing user stories and scenarios, which wasn't intended to happen. This occurs from day-to-day pragmaticsm, and very often BDD user stories/scernios end up languishing woefully out of step with reality. Applying BDD by the book is effective, but the decision should be made to use it, based on resources and skills available. Its a real "stuck record" statement, but the reason is because it is constantly ignored in the excitement that surrounds following a different process to deliver an end product. In my muddy journey through methodolgies, they are largely rewriting exercises and fundamentals with a few tweaks. BDD is about getting a common language around requirements, and so enable a quicker flow from requirements through to code through to acceptance test. But as with any process, its needs management. User Acceptance testing flow is:- 1) User Acceptance Test (UAT) Planning 2) Designing UA Test Cases 3) Selecting a Team that would execute the (UAT) Test Cases 4) Executing Test Cases 5) Documenting the Defects found during UAT 6) Resolving the issues/Bug Fixing 7) Sign Off BDD covers step 1 and 2. The rest is part of a normal SDLC (Software Development Life Cycle). And 1-7 can all be managed within a good acceptance testing framework.