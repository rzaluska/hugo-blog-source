+++
draft = true
title = "Reasons why I like Go"
+++

Let' s talk about Go and why I like it. Go is small and interesting programming
language. It is created with simplicity in mind. In this post I will present you
list of reasons why I think that Go is good programming language.

<!--more-->

# Simple and concise syntax

The syntax is similar to that used in scripting languages. You don't need to set
variable types because they can be automatically deducted. Everything is written
down explicitly and there is no operator overloading. Functions also can't
be overloaded, which makes finding ones that will be suitable for given argument
types set easier.

You don't need to initialize your variables with 0 or NULL. The compiler do it
for you. No more mistakes that come from uninitialized variables. Declaration
and initialization can be done in one step.
Have a look at some examples of variables usage:

```go
var a int // declare a is int and has value of 0
a := 0 // declare and initialize a (compiler will deduct that a is int)

var b string = "abc" // b is string and has value of "abc"
var b = "abc" // you can omit type
b := "abc" // you can omit var and use :=

c := 1 // declare and initialize c to be equal 1
c = 2  // reuse declaration of c and overwrite it with 2
```

Despite the fact that types are not written explicitly the compiler does check
if they match. Let's see it in simple example:

```go
f := "test"
g := 1
g = f  // this line will cause compilation error
```

Go has few keywords and simple but powerful control structures
so it is very easy to read understand and  explore other people's code.
Most Go projects have relatively flat file structure so you don't need search
for files hidden deeply in directory tree.

Error handling is based on multiple return values. Language has some sort of
try catch exceptions handling (panic, recover) but it is used only in rare
situations. Typical check for errors looks like this:

```go

f, err := os.Open("file.txt")
if err != nil {
    // handle error here, write info to log etc...
}

defer f.Close() // close file when surrounding function returns

// use f
```

Opposite to other modern programming languages Go, decides to stay with
not so many programming concepts included.
There are no classes and standard object oriented features. We have
only structures, interfaces and composition of them.
Authors are adding new features only after carefully thinking about positives
and negatives of them. That is why we still don’t have generics in Go.
Right now community can’t find good way of their implementation.
This is because the way must be coherent with rest of language.
They don’t want to add random unthought generics implementation that will break
language and add unnecessary complexity

This features make Go a language of short learning time and with ease to master.
It is very accessible for both for experienced and fresh programmers.

# Text editor oriented
Vim + 2 plugins are more than enough to effectively develop using Go.
You don't need any type of IDE which will load itself for five minutes .
The set of tools that comes with Go is designed to work with any kind
of text editor that can call shell command as part of text
processing. Go is language for humans not for machines so most of the time you
don't need any special tools to write Go code. Good text
editor will be enough, but if you want some additional features you can always
use small plugins.

If you are Vim or NeoVim user (like me) I can recomend this two:

- https://github.com/zchee/deoplete-go - code autocompletion
- https://github.com/fatih/vim-go - other types of goodies (variable rename,
    auto formating of code, auto imports, go to declaration etc.)

They are wrappers around standard Go commands. They will allow you to interact with Go
toolset without leaving text editor.

# One way of doing things
Go philosophy is convention over configuration. From syntax point of view we
have only one type of loop - the for loop. But you can use it to achieve a lot
of things:

```go
//infinite loop
for {
}

// while loop
for i < n {
    i++
}

// standard for loop
for i := 0; i < n; i++ {

}
```

# Fast compilation to machine code
Go compiles to native code really fast. You can feel like if you are working with scripting
language where there is no compilation step. Go produces statically linked
binaries. You can run them on your target machine without any additional
dependencies. Obvious disadvantage of static compilation is that it produces
big executables. I think it is not always problem today,
when you can have 4TB disc at your stationery home computer,
and even more in servers.

# Excellent tooling
Go is created together with set of official tools that help with development.
You don't need to choose and configure compiler.
You don't need to write any kind of additional scripts (Makefiles)
to build your project or read generate docs. The most important and interesting
tools are:

- `go build` - this command analyzes your project and it's dependencies and
    automatically compiles and links you program. It uses Go import statements
    from code to find out what needs to be build.
    Go build will always optimize your code so no additional flags are
    required. This tool gives you also easy cross compilation -
    you can compile executable for Mac on Linux without any problems.
    Individual files can be marked to be build in certain processor platforms
    or operating systems only. That way you can create optimal code for
    all platforms and achieve maximum portability.
- `go get` - this tool downloads and installs libraries from github or other
    repositories. Obtained files are placed in right directories and there are
    no problems with their usage or compilation.
- `go test` - Go has build in testing framework. You just need
    to name your files like `mylib_test.go` and `go test` command will find your
    tests and spin them up. If you want to push your code speed to the absolute limits
    you can your build in benchmarking framework, where you can analyze cpu and
    memory usage. You can also find whether Go garbage collector is not working too
    much because you needlessly allocating memory.
- `godoc` - Go has very human friendly way of documentation code -
    you don't need to use HTML or Restructuredtext. Just add comment line
    above object you want to write info about. After running `godoc`
    you will have beautiful and uniform documentation for your code
    in your web browser.
- `gorename` - one of nice tools for code refactoring (guess what is does)
- `gofmt` - this tool formats your Go code to meet official standards.
    In Go there in no more formating wars because everybody just runs Go fmt on
    their code and it gets tidy up.

# Concurrency
In go concurrency is first class citizen. There are special keyword that are
build into language:
- go - this one allows you to call function concurrent to actual instruction
    sequence.

    package main

    import (
        "fmt"
        "sync"
    )

    var wg sync.WaitGroup

    func test(i int) {
        defer wg.Done()
        fmt.Println(i)
    }

    func main() {
        for i := 0; i < 10; i++ {
            wg.Add(1)
            go test(i)
        }
        wg.Wait()
    }
- chan - in go you can communicate with other concurrent functions using
    channels. They are preffered way of safe synchronizing access to shared data.
- select - this keyword allows to use group of channels at once

# Brings some interesting concepts
Some of them are:

- Struct and interface embedding instead of inheritance.
- Implicit interface implementation - you don't need to declare
    that object implements interface. If method name and parameters of object match ones in interface
    it means that you implemented it and your object compatible with interface.
    This type of solving interface implementation problem allows
    you to add interfaces after implementation
    is done if you notice some kind of pattern in several types methods.
- You can decide if type, func or field is exported out of package by naming it
    starting from upper or lower case letter. This reduces need of use public
    and private keywords.
- Defer - you saw this keyword before while reading this post. This command
    allows you to delay execution of some code to the moment of surrounding
    function return.

# Conclusion
I presented you list of reasons why I think that Go is good language. Some of
readers may have other opinions and I respect them. Nevertheless I hope that
this article gives everybody good collection of stand out Go features and some
of reader may give Go a try.
