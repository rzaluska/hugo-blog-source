title: cucumberjs/protractor - dealing with non-angular popups
link: http://jaffamonkey.com/11802/cucumberjsprotractor-dealing-with-non-angular-popups
author: jaffamonkey
description: 
post_id: 11802
created: 2016/02/29 12:18:56
created_gmt: 2016/02/29 12:18:56
comment_status: closed
post_name: cucumberjsprotractor-dealing-with-non-angular-popups
status: publish
post_type: post

# cucumberjs/protractor - dealing with non-angular popups

When creating cucumberjs/protractor test that involves dealing with a non-angular pop-up window, you can use combination of the getAllWindowHandles, and the ignoreSynchronization flag. The example below is a facebook SSO login (previous step was simply clicking link to login with facebook, to bring up the popup) 
    
    
     this.Given(/^I login with facebook$/, function () {
            browser.getAllWindowHandles().then(function (handles) {
                var buttonName = 'fb login';
                browser.switchTo().window(handles[1]);
                // this switches focus of protractor the facebook login popup
                browser.ignoreSynchronization = true;
                // this tells protractor it's now a non-angularjs page
                fillField('facebook id', '{facebook login email');
                fillField('facebook password', '{facebook password}');
                return getVariable[buttonName.replace(/\s+/g, '')].click().then(function () {
                    browser.switchTo().window(handles[0]);
                    // this switches focus of protractor back to main angularjs window
                    browser.ignoreSynchronization = false;
                   // this tells protractor it's now a angularjs page
                });
            });
        });