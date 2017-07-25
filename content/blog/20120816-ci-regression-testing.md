title: CI = Regression testing
link: http://jaffamonkey.com/7397/ci-regression-testing
author: jaffamonkey
description: 
post_id: 7397
created: 2012/08/16 16:16:37
created_gmt: 2012/08/16 16:16:37
comment_status: open
post_name: ci-regression-testing
status: publish
post_type: post

# CI = Regression testing

After reading Rob Lambert's post of [Exploratory Regression Testing](http://thesocialtester.co.uk/exploratory-regression-testing/), it inspired to think more about regression testing, and what it actually means.  With continuous integration, and development process observing good practices, regression testing could be considered superseded.   This doesn't mean we should forget about it entirely - it is unfortunate habit of people to throw out techniques completely when new ideas arrive.  Regression testing is a sensible action to take at certain times, and regression catches human error and unanticipated integration issues.  The tests can take many forms - unit, UI-driven, headless browser tests.  In modern sense, regression testing is part of a Continuous Integration (CI) process.  But for a truly useful CI process, the tests performed need to extend beyond unit tests.  And Exploratory testing is also part of that effort. Regression testing became out of fashion largely because of development world arrogance, which came with the surge of newer approaches.  But a lot of those same people promoting "death of regression testing" or simply "death of testing", were not observing the processes they championed so much.  After the Agile-cloud dissipation, it revealed there was a lot more talk than action. Developers and testers need to integrate more themselves, as in terms of testing the goals are, in fact, the same. In fact if the tester has sufficient skills in test automation, then they can design tests that will help the developer coding.  And writing tests shouldn't stop - there are many reasons to consider other risk factors; especially on a dynamic Agile or Lean project.  Exploratory testing is part of that. This means that testing should be efficient, and consider scope and resources.  Some automation is better performed at unit level, some better from UI-driven, as regression can occur on both seen and unseen levels. A quality developer, developing quality code and observing good agile development principles of CI with unit tests, will probably result in very small integration issues.  But that level of development quality is not the norm, so it is prudent to adopt a better set of automated tests for the CI process.  So the summary is that Agile, Lean, etc. didn't dump Regression Testing, it was absorbed into good development practices.