title: Behat And Testing Design Errors/Changes
link: http://jaffamonkey.com/10997/behat-and-testing-design-errorschanges
author: jaffamonkey
description: 
post_id: 10997
created: 2014/09/04 20:53:16
created_gmt: 2014/09/04 20:53:16
comment_status: open
post_name: behat-and-testing-design-errorschanges
status: publish
post_type: post

# Behat And Testing Design Errors/Changes

Comparing screenshots can prove effective way to verify design errors/changes, using CasperJS in conjunction with Resemblejs makes comparisons and reporting easy. PhantomCSS does exactly this, and the repo is available [here](https://github.com/Huddle/PhantomCSS). Or you can take my forked version [here](https://github.com/jaffamonkey/PhantomCSS), in which I removed the PhantomJS junk, and altered scripts to just process the screenshots directory. It was only the comparison tools I was looking for . The trick is now to generate the screenshots (the baseline, and the one for comparison). As I use Behat/Mink, I didnt need most of the PhantomCSS repo, which assumes use of phantonJS are test driver. I generate screnshots after certain steps to create baseline for comparison (best to do this in context of a test suite). /** * @Then /^I take a screenshot of current page "([^"]*)"$/ */ public function takeAScreenshotOfCurrentPage($pagename) { $image_data = $this->getSession()->getDriver()->getScreenshot(); file_put_contents('PhantomCSS/screenshots/behat_'.$pagename.'.diff.png', $image_data); } Then I use PhantomCSS to do the screenhot comparison grunt work. There is a manual step, which which you establish the baseline screenshots. Then each subsequent test run, a new "diff" file is generated and comapred with baseline version. If differences, then an almalgamated image is generated to highlight difference (filename appended with "fail").  

  * brew install casperjs
  * (or) npm install -g casperjs
  * Clone repo
  * Assuming you follow my behat route ..
  * Run your test once to get baseline images for pages.
  * Rename files by removing the ".diff" part
  * Each time test runs, the newer comparison file will be removed and updated.
  * The command to do comparison is:- `casperjs test demo/testsuite.js`
_ Rudimentary end to end process (todo: add verification step function, and call the casperjs command from within Behat function)_