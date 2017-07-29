+++
title = "What can be used as receiver in Go ?"
date = 2017-07-29T19:21:20+02:00
draft = true
slug = "what-can-be-receiver-in-go"
+++

In this post I will show what kind of Go primitives can be used
as method recivers. If you learned Go or just started learning
you already probably know that you can pass struct
as reciver type. But there is more. Methods receivers are
capable of enhance other things in Go.

<!--more-->

# What is method receiver ?
In the begining we will estabilish and remind ourselfs what
exacly is method receiver. Let's take simple example:

```go
package main

import "fmt"

type A struct {
    i int
    j int
}

func (a A) sumFields(k int) int {
    return a.i + a.j + k
}

func main() {
    a := A{i: 2, j: 3}

    fmt.Println(a.sumFields(10))
}
```

I will explain what is happening here. First of all we define
`type A` to be `struct` which has two fields `i` and `j` of type int.

```go
type A struct {
    i, j int
}
```

Next we define function `sumFields` but its defintion is little
different that normal one

```go
func (a A) sumFields(k int) int {
    return a.i + a.j + k
}
```

In go we define normal function like that:

```go
func FuncName(Arg1 type1, Arg2 type2...) ReturnValuesList {
}
```

But this one

```go
func (a A) sumFields(k int) int {
    return a.i + a.j + k
}
```

has another additional argumment `(a A)` next to `func` keyword.

This argument is our **reciver**.

> **Question**: Can a function have multipile receiver arguments ?

> **Answer**: No It can't. If you write `func (a A, b B) f() {}`
> it will produce compile error `method has multipile receivers`.
> You need to treat function recivers as way to turn it into method
> of given type. Just like in object oriented programming. So
> to simplify, our receiver can be compared to `this` or `self`
> keyword from object oriented languages.

Take closer look at usage of our new method.

```go
func main() {
    a := A{i: 2, j: 3}

    fmt.Println(a.sumFields(10))
}
```

We create new variable `a` and call `sumFields` on it like
in we would use method on object in object oriented programming.
We pass `10` as argument named `k` which is defined next to function
name.

```go
func (a A) sumFields(k int) int
```

# Struct as receiver
In the first example I have used struct type as receiver.
This is most common way of declaring that given metod
extends type. If we declare 


# Struct pointer as receiver
Functions recivers can be also struct pointes. Remember that
struct of given type and pointer to that struct are two
different things in Go.

# Functions

# Methods

# Interfaces
