title: Parallel testing with Behat & Grunt
link: http://jaffamonkey.com/10849/parallel-testing-with-behat-grunt
author: jaffamonkey
description: 
post_id: 10849
created: 2014/03/04 16:22:51
created_gmt: 2014/03/04 16:22:51
comment_status: open
post_name: parallel-testing-with-behat-grunt
status: publish
post_type: post

# Parallel testing with Behat & Grunt

![grunt](/wp-content/uploads/2014/03/grunt.png) To start (assuming you already have behat installed), install grunt-parallel-behat using npm: [code language="bash"]npm install grunt-parallel-behat[/code] Once the plugin has been installed, it may be enabled inside your Gruntfile.js (created in root of your behat directory) with this line of JavaScript: [code language="javascript"]grunt.loadNpmTasks('grunt-parallel-behat');[/code] By default the tool will assume the behat.yml is in the same folder as the grunt file and it will run any feature files under the current directory. To run, execute following within your behat root folder: [code language="bash"]grunt[/code] Note: This would run as if all tests are to be run in parallel, i.e. 1 per thread - to be specific about batches, and adding behat parameters, below is an annotated example of a working Gruntfile.js: [code language="javascript"] grunt.initConfig({ behat: { src: '/path/to/features/**/*.feature', config: './behat/behat.yml', maxProcesses: 5, bin: './bin/behat', flags: '--tags @wip' } }); [/code]