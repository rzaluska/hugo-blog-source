title: Form filling using tables (Cucumber/AngularJS/Chai/Protractor)
link: http://jaffamonkey.com/11689/form-filling-using-tables-cucumberangularjschaiprotractor
author: jaffamonkey
description: 
post_id: 11689
created: 2015/11/24 17:41:27
created_gmt: 2015/11/24 17:41:27
comment_status: closed
post_name: form-filling-using-tables-cucumberangularjschaiprotractor
status: publish
post_type: post

# Form filling using tables (Cucumber/AngularJS/Chai/Protractor)

Rather than pollute your Gherkin with "I fill in ..." lines, you can create your own Gherkin and code, using table format. Many make mistaken assumption that Gherkin is somehow fixed format. Yes, the Regex trigger is the "Given", "When", "Then", "And". But Gherkin is supposed to be based on natural language, so as long as you observe some programming principles to creating new Gherkin, create your own. It's encouraged as there is no way the out-of-the-box Gherkin provided by BDD products will completely accommodate your project requirements.  I am going to do two things in one here, the first is to address issue of having un-natural looking css class names in the Gherkin variables. It is more pragmatic to maintain a library of mappings, so in the Gherkin you have something like: 
    
    
    I fill in "Trip Name" with "My holiday"

instead of this ... 
    
    
    I fill in "newProductName" with "My holiday"

Create a mappings file (variables.po.js) in your steps folder 
    
    
    'use strict';
    
    module.exports = {
        addtrip: element(by.css('.btn-success')),
        tripname: element(by.model('newProductName')),
        trippercentage: element(by.model('newProductPerc')),
        panelheading: element(by.css('.panel-heading'))
    };
    

Now onto the form fields In a step definitions js file add the following 
    
    
    'use strict';
    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    var getVariable = require('./variables.po.js');
    var expect = chai.expect;
    .......
    this.When(/^I fill the form with the following data$/, function (table, callback) {
            var inputData;
            var fieldEl;
            var data = table.hashes();
            for (var i = 0; i < data.length; i++) {
                inputData = data[i].field;
                fieldEl = getVariable[inputData.replace(/\s+/g, '')];
                fieldEl.clear();
                var p = fieldEl.sendKeys(data[i].content);
                if (i === data.length - 1) {
                    p.then(callback);
                }
            }
        });
    
        this.When(/^I should see form data$/, function (table, callback) {
            var data = table.hashes();
            for (var i = 0; i < data.length; i++) {
                var inputData = data[i].field;
                var inputContent = data[i].content;
                var p = expect(element(by.css('div.layout.box--push')).getText()).to.eventually.contain(inputContent);
                if (i === data.length - 1) {
                    p.and.notify(callback);
                }
    
            }
        });

Then the Gherkin would look like this 
    
    
    ....
        And I fill the form with the following data
          | field           | content     |
          | trip name       | test trip 1 |
          | trip percentage | 12.5        |
        When I click the "add trip" button
        Then I should see form data
          | field           | content     |
          | trip name       | test trip 1 |
          | trip percentage | 12.5        |
    

Just so you have information on the products used as part of this exercise, the package.json for full project is below 
    
    
    "devDependencies": {
    ...
        "chai": "^3.0.0",
        "chai-as-promised": "^5.1.0",
        "cucumber": "latest",
        "protractor": "~2.2.0"
    ...
      }
    

_TODO: Accommodate radio/checkbox form buttons_