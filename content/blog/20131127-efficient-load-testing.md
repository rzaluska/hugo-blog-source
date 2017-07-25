title: Efficient Load Testing
link: http://jaffamonkey.com/10562/efficient-load-testing
author: jaffamonkey
description: 
post_id: 10562
created: 2013/11/27 13:25:11
created_gmt: 2013/11/27 13:25:11
comment_status: open
post_name: efficient-load-testing
status: publish
post_type: post

# Efficient Load Testing

Firstly, it is important to note that Load Testing is a part of Performance Testing. Performance testing is an umbrella term for all things related to non-functional requirements testing. Load testing is specifically about gaining knowledge about the limitations of a web application, using simulated user load and actions.  [Apache Bench](http://en.wikipedia.org/wiki/ApacheBench) and [JMeter](https://jmeter.apache.org/). are good tools for load testing. These are two established open source test tools, and provide an efficient way of simulating load, using headless browser approach, reducing the web experience to PUT, GET, REST, JSON and SOAP request/responses. While load testing can be done by kicking off real browser sessions in parallel, it is largely inefficient and hardware requirements excessive. Browser performance can be addressed in different approach, and is more to do with efficiency of front-end coding (which can be covered by regular HTML/CSS/JS standards checks). ![Load Testing](/wp-content/uploads/2013/11/operational-axiom-2_2.png) You would think that statement is a no-brainer, wouldn't you? But it surprising what is expected from load testing, which is expectation of "perfection". More to the point, load testing about identifying bottlenecks in a system that appear with increased load. We are not testing for imperfection, we are testing to find limits that we already know exist, we just don't know at what point these occur. Just as important as selecting the right tool(s) for the job, are specifying non-functional requirements. One of the standards measures of benchmarking a load test is to use page load time, which is to define a load-time that is considered the maximum acceptable level. But this can be misleading in context of a load test, as load tests generally circumnavigates css and run headless browsers stripped of any frills. So when defining metrics, it is prudent to take the load test technicalities into account. There are four common areas to focus on with load testing:- 

  * Search (heavy on network activity)
  * Read/Writes (i.e. creation/editing of data)
  * Concurrency (system performance with multiple concurrent login sessions)
  * Navigation (i.e site browsing)
The important part of load testing approach is incremental load, as the useful information is to discover the upper limits of what the web application can handle, rather than simply break it.  Most load testing issues are highlighted a lot sooner than upper limits, so it is inefficient to start with 1000's of concurrent actions.  The idea is to push limits in controlled fashion, so monitoring results are useful, and bottlenecks/errors more easily identifiable.