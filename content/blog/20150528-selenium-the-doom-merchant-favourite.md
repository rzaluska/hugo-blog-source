title: Selenium: The doom merchant favourite
link: http://jaffamonkey.com/11457/selenium-the-doom-merchant-favourite
author: jaffamonkey
description: 
post_id: 11457
created: 2015/05/28 21:38:09
created_gmt: 2015/05/28 21:38:09
comment_status: closed
post_name: selenium-the-doom-merchant-favourite
status: publish
post_type: post

# Selenium: The doom merchant favourite

Selenium - a firm favourite amongst the doom merchants. You know the suspects - the one who delight in announcing the death of "old thing" to promote "new thing".  Lazy young bucks, trying to get a ride off slating what came before, with no analysis or reason.  Selenium has stood the test of time, and STILL people misunderstand what it actually is. Strictly speaking, it is a testing framework, which we can "talk" to Selenium (i.e. write test scripts) in many languages (originally just javascript).  It's strength lies in it's extensibility, plugging in to all the major browsing clients, including newer javascript-focused headless browser clients such as [Phantomjs](http://phantomjs.org/) and [Protractor](https://angular.github.io/protractor/#/).   Of course here, I am referring to Selenium WebDriver, which is the most used of the Selenium suite of products.  Incidentally, one of the reason I started using Protractor, was because of the automated testing challenges thrown up by Angularjs, and the usual browser clients were struggling. I wasn't viewing Protractor as replacement, or as better (it has it's own weaknesses), but as another tool that forms part the overall testing framework (for myself, the BDD-oriented combination of Behat/Mink). A standpoint to lose immediately, is that if one tool doesn't do all test requirements, replace with another. You would be expecting too much, in an imperfect world. I had several recommendations of Protractor on the back of "it's better than selenium". But hold on, Selenium is one of Protractor runtime requirements. What is more accurate description it's a good browser client for testing AngularJS and other javascript-heavy web applications. Not so snappy as a sales line, though. Selenium has kept up with the times, but improving and securing it's own space, rather than pandering on the latest fads in tech. It has evolved into a very reliable failsafe - not perfect, but nothing is, and using multiple tools to achieve the testing job is not unlikely in modern development. The really smart part of WebDriver is it's support run tests in parallel, without using Grid, and with minimal setup. I have used many testing tools over the years - some like WinRunner and SegueSilk I would be happy never to see again. Open source opens up a much more potent test automation potential, as open source development is driven by necessity. And Selenium is still up there, in spite of weaker attempts to emulate it, such as Sahi (a more commercial offering, very little to add, and pricing per user is never an attractive proposition). Some companies prefer the illusion of feeling safe, by paying for testing software "solutions". Customising to your requirements is worth money - paying for out-of-the-box software isn't. Selenium has maintained it's momentum for many years, and with more frequent releases this year, a still vibrant project in itself. It has remained open source, You may have noticed I haven't covered Selenium IDE, which is a great browser plugin tool, for record/playback tests. But few know how to use it beyond simple record and playback, i.e little customisations of scripts to make them reusable or more robust. I think this contributed somewhat to the more negative comments about it. It is also limited to Firefox, and requirements around browser compatibility means it has finite use. Instead of trying to find alternatives, automated testing is about finding the right tool for the job. I couldn't live without the extensive and helpful selenium logs, when diagnosing trickier problems with UI tests. And Selenium as a testing framework supports many browser clients, and continues to evolve. At it's own pace. Ignoring the doom merchants.  I am always happy to try new products, but to date, Selenium has been the one constant for many years.  That's not by design, that's by necessity. _By way of demonstrating why Selenium is still a good default test automation framework, these are the browser clients that Selenium supports for test scripting:-_

  * _Google Chrome_
  * _Internet Explorer 6, 7, 8, 9, 10 - 32 and 64-bit where applicable_
  * _Firefox: latest ESR, previous ESR, current release, one previous release_
  * _Safari_
  * _Opera_
  * _htmlUnit_
  * _phpUnit_
  * _Protractor_
  * _PhantomJS_
  * _Android_
  * _iOS_