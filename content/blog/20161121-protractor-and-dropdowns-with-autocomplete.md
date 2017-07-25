title: Protractor and dropdowns with autocomplete
link: http://jaffamonkey.com/12270/protractor-and-dropdowns-with-autocomplete
author: jaffamonkey
description: 
post_id: 12270
created: 2016/11/21 15:44:22
created_gmt: 2016/11/21 15:44:22
comment_status: closed
post_name: protractor-and-dropdowns-with-autocomplete
status: publish
post_type: post

# Protractor and dropdowns with autocomplete

Commonly dropdowns that can be overly long, implement an "as-you-type" filter. This presents an issue, insofar as actual buttons need to be pressed to action the auto-completion. [code] this.Given(/^I select (.*) from (.*)$/, function (selection, dropdown) { // click on dropdown field to initiate dropdown element(by.css('.dropdown')).click().then(function () { var dropdownField = element(by.id(dropdown)); //clear the as-you-type field if already populated dropdownField.clear().then(function () { // enter text to search dropdown values sendKeys(dropdownField, selection); // click TAB button to exit (populated) field return dropdownField.sendKeys(protractor.Key.TAB); }); }); }); [/code]