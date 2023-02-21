+++
title = "Iterate over Jenkins pipeline parameters"
date = 2023-02-21T15:00:00+01:00
tags = ['jenkins', 'devops']
draft = true
+++

# Introduction

In this blog post I will present a way to iterate over params in scripted Jenkins pipeline.
By using this technique you can for example automatically generate arguments for command line in `sh` step.
This solution assumes that your params are available in array defined in scripted context of Jenkinsfile.
So using `parameters` directive in declarative pipeline will not allow you to use this solution.

For example this will not work:
```groovy
pipeline {
    parameters {
        string(name: 'name', defaultValue: "")
        choice(name: 'branch', choices: ['master', 'dev'], description: 'Branch name')
    }
}
```

But this will:

```groovy
script {
    def args = [
            string(name: 'name', defaultValue: "")
            choice(name: 'branch', choices: ['master', 'dev'], description: 'Branch name')
        ]
    properties([parameters(args)])
}
```

We will iterate over `args` table and we will extract name of each param and its value. This will allow
us to automatically change what will be generated from iteration based on params that we provide in `args` table.
This solution is designed to work with all standard types of params provided in Jenkins. Special params definded by
plugins are also supported due to special case that we will implement.

# Implementation
Example implementation can involve iteration over `args`
table and building command line params from Jenkins parameters.
Here we are getting given argument name using `argumentName` helper function. We will implement it in the next step.

```groovy
p = []
args.each {
    def argName = argumentName(it)
    p = p + "--${argName}=\"${params[argName]}\""
}
```

This fill produce table of values like `--$NAME=params[$NAME]`.

For now let's also have a look at string building using `groovy` string interpolation:
`"--${argName}=\"${params[argName]}\""`. Here we are using global `params` object created for us by Jenkins. This object is having all params with their values taken from Jenkins params form.

## Getting name of parameter
Next we will have a close look at `argumentName` function because this is
the place where all the magic happens. We will overload this function as special case for
groovy `Map` to use othere logic for this type. For some types of params you need to specify them as `Map` - for example:

```groovy
string(name: 'name', defaultValue: "") // normal param,
[$class: 'DynamicReferenceParameter', name: 'customParam', ...], //Param defined as Map
```

We need to take care of those types of params also. Luckly for use goovy is very flexible about function
overloading so we can implement our solution in very easy way. We provide two functions - one overloaded for `Map` class and one without type specification (this function will be invoke for all other classes that are not `Map`).

```groovy
def argumentName(Map arg) {
    return arg['name']
}

def argumentName(arg) {
    //use method getArguments from UninstantiatedDescribableWithInterpolation class
    def argName = arg.getArguments()['name']
}
```

In our implemetation for all other types we wil assume that param is instance of `UninstantiatedDescribableWithInterpolation` which is true for all normal params. Here is full documentation for this class:
[UninstantiatedDescribableWithInterpolation](https://javadoc.jenkins.io/plugin/workflow-cps/org/jenkinsci/plugins/workflow/cps/UninstantiatedDescribableWithInterpolation.html). In fact we will use method from parent class of this class named [UninstantiatedDescribable](https://javadoc.jenkins.io/plugin/structs/org/jenkinsci/plugins/structs/describable/UninstantiatedDescribable.html) and it's method `getArguments`.
This metod will return `Map`. Then we extract value of name key from this `Map` and that way we get the parameter name.

## Examples
Please have a look at example results of running this function

```groovy
argumentName(string(name: 'test', defaultValue: "")) -> 'test'
argumentName(choice(name: 'select', choices: ['a', 'b'])) -> 'select'
```

As you can see we achieved exacly what we need.
Last step is to use this groovy code in actual Jenkins pipeline with real parameters. This step is ommited here and
reader is encouraged to try it yourself.

# Summary

In this blog post I described the possible way to iterate over Jenkins parameters and get their names and values. This solution can be used in many scenerios for example one described in this blog posts. Our solution involves automatic building of command line params based on Jenkins pipeline args.

# References
- https://javadoc.jenkins.io/plugin/workflow-cps/org/jenkinsci/plugins/workflow/cps/UninstantiatedDescribableWithInterpolation.html
- https://javadoc.jenkins.io/plugin/structs/org/jenkinsci/plugins/structs/describable/UninstantiatedDescribable.html
- https://www.jenkins.io/doc/book/pipeline/syntax/#parameters