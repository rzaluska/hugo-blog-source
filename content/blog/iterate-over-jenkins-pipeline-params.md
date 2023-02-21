+++
title = "Iterate over Jenkins pipeline parameters"
date = 2023-02-21T17:00:00+01:00
tags = ['jenkins', 'devops', 'groovy']
+++

# Introduction

In this blog post, I will present a way to iterate over parameters in a scripted Jenkins pipeline.
By using this technique, you can, for example, automatically generate arguments for the command line in the `sh` step.
This solution assumes that your parameters are available in an array defined in the scripted context of Jenkinsfile.
So, using the `parameters` directive in the declarative pipeline will not allow you to use this solution.

For example, this will not work:
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

We will iterate over the `args` table, and we will extract the name of each parameter and its value. This will allow
us to automatically change what will be generated from iteration based on parameters that we provide in the `args` table.
This solution is designed to work with all standard types of parameters provided in Jenkins. Special parameters defined by
plugins are also supported due to additional case that we will implement.

# Implementation
An example implementation can involve iteration over `args`
table and building command line parameters from Jenkins parameters.
Here we are getting the given argument name using the `argumentName` helper function. We will implement it in the next step.

```groovy
p = []
args.each {
    def argName = argumentName(it)
    p = p + "--${argName}=\"${params[argName]}\""
}
```

This fill produces a table of values like `--$NAME=params[$NAME]`.

For now, let's also have a look at string building using `groovy` string interpolation:
`"--${argName}=\"${params[argName]}\""`. Here we are using a global `params` object created for us by Jenkins. This object is having all parameters with their values taken from Jenkins parameters form.

## Getting the name of a parameter
Next, we will have a close look at the `argumentName` function because this is
the place where all the magic happens. We will overload this function as a special case for
groovy `Map` to use other logic for this type. For some types of parameters, you need to specify them as `Map` - for example:

```groovy
string(name: 'name', defaultValue: "") // normal param,
[$class: 'DynamicReferenceParameter', name: 'customParam', ...], //Param defined as Map
```

We need to take care of those types of parameters also. Fortunately for us, Groovy is very flexible about function
overloading so we can implement our solution in a very easy way. We provide two functions - one overloaded for `Map` class and one without type specification (this function will be invoked for all other classes that are not `Map`).

```groovy
def argumentName(Map arg) {
    return arg['name']
}

def argumentName(arg) {
    //use method getArguments from UninstantiatedDescribableWithInterpolation class
    def argName = arg.getArguments()['name']
}
```

In our implementation for all other types, we will assume that the parameter is an instance of `UninstantiatedDescribableWithInterpolation` which is true for all normal parameters. Here is the full documentation for this class:
[UninstantiatedDescribableWithInterpolation](https://javadoc.jenkins.io/plugin/workflow-cps/org/jenkinsci/plugins/workflow/cps/UninstantiatedDescribableWithInterpolation.html). In fact, we will use a method from the parent class of this class named [UninstantiatedDescribable](https://javadoc.jenkins.io/plugin/structs/org/jenkinsci/plugins/structs/describable/UninstantiatedDescribable.html), and it's method `getArguments`.
This method will return `Map`. Then we extract the value of the name key from this `Map` and that way we get the parameter name.

## Examples
Please have a look at the example results of running this function

```groovy
argumentName(string(name: 'test', defaultValue: "")) -> 'test'
argumentName(choice(name: 'select', choices: ['a', 'b'])) -> 'select'
```

As you can see, we achieved exactly what we needed.
The last step is to use this groovy code in an actual Jenkins pipeline with real parameters. This step is omitted here and
The reader is encouraged to try it yourself.

# Summary

In this blog post, I described the possible way to iterate over Jenkins parameters and get their names and values. This solution can be used in many scenarios, for example, one described in this blog post. Our solution involves the automatic building of command line parameters based on Jenkins pipeline arguments.

# References
- https://javadoc.jenkins.io/plugin/workflow-cps/org/jenkinsci/plugins/workflow/cps/UninstantiatedDescribableWithInterpolation.html
- https://javadoc.jenkins.io/plugin/structs/org/jenkinsci/plugins/structs/describable/UninstantiatedDescribable.html
- https://www.jenkins.io/doc/book/pipeline/syntax/#parameters
