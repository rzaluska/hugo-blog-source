title: Groovy DSL
link: http://jaffamonkey.com/5338/groovy-dsl
author: jaffamonkey
description: 
post_id: 5338
created: 2011/12/14 21:19:51
created_gmt: 2011/12/14 21:19:51
comment_status: open
post_name: groovy-dsl
status: publish
post_type: post

# Groovy DSL

The gap between language-driven requirements and code is getting smaller, but for some reason it is taking us all a while to realise that programming languages have to become more readable. If you look a piece of any code, you will dereive things that you understand. If you remove all that you understand from the program and paste it in another doc, the chances are you will have (more of less) a description of what the code is doing, that you (and others) can understand.  Domain-specific languages have been around for a while, but largely effort to code more efficiently, and make coding easier. Not as a model for extending further into the requirements engine. It is still a valid approach to take, but if you examine coding practice there are many ways to make code more readable (and more importantly, writeable). ![](/wp-content/uploads/2011/12/groovy-dsl.png) Tools such as fitnesse, specflow and cucumberhave led me down this path. Its what we in testing and development call "the bit in the middle" - between the acceptance test code, and functional code. The forementioned tools do a great job of managing requirements and generating the acceptance (unit) tests. But there is still a leap across that divide(sometimes small, sometimes garangtuan). The initial process can work very well, but it has to be maintained constantly, in order to keep the relationship between functional code, acceptance test and requirements. Sounds simple? Well it is, until you are in real projects, with varying copes, dependencies, third-parties, etc. But at least you could take control of delivering requirements at functional code level - true Acceptance Test Driven Development (ATDD). The presentiation below is specifically around Java Groovy, and how it provides additional ways to make Java more readable (both with tools and coding standards). It's very possible - but of course, developers don't want a situation where anyone can code. So don't expect current developers to feel comfortable about this inevitable transition. But it is about time they were shaken up.