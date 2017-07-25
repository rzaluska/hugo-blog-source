title: PhantomJS for Performance Testing
link: http://jaffamonkey.com/10314/phantomjs-for-performance-testing
author: jaffamonkey
description: 
post_id: 10314
created: 2013/10/03 23:21:44
created_gmt: 2013/10/03 23:21:44
comment_status: open
post_name: phantomjs-for-performance-testing
status: publish
post_type: post

# PhantomJS for Performance Testing

I am quickly becoming a real fan of [PhantomJS](http://phantomjs.org), which as well as being an AJAX/Javascript headless browser, interacts with other equally smart tools. To do a basic performance test, use phantomJS in conjunction with _[yslowJS](http://yslow.org/command-line-har/)_ and _[confessJS](https://github.com/jamesgpearce/confess)_. **EXAMPLE USING CONFESS** Generates an ASCII-art waterfall of the waits and receipts of each requested resource (akin to Firebug) [php]phantomjs performance/confess.js *enter url* performance[/php] **EXAMPLE USING YFLOW** [php]phantomjs performance/yslow.js --info grade --format tap --threshold '{"overall": "B", "ycdn": 65}' *enter url*[/php] YSlow Options: -h, --help output usage information -V, --version output the version number -i, --info specify the information to display/log (basic|grade|stats|comps|all) [all] -f, --format specify the output results format (json|xml|plain|tap|junit) [json] -r, --ruleset specify the YSlow performance ruleset to be used (ydefault|yslow1|yblog) [ydefault] -b, --beacon specify an URL to log the results -d, --dict include dictionary of results fields -v, --verbose output beacon response information -t, --threshold for test formats, the threshold to test scores ([0-100]|[A-F]|{JSON}) [80] e.g.: -t B or -t 75 or -t '{"overall": "B", "ycdn": "F", "yexpires": 85}' -u, --ua "" specify the user agent string sent to server when the page requests resources -vp, --viewport specify page viewport size WxY, where W = width and H = height [400x300] -ch, --headers specify custom request headers, e.g.: -ch '{"Cookie": "foo=bar"}' -c, --console output page console messages (0: none, 1: message, 2: message + line + source) [0]