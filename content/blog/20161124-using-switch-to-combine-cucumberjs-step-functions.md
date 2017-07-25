title: Using "switch" to combine Cucumberjs step functions
link: http://jaffamonkey.com/12278/using-switch-to-combine-cucumberjs-step-functions
author: jaffamonkey
description: 
post_id: 12278
created: 2016/11/24 14:28:57
created_gmt: 2016/11/24 14:28:57
comment_status: closed
post_name: using-switch-to-combine-cucumberjs-step-functions
status: publish
post_type: post

# Using "switch" to combine Cucumberjs step functions

Those who write automated tests all know that we commonly end up repeating code, especially as web pages tend to contain many common elements. Instead of ending up with blocks of step code that vary very little, using [Switch](http://www.w3schools.com/js/js_switch.asp) is a neat way to combine steps. [Switch](http://www.w3schools.com/js/js_switch.asp) checks for a certain value, then ascribes variables with certain values based on that.  [code] this.Given(/^I should see quantity (.*) for product (.*) on the (.*) page$/, function (quantity, productid, sitepage, callback) { var url, i; switch (sitepage) { case 'hardware section': url = 'http://ashop.com/category/hardware-section/'; i = 11; break; case 'product page': url = 'http://ashop.com/category/hardware-section/product/1234/'; i = 9; break; case 'shopping cart': url = 'http://ashop.com/cart/'; i = 5; break; } browser.get(settings.url(url)).then(function () { var product = element(by.cssContainingText('tr',productid)) .all(by.css('td')).get(i).getText(); expect(product).to.eventually.contain(quantity).notify(callback); }) }); [/code]