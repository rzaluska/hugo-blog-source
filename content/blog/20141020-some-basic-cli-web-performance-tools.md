title: Some basic CLI web performance tools
link: http://jaffamonkey.com/11123/some-basic-cli-web-performance-tools
author: jaffamonkey
description: 
post_id: 11123
created: 2014/10/20 17:47:28
created_gmt: 2014/10/20 17:47:28
comment_status: open
post_name: some-basic-cli-web-performance-tools
status: publish
post_type: post

# Some basic CLI web performance tools

There is a nice set of CLI tools to enable you to run quick performance tests, and provide anlysis of css,html and javascript. The beauty of these command line utilities, is it makes it easy to integrate into a Gherkin function (post coming soon on this). The first tool combination is [confessJS](https://github.com/jamesgpearce/confess), which when used with [phantomJS](http://phantomjs.org/), provides a detailed list of network traffic and statistics:- [code]$ phantomjs confess.js [enterurlhere] performance[/code] The next is using [phantomJS](http://phantomjs.org/) with [YSlow](http://yslow.org/user-guide/), which provides detailed analysis and results, to help front-end devs improve performance. Very similar output to the Firebug console:- [code]$ phantomjs yslow.js --info grade --format tap --threshold '{"overall": "B", "ycdn": 65}' [enterurlhere][/code] YSlow Options: -h, --help output usage information -V, --version output the version number -i, --info  specify the information to display/log (basic|grade|stats|comps|all) [all] -f, --format  specify the output results format (json|xml|plain|tap|junit) [json] -r, --ruleset  specify the YSlow performance ruleset to be used (ydefault|yslow1|yblog) [ydefault] -b, --beacon  specify an URL to log the results -d, --dict include dictionary of results fields -v, --verbose output beacon response information -t, --threshold  for test formats, the threshold to test scores ([0-100]|[A-F]|{JSON}) [80] e.g.: -t B or -t 75 or -t '{"overall": "B", "ycdn": "F", "yexpires": 85}' -u, --ua "" specify the user agent string sent to server when the page requests resources -vp, --viewport  specify page viewport size WxY, where W = width and H = height [400x300] -ch, --headers  specify custom request headers, e.g.: -ch '{"Cookie": "foo=bar"}' -c, --console  output page console messages (0: none, 1: message, 2: message + line + source) [0]