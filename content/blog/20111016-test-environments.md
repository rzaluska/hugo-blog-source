title: Test environments
link: http://jaffamonkey.com/4692/test-environments
author: jaffamonkey
description: 
post_id: 4692
created: 2011/10/16 14:50:27
created_gmt: 2011/10/16 14:50:27
comment_status: open
post_name: test-environments
status: publish
post_type: post

# Test environments

What happened to the test environment? Now considered a luxury more than necessity. What I find largely is a development environment, and sometimes a UAT environment.   Having test environments does have an overhead in terms of management and time, but when they do exist, they are appreciated. With Agile and because of the nature of Agile testing - continuous integration, frequency of daily builds,  the need for a test environment was seen as optional, and would simply hamper the progress.   This when when you don't have QA resource - if you did, you would hear a hollow laugh and a sarcastic "really?".    There are 4key advantages to having a seperate test environment 

  * They hold the latest stable independantly tested Sprint/Release Build
  * Developers do not deploy directly to test environment, perhaps 1 a day (assuming possible overnight continuous integration build successful).
  * Test automation requires some degree of control within test team.
  * The test environment can also serve as UAT environment.
Too often developers develop on local machines, and continually upload changes to development environment - as they should. But for the testers, it will be like shooting at fast moving target. In the course of their work, developers regularly break builds - this is normal, and part of the incremenatal/interative process. Testers are approaching from an end to end perspective, so will find problems caused by code introduced that may not be directly related. In order to do this type of testing effectively (i.e. regression testing), the environment needs to have code frozen. The development environment has the latest build, not the latest stable tested build.  Testing needs to perform regression testing and end of each Sprint, and prior to stakeholder demos. So have a test environment - people may whinge, but once set up it is low maintenance - just ensure it is entirely within QA control, and that release criteria is determined.  This frees up development to use the development environment as they see fit, rather than having to down tools, due to testing requirements.   Too many developers end up coding too long on their localhost machines because of this too - which is very error-prone. Avoid setting up environment in virtual server environments, with many shared application  and database servers.  It introduces other variables that can affect testing - performance for example. Test Environments can also be built and managed within a Cloud; reducing set up time, increasing availability and providing more effective support in project delivery. You can then scale resources up or down to meet demand, and less management/overhead. This introduces another level, which is ability to setup environments much easier, and approrpriate according to demand. For example, for load testing, you want an environment that is close to live system as possible. Test Environments can also be built and managed within a Cloud; reducing set up time, increasing availability and providing more effective support in project delivery. You can then scale resources up or down to meet demand, and less management/overhead. This introduces another level, which is ability to setup environments much easier, and approrpriate according to demand. For example, for load testing, you want an environment that is close to live system as possible. This is very suited to Agile, as its possible to:- 
  * Create multiple development and test configurations on-demand
  * Create isolated test environments for a broad range of OS, database, browser and application combinations
  * Run them concurrently to create parallel work streams
And with cloud computing approach, it can serve all the environment needs. 
  * Developer Workstations
  * Unit Testing
  * Integration Testing
  * System Testing
  * User Acceptance Testing
  * Performance Testing
  * Localization Testing