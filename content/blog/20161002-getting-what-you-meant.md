title: What do you mean?
link: http://jaffamonkey.com/12027/getting-what-you-meant
author: jaffamonkey
description: 
post_id: 12027
created: 2016/10/02 05:05:45
created_gmt: 2016/10/02 05:05:45
comment_status: closed
post_name: getting-what-you-meant
status: publish
post_type: post

# What do you mean?

After working on several [BDD ](https://dannorth.net/introducing-bdd/)(Behaviour Driven Development) projects, I was struck firstly by what a great development approach it is, if only from a test engineering viewpoint. While on the tech side, BDD is more clearly understood, clients may find the style of writing requirement commonly expected with this approach, more involved than they are used to. There is still value in defining user stories only, if you are happy with trusting team to take care of implementation, and ask relevant questions. But perhaps you want to be more involved ... So here is a guide aimed largely at Product Owners, on how to write requirements for not only BDD projects, but as alternative style to more traditional Agile user stories.  The key objectives are ... 

> Writing user stories Describing with relevant scenarios Breaking down scenarios into steps

### Approach

One of the easiest ways to think of writing requirements, is in terms of scenarios, to describe them more fully. This approach extends the style of describing requirements in abstract User Story statements, with concrete scenarios. We use scenarios every day in our life to clarify what we mean, so it is a very natural way to specify. 

### Advantages of scenarios

By definition, scenarios are concrete and leave little room for little interpretation. A great means to communicate expected behaviours, as scenarios provide expected user experience. They form a business-friendly "Definition of Done", By nature, it provides living documentation (it never stops evolving). 

### How do you ask for something?

_i.e. how do you outline a requirement?_ As a Product Owner or Business Analyst it is better to follow a high level view of the business objectives, in scenarios. The team will break down scenarios into more granular (testable) steps. By giving the development scenarios, you give them a better guide, and more reasons to ask useful questions. 

### Start creating scenarios

Use your User Story are the start point, then break it down into scenarios. scenarios help your User Story get completed, closer to your vision. You do not have to break scenarios down at this stage, the important part, is that they should illustrate an objective. 

### Can I write how I want to?

Yes, to a degree at this level, but the important part of this exercise is to have reuse in mind - many scenarios defined at the outset will evolve into steps in future scenarios. Part of of the goal of specifying in this way, is building a common language across the team; a shared library of scenarios and steps. Approach scenarios as independent user journeys. Observing sensible guides like this ensures the test coverage in maximised in a efficient and useful way. 

### More about the scenarios ...

Some scenarios are very obvious from the User Story, some are more around areas that could be assumed, if not specified. These scenarios then become headings for the resultant automated acceptance tests for the user Story, and form a large part of the "Definition of Done" (DoD). This exercise is part of the evolution of of effective ways for the client to communicate requirements to the team, and enables the team to contribute to them. 

### The User Story

[code]Feature: As a online shopper, I want to be able to add multiple items to my shopping cart, in order to progress through payment process quickly[/code] **Possible assumptions**

  * That a shopping cart exists
  * Payment process exists
****Possible questions****

  * How complete a payment process is expected?
  * How about multiple copies of one book?
  * Are any confirmation/warning messages?

### The Scenarios

[code]Scenario: Add single item to shopping cart Scenario: Add multiple items to shopping cart Scenario: Add multiple of same item to shopping cart Scenario: Remove items from shopping cart[/code] 

### How granular do I need to be?

The team will generally take care of scenario steps breakdown - but there are always cases where you may want to be more specific. If you aren't sure at the time on exactly what is wanted, you can leave the team to make pragmatic choices, which can be improved upon later. Or you can provide more granular steps, to illustrate your scenario. 

### What next?

Your scenarios are turned into automated acceptance tests. These form part of acceptance but also ongoing tests that are run with every build. As that is when someone technical aspects begin, I will cover that in the next post, covering [coding scenario steps](/what-did-they-mean/).