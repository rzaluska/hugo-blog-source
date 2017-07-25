title: Using filter to find element within an element in Protractor
link: http://jaffamonkey.com/12264/using-filter-to-find-element-within-an-element-in-protractor
author: jaffamonkey
description: 
post_id: 12264
created: 2016/11/11 10:58:49
created_gmt: 2016/11/11 10:58:49
comment_status: closed
post_name: using-filter-to-find-element-within-an-element-in-protractor
status: publish
post_type: post

# Using filter to find element within an element in Protractor

One of the challenges of test automation is minimising dependencies on test data. For most tests, you don't care which specific data you use, it's usually based on criteria. For example, take this list of users.  ![User List](/wp-content/uploads/2016/11/users-list.png) I am going to use Gherkin format to outline requirement, as in this context I am using CucumberJS/Protractor framework: 
    
    
    Scenario: Manage zero jobs users
    Given I am on user list page
    And I select to next user with zero jobs assigned

The test code: 
    
    
    // Returns the next user from the list who has zero jobs assigned
    this.Then(/^I click the next employee with no status$/, function () {
    element.all(by.repeater('users in ctrl.uisers')).filter(function (elem) {
    // Get value from the 5th column (number of jobs)
    return elem.all(by.css('td')).get(4).getText().then(function (jobs) {
    // Stop filtering once code hits jobs value 0
    return jobs === '0';
    });
    // Click this first filtered row
    }).first().click();
    });