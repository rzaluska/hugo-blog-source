title: Protractor: waiting before clicking
link: http://jaffamonkey.com/12345/protractor-waiting-before-clicking
author: jaffamonkey
description: 
post_id: 12345
created: 2017/03/20 15:20:52
created_gmt: 2017/03/20 15:20:52
comment_status: closed
post_name: protractor-waiting-before-clicking
status: publish
post_type: post

# Protractor: waiting before clicking

If you have been working with protractor, you may have come up with common issue of waits. Protractor should have this built in, but it doesn't always get it right. So after attempting several different approaches, with partial successes, the code below (appears) to do a solid job. This example is in context of cucumberjs framework, but not dependant on it. [code]this.Given(/^I click the (.*) (button|filter|radio|tab|checkbox|link|icon|record|person|asset|accordion)$/, function (buttonName, buttonType, callback) { var elm = element(by.css('#button_id')); var EC = protractor.ExpectedConditions; var isClickable = EC.elementToBeClickable(elm); browser.wait(isClickable, 20000); elm.click().then(callback); });[/code]