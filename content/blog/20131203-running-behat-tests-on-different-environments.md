title: Running Behat tests on different environments
link: http://jaffamonkey.com/10574/running-behat-tests-on-different-environments
author: jaffamonkey
description: 
post_id: 10574
created: 2013/12/03 13:23:42
created_gmt: 2013/12/03 13:23:42
comment_status: open
post_name: running-behat-tests-on-different-environments
status: publish
post_type: post

# Running Behat tests on different environments

Defining multiple environments with behat is simple. Define master and slaves URL in a machine dependent files or environment variables. For example, behat.yml can be customized for every machine, with some extra params. Or use profiles to cover all environments, then you can run behat tests on different environments with ease (e.g. _behat -p uatprofile_). Example behat.yml below.... [code language="php"] default: context: parameters: uat_url: 'http://uat.testsite.com' dev_url: 'http://dev.testsite.com' extensions: Behat\MinkExtension\Extension: dev_url: 'http://dev.testsite.com' goutte: ~ selenium2: ~ uatprofile: context: parameters: uat_url: 'http://uat.testsite.com' dev_url: 'http://dev.testsite.com' extensions: Behat\MinkExtension\Extension: uat_url: 'http://uat.testsite.com' goutte: ~ selenium2: ~ [/code] Include defined parameters into your own FeatureContext class: [code language="php"] class FeatureContext extends MinkContext { /** * @param array $parameters context parameters */ public function __construct(array $parameters) { $this->site_urls = array( 'uat' => $parameters['uat_url'], 'dev' => $parameters['dev_url'], ); } [/code] Then we can define our own step: [code language="php"] /** * @Then /^I should be logged in dev$/ */ public function iShouldBeLoggedInDev() { $this->visit($this->site_urls['dev']); $this->assertPageContainsText('Close session'); } [/code] An scenario with this step check with base_url for a dev site example. A new step is included to check if user is logged into dev environment. [code language="gherkin"] Scenario: Login as normal user Given I am on "LoginPage" When I fill in "user_id" with "user1" And I fill in "user_pass" with "password" And I press "Login" Then I should see "My account" And I should be logged in dev [/code]