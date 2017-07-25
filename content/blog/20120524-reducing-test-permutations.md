title: Reducing Test Permutations
link: http://jaffamonkey.com/7200/reducing-test-permutations
author: jaffamonkey
description: 
post_id: 7200
created: 2012/05/24 15:17:25
created_gmt: 2012/05/24 15:17:25
comment_status: open
post_name: reducing-test-permutations
status: publish
post_type: post

# Reducing Test Permutations

I like [AllPairs](http://www.satisfice.com/tools.shtml) tool for it's simplicity, and very helpful when you have many test permutations, which is common for testing surveys (for example). If you have 1000's of permutations, it is highly likely you can produce as optimal set of test data, with maximum coverage. 

> If a bug will be triggered when the value of any one of the three parameters is paired with a value of either of the other two, then we’ll catch it with this set of test cases. If a bug occurs only when three specific values are tried together, this set of cases will not necessarily catch it, but at least we’ve achieved all pairs. All pairs coverage is a lot easier to achieve than all combinations. For instance, if you want to test with ten parameters of 26 values each, all combinations leads to 141,167,095,653,376 test cases. Allpairs does it in 1094 cases.

The tool requires a tab delimited file which outlines the variables for permutations, and possible values for those variables. For example, below is file based on a survey test. The survey has question types, and several options including whether or not a question is mandatory, if it's on page that could be branched over (from previous answered question), and if it is possible to save survey before completion. **Question Type Required? OnPageBranchedOver? PartialSaveSurvey?** Answer Feeder Question Yes Yes Yes Car Selector No No No CheckBox List Conditional DropDown Date DropDown File Upload Grid Grid using Answer Feeder Question GridCheck GridDropDownList GridMulti GridText Order In Priority Radio Button List Text Text Numeric This is command-line way to run tool:- **ALLPAIRS anyfilename.txt > outputfilename.txt** What it outputted is an optimal list of test cases:- TEST CASES ** case Question Type Required? OnPageBranchedOver? PartialSaveSurvey? pairings** 1 Answer Feeder Question Yes Yes Yes 6 2 Answer Feeder Question No No No 6 3 Car Selector Yes No Yes 5 4 Car Selector No Yes No 5 5 CheckBox List Yes Yes No 4 6 CheckBox List No No Yes 4 7 Conditional DropDown Yes No No 3 8 Conditional DropDown No Yes Yes 3 9 Date Yes Yes Yes 3 10 Date No No No 3 11 DropDown Yes No Yes 3 12 DropDown No Yes No 3 13 File Upload Yes Yes No 3 14 File Upload No No Yes 3 15 Grid Yes No No 3 16 Grid No Yes Yes 3 17 Grid using Answer Feeder Question Yes Yes Yes 3 18 Grid using Answer Feeder Question No No No 3 19 GridCheck Yes No Yes 3 20 GridCheck No Yes No 3 21 GridDropDownList Yes Yes No 3 22 GridDropDownList No No Yes 3 23 GridMulti Yes No No 3 24 GridMulti No Yes Yes 3 25 GridText Yes Yes Yes 3 26 GridText No No No 3 27 Order In Priority Yes No Yes 3 28 Order In Priority No Yes No 3 29 Radio Button List Yes Yes No 3 30 Radio Button List No No Yes 3 31 Text Yes No No 3 32 Text No Yes Yes 3 33 Text Numeric Yes Yes Yes 3 34 Text Numeric No No No 3 So what the tool has done is reduce the possible permutation figure of 144, to a more manageable set of 34. Download and fuller intructions can be found on [Satisfice](http://www.satisfice.com/tools.shtml).