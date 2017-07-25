title: Mock data with Behat
link: http://jaffamonkey.com/10354/mock-data-with-behat
author: jaffamonkey
description: 
post_id: 10354
created: 2013/11/15 12:10:09
created_gmt: 2013/11/15 12:10:09
comment_status: open
post_name: mock-data-with-behat
status: publish
post_type: post

# Mock data with Behat

What is mocking for? Mocking allows you to isolate what you are testing, without  dependency on other areas of application development which are no complete. In Behat, You can easily specify mock data using the following format in your scenarios.  Be wary of "over-mocking" or you will end up with too much illusion, and a lot of re-factoring later on! [code language="gherkin"]Scenario: Given the following users exist: | userid | username | password | email | | 10001 | userone | sunshine1 | userone@email.com | | 10002 | usertwo | sunshine2 | usertwo@email.com |[/code] The example code below implements the scenario context:- [code language="php"]/** * @Given /the following people exist:/ */ public function thePeopleExist(TableNode $table) { $hash = $table->getHash(); foreach ($hash as $row) { // $row['userid'], $row['username'], $row['password'], $row['email'] } }[/code]