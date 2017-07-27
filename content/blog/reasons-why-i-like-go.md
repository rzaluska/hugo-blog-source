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
variable types beacause they can be automatically deducted. Everything is writen
down explicity and there is no operator overloading. Functions also can't
be overloaded, which makes finding ones that will be sutable for given argument
types set easier.
Ease of reading understanding and  exploring other people's code (few keywords, relatively flat project structures)
Short learning time and easy to master. It is very easy to grasp both for experienced and fresh programmers.

# Text editor oriented
Vim + 2 plugins are more than enough to effectively develop using Go.
You don't need any type of IDE which will load itself for five minutes .
The set of tools that comes with Go is designed to work with any kind
of text editor that can call shell command as part of text
processing. Go is language for humans not for machines so most of the time you
don't need any special tools to write Go code. Good text
editor will be enought but if you want some additional features you can allways
use small plugins.

If you are Vim or NeoVim user (like me) I can recomend this two:

- https://github.com/zchee/deoplete-go - code autocompletion
- https://github.com/fatih/vim-go - other types of goodies (variable rename,
    autoformating of code, auto imports, go to declaration etc.)

They are wrappers around standard Go commands. They allow you to interact with Go
toolset without leaving text editor.

## One way of doing things
Go philosophy is convention over configuration.
For loop
Only structure and composition of them - no classes and inheritance.
Error handling - simple and elegant but criticized

## Fast compilation to machine code
times and static binaries - go is compiled to machine code, no JVM or .NET, executable files are statically linked so no dependences are required to run them. Obvious disadvantage of static compilation are big executables sizes. I think it is not always problem today, when you can have 4TB disc at your stationery home computer, and even more in servers.

## Excellent tooling
go is build together with set of official tools that help with development. You don't need to choose and configure compiler. You don't need to write any kind of additional scripts to build your project or read generate docs.
Go build - no Makefile is required - your code and dependencies between files define what needs to be build. Go build will always optimize your code so no additional flags are required for creating maximum performance code.
Easy cross compilation - you can compile executable for mac in linux without any problems. Individual files can be marked to be build in certain platforms only. That way you can create optimal code for all platforms.
Go get - downloading and installing tools from github is matter of execution one shell command
Go test (go benchmark) you can push your code speed to the absolute limits
Godoc - go has very human friendly way of documentation code - you don't need to use HTML or Restructuredtext. Just add comment line above object you want to write info about. After running godoc you will have beautiful and uniform documentation for your code in your web browser.
Go rename - refactoring
Go generate - ast package in standard library
Go fmt - no more formating wars

# Concurrency
is first class citizen (go, select keyword, channels)

# Proposes something new without using what we already know
opposite to other modern programming languages Go, decides to stay with not so many programming concepts included. Authors are adding new features only after carefully thinking about positives and negatives of them. That is why we still don’t have generics in Go. Right now community can’t find good way of implementing them. This is because the way must be coherent with rest of language. They don’t want to add random unthought generics implementation that will break language and add unnecessary complexity
## Brings some new interesting concepts
Struct embedding
Implicit interface implementation you can add interfaces after implementation is done if you notice some kind of pattern in types methods
Deciding if type func or field is exported by naming it starting from upper or lower case letter
defer

# Build to solve real problems
not because someone can create yet another complex programming language.

