title: Visual Studio Load Testing Profiles
link: http://jaffamonkey.com/7534/visual-studio-load-testing-profiles
author: jaffamonkey
description: 
post_id: 7534
created: 2013/03/16 00:16:24
created_gmt: 2013/03/16 00:16:24
comment_status: open
post_name: visual-studio-load-testing-profiles
status: publish
post_type: post

# Visual Studio Load Testing Profiles

Visual studio load test template offers a variety of profiles to use, depending on what your aims are. It may be a simple test to verify how many concurrent users a web application can support. Or testing data integrity of multi-user editing. 

### Using a Constant Profile

A Constant Load Profile can be used to run the same user load throughout a load test. Be careful about using a Constant Load Profile with a high user count; doing so may place an unreasonable and unrealistic demand on your server(s) at the beginning of the load test. For example, if your load test contains a web test that starts with a request to a home page, and you set up the load test with a constant load of 1,000 users, the load test will submit the first 1,000 requests to the home page as fast as possible. This may not be a realistic simulation of real-world access to your web site. To mitigate this, consider using a Step Load Profile that ramps up gradually to 1,000 users, or specify a warm-up period in the Load Test Run Settings. If a warm-up period is specified, the load test will automatically increase the load gradually during the warm-up period. 

### Using a Step Load Profile

A Step Load Profile can be used to increase the load on the server(s) as the load test runs so that you can see how performance varies as the user load increases. For example, to see how your server(s) perform as the user load increasing to 2,000 users, you might run a 10-hour load test using a Step Load Profile with the following properties: Initial User Count: 100 Maximum User Count: 2000 Step Duration (seconds): 1800 Step Ramp Time (seconds): 20 Step User Count: 100 These settings have the load test running for 30 minutes (1800 seconds) at user loads of 100, 200, 300, up to 2,000 users. The Step Ramp Time property is worth special mention here because it is the only one of these properties that is not available to choose in the Load Test Wizard. This property allows the increase from one step to the next (for example from 100 to 200 users) to be gradual rather than immediate. In this example, the user load would be increased from 100 to 200 users over a 20 second period (an increase of 5 users every second). 

### Using a Goal-Based Load Profile

A Goal Based Load Profile is useful when you want to determine the number of users that your system can support before reaching some level of resource utilization. This option works best when you have already identified the limiting resource (i.e. the bottleneck) in your system. For example, if you know that the limiting resource in your system is the CPU on your database server, and you want to see how many users can be supported when the CPU on the database server is approximately 75% busy, you could use a Goal Based Load Profile with the goal of keeping the value of the performance counter “%Processor Time” between 70% and 80%. One thing to watch out for is that if some other resource is limiting the throughput of the system, the goal specified by the Goal Based Load Profile may never be reached, and the user load will continue to rise until the value specified for the Maximum User Count is reached. This is usually not the desired load, so be careful about the choice of the performance counter in the Goal Based Load Profile, and also make a conscious decision about the value for the Maximum User Count to place an upper bound on the user load.