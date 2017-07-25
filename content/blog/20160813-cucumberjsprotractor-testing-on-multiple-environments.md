title: CucumberJS/Protractor: Testing on multiple environments
link: http://jaffamonkey.com/11998/cucumberjsprotractor-testing-on-multiple-environments
author: jaffamonkey
description: 
post_id: 11998
created: 2016/08/13 23:49:57
created_gmt: 2016/08/13 23:49:57
comment_status: closed
post_name: cucumberjsprotractor-testing-on-multiple-environments
status: publish
post_type: post

# CucumberJS/Protractor: Testing on multiple environments

There are many ways to run your cucumberjs/protractor tests on different environment.  I wanted to avoid adding another package (or two), so settled on the following direction - using the NODE_ENV system variable.  Below is the code for my main file for keeping page url definitions, as well as the base urls.  I have added two as examples, but you can add as many as you like.  **e2e-settings.js** [code]module.exports = { baseUrl: { development: 'http://development.mainsite.com', localhost: 'http://localhost:1234' }, url: function (url) { switch (process.env.NODE_ENV) { case 'development': return this.baseUrl.development + url; case 'localhost': return this.baseUrl.localhost + url; } }, pages: { private: { accountsettings: '/my-account' }, public: { login: '/login', home: '/home', contact: '/contact-details', } } } };[/code] All that is now required, is to run: NODE_ENV={environment} Example code to browse to a page [code]var settings = require('e2e-settings'); module.exports = function () { this.Given(/^I am on the (.*) page$/, function (pagename, callback) { var relativePath = settings.pages.public.revalidation[pagename.replace(/\s+/g, '')]; browser.get(settings.url(settings.pages.public.revalidation[pagename.replace(/\s+/g, '')])) .then(function () { expect(browser.getCurrentUrl()).to.eventually.contain(relativePath).notify(callback); }); }); // .......... }[/code]