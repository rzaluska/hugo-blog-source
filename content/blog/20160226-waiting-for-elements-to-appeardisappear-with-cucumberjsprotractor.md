title: Waiting for elements to appear/disappear with cucumberjs/protractor
link: http://jaffamonkey.com/11786/waiting-for-elements-to-appeardisappear-with-cucumberjsprotractor
author: jaffamonkey
description: 
post_id: 11786
created: 2016/02/26 10:08:05
created_gmt: 2016/02/26 10:08:05
comment_status: closed
post_name: waiting-for-elements-to-appeardisappear-with-cucumberjsprotractor
status: publish
post_type: post

# Waiting for elements to appear/disappear with cucumberjs/protractor

The cucumberjs/protractor combination can be awkward, testing angularjs, and using [chai-as-promised](https://github.com/domenic/chai-as-promised) helped, but reliability still can become an issue. So I started to lean towards more purist protractor code in these circumstances, to get round issue that waits are not always intelligent in cucumberjs and chai-as-promised didnt always provide solution (but is still great extension!). This following code has proved a reliable wait function. 
    
    
    this.Given(/^I wait for something to finish$/, function () {
    function waitForElementToNotBePresent(elementToWaitFor) {
    		var EC = protractor.ExpectedConditions;
    		var el = element(by.id(elementToWaitFor));
    		return browser.wait(EC.visibilityOf(el));
    // Or to check if element is not there, return browser.wait(EC.invisibilityOf(el));
    	}
    });
    

What is happening here is that protractor is waiting for the element to be be present or not, on page, before completing current step action.