title: Fitnesse + ATDD + DSL
link: http://jaffamonkey.com/4956/project-transparency-with-atdd-dsl
author: jaffamonkey
description: 
post_id: 4956
created: 2011/11/13 22:42:00
created_gmt: 2011/11/13 22:42:00
comment_status: open
post_name: project-transparency-with-atdd-dsl
status: publish
post_type: post

# Fitnesse + ATDD + DSL

> [In TDD] first the developer writes a failing automated test case that defines a desired improvement or new function, then produces code to pass that test and finally refactors the new code to acceptable standards.

![attd](/wp-content/uploads/2011/11/atdd-300x112.png)Following on from TDD, there is ATDD (Acceptance Test Driven Development), which pushes the test-driven concept further into the realm of business acceptance. BDD sounds identical, and is the same but I found the ATDD definition more enlightening: 

> [ATDD is] the practice of expressing functional story requirements as concrete examples or expectations prior to story development. During story development, a collaborative workflow occurs in which: examples written and then automated; granular automated unit tests are developed; and the system code is written and integrated with the rest of the running, tested software. The story is "done"—deemed ready for exploratory and other testing—when these scope-defining automated checks pass

One of the major difference between ATDD and TDD, is the focus around bridging gap between requirement and code, is Domain Specific Language (DSL). DSL is a computer language that's targeted to a particular kind of problem, rather than a general purpose language that's aimed at any kind of software problem (i.e. users stories and scenarios). ATDD requires the participation of the customer in the definition of acceptance tests and the related acceptance criteria that have the task of specifying the desired functional behaviour of a system / application / component / software service. The ATDD is a technique to align business needs and the work done by IT, and this cycle of collaboration/feedback can be very productive. This process can anticipate most misunderstandings which generally occur when the requirements analysis, design and development compartmentalized. ![ATDD](/wp-content/uploads/2011/11/attd.png?w=150&h=150)Fitnesse, an ATDD testing framework, does a great job of providing an effective Acceptance Test framework, harnessed to the heart of development - source control, and to the user stories. Through use of scenarios, script tables, query tables and decisions tables derived from user stories, Fitnesse provides excellent method of breaking down user stories. Then what? DSL gives development a kickstart by breaking down these natural language tests into unit tests. There are many smaller scope tools out there which do this kind of job, and developers appreciate this format to work from as it essentially save them from accidental deviation from requirements. As long as the chain is maintain, developers are provided with a constantly updated development framework, and the business can have the transparency of progress. Now most test frameworks do not provide this, but there are a myriad of tools available (language specific) which do this job. Specflow and Cucumber are most commonly used (for .NET and Ruby, respectively), and do a good job of requirements->DSL, but too focussed on development side to be of practical use for business monitoring. Fitnesse offers the following formats which to write requirements (user stories and scenarios) 

  * Scenario tables are a way to express User Story deltas.
  * Script tables help extend scenarios (and also used for Exploratory testing)
  * Query table is a means of performing a single query and verifying the results.
  * Decision Tables are way to get test data into a System Under Test.
  * Library Tables.
  * Comment Tables.
_What about UI-driven tests?_ Fitnesse has companion in Fitnium, which enables use of Domain Specific Language (DSL) for controlling Selenium scripts from Fitnesse Tables, without having to code. Based on a FitNesse DoFixture FitNium provides a english language interpretation of the Selenium API that you would normally call from Java, Ruby, Python, Perl or C#. In this instance it allows none developers, testers, and even customers to write UI driven automated acceptance tests in more. This is effectively DSL. For testers, imagine documenting your test script steps (from user story scenarios) pretty much as you would do in your test management system but being able to “run” these tests in an automation fashion without any coding. This is one of the many reasons Fitnesse/Selenium are often paired - their easy interoperability, and a multitude of projects to extend the features.