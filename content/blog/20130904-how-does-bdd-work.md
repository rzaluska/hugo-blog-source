title: How does BDD work?
link: http://jaffamonkey.com/10174/how-does-bdd-work
author: jaffamonkey
description: 
post_id: 10174
created: 2013/09/04 13:47:29
created_gmt: 2013/09/04 13:47:29
comment_status: open
post_name: how-does-bdd-work
status: publish
post_type: post

# How does BDD work?

Take a common scenario from end-user on a website. They are on the homepage and want to contact the company. So they click the Contact Us link and are presented a form to fill in. When processed this form will either submit details to the company email address or reject because the end-user has not completed all the fields OR made some error in form (for example the email field). This is a very common feature of most websites. And a good example to follow through with how BDD tools use this to define a common natural language that covers generic scenarios. Obviously, each website has it's own nuances to the process - maybe the contact form is on homepage for example. The User story provides the main hook of the feature file [code language="bash"]As website user In order to contact the company I want to be able to complete contact form @contactformdisplay Scenario: Given that user in on "http://somesite.com" When user click link to contact form Then contact form is displayed @contactformsubmit Scenario: Given that user in on "http://somesite.com/contact-us" And user completes all fields correctly When user clicks button "Submit" Then "http://somesite.com/confirmation" is displayed And email sent to company[/code] Gherkin is the specification language used my most BDD tools, and it is built on a set of phrases and expected order, that enables tool to generates meaningful acceptance tests for each scenario. The test script itself is traced back to scenario that matches the gherkin language format. Below is high level overview of user story/scenario format:- [code language="bash"]Given [some context] And [more context] When [some event] And [second event occurs] Then [outcome] And [another outcome] But [another outcome][/code] Take one of our scenario steps:- **_When user clicks button "Submit"_** [code language="php"]/** * @When /^user clicks button "([^"]*)"$/ */ public function UserClicksSubmitButton($argument1) { /** code for button action i.e. data process via POST */ }[/code] The test is hooked up to the scenario step, by simple mapping process. And this function can be used on other Submit type buttons, as the quotemarks around "Submit" signals a variable (i.e. the id/name of a button).