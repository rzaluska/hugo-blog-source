title: Validate markup using nodejs/javascript
link: http://jaffamonkey.com/10554/validate-markup-using-nodejsjavascript
author: jaffamonkey
description: 
post_id: 10554
created: 2013/11/21 15:21:45
created_gmt: 2013/11/21 15:21:45
comment_status: open
post_name: validate-markup-using-nodejsjavascript
status: publish
post_type: post

# Validate markup using nodejs/javascript

Quick way to check and report of markup validation errors, using java script, nodejs and the w3 validator. https://github.com/thomasdavis/w3cjs Install using:- [code language="bash"]npm install w3cjs[/code] create example.js file to run the tests in following format:- [code language="javascript"]var w3cjs = require('w3cjs'); var results = w3cjs.validate({ file: 'http://jaffamonkey.com', // file can either be a local file or a remote file output: 'json', // Defaults to 'json', other option includes html callback: function (res) { console.log(res); // depending on the output type, res will either be a json object or a html string } });[/code] To run test (and produce output), erun:- [code language="bash"]$ nodejs example.js[/code] To run test (and produce output), change "output" value to "html", and run:- [code language="bash"]$ nodejs example.js > results. html[/code] Simple! And easy to integrate into Continuous Integration process.