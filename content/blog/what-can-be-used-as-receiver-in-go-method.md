+++
title = "What can be used as receiver in Go functions?"
date = 2017-07-29T19:21:20+02:00
draft = true
slug = "receivers-in-go-functions"
tags = ["go"]
+++

In this post I will show what kind of Go primitives can be used
as method recivers. If you learned Go or just started learning
you already probably know that you can pass struct
as reciver type. But there is more. Methods receivers are
capable of enhance other things in Go.

<!--more-->

# What is function receiver ?
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

has another additional argument `(a A)` next to `func` keyword.

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
extends type. If we declare our receiver like this then we
will get copy of struct to our method. To ilustrate this, small
example will be the best.

```go
package main

import "fmt"

type A struct {
    i int
}

func (a A) add() {
    a.i++
}

func (a A) get() int {
    return a.i
}

func main() {
    a := A{i: 2}
    a.add()
    fmt.Println(a.get())
}
```

First of all we create simple structure type `A`. We add two metods
to it `add()` and `get()`. Notice that this methods receive struct
copy as it's receiver argument. We call `add()` method. And
then `get()` method.
As you may expect output of this program is `2`. This is because
`add()` method modifies copy of our struct not our orginal struct.
So the conclusion of when to use struct as receiver type is
to use it when you don't want to allow any modifications of your
orginal object.

Note that when your struct contains reference as one of its
members then despite the fact that we pass struct as copy
the reference is the same. Another example ilustrates it.

```go
package main

import "fmt"

type A struct {
    i int
    b []byte
}

func (a A) modify() {
    a.i++
    a.b[0] = 10
}

func main() {
    a := A{i: 2, b: make([]byte, 1)}

    fmt.Printf("%#v\n", a)

    a.modify()

    fmt.Printf("%#v\n", a)
}
```

The output of programs turns out to be:

`
main.A{i:2, b:[]uint8{0x0}}
`

`
main.A{i:2, b:[]uint8{0xa}}
`

As you can see we passed struct to method as copy but mehod was
able to modify orginal object pointer by reference
inside struct (`[]byte` slice in this example)

# Struct pointer as receiver
Functions recivers can be also struct pointes. Remember that
struct of given type and pointer to that struct are two
different things in Go. As you may guess by passing pointer to
struct as receiver type we give our method ability to modify
all fields of struct.

```go
package main

import "fmt"

type A struct {
    i int
}

func (a *A) add() {
    a.i++
}

func main() {
    a := A{i: 2}

    fmt.Printf("%#v\n", a)

    a.add()

    fmt.Printf("%#v\n", a)
}

```

In this example we define that our `add()` function will
be metod of type `*A`.

```go
func (a *A) add() {
    a.i++
}
```

Our function recives reference to original object and it is able
to midify it. The output of program is:

`
main.A{i:2}
`

`
main.A{i:3}
`

So you can see that value of field `i` gets midified from `2` to `3`.
Exacly what we expected.


# Functions
In Go even functions can be receivers and can have methods. This can be
used to enhance function with simple decorators. They can be
used for example for logging errors or execution time. Following
simple example explains usage of functions as receiver types.

```go
package main

import (
    "fmt"
    "strings"
)

type F func(string) string

func (f F) upperCase(s string) string {
    return strings.ToUpper(f(s))
}

func (f F) lowerCase(s string) string {
    return strings.ToLower(f(s))
}

func (f F) mixCase(s string) string {
    return f.lowerCase(s) + f.upperCase(s)
}

func doubleString(a string) string {
    return a + a
}

func main() {
    f := F(doubleString)

    fmt.Println(f("a"))

    fmt.Println(f.upperCase("a"))

    fmt.Println(f.lowerCase("a"))

    fmt.Println(f.mixCase("a"))
}
```

First of all we declare that `F` is type of function that takes string
and returns string.

```go
type F func(string) string
```

Next we add methods for type `F`.

```go
func (f F) upperCase(s string) string {
    return strings.ToUpper(f(s))
}

func (f F) lowerCase(s string) string {
    return strings.ToLower(f(s))
}

func (f F) mixCase(s string) string {
    return f.lowerCase(s) + f.upperCase(s)
}
```

Note that the only things you can do with function
as receiver type is to:

- call it `f(s)`
- use other methods defined for it `f.lowerCase(s)`

It is like that beacause functions
does not have fields like structs.

Last thing is to define fuction that will be compatible with
`F` type. It must have one `string` argument and return `string`.
This simple function that concatenates string with itself is
good candidate to use as `F` type:

```go
func doubleString(a string) string {
    return a + a
}
```

In main we create new variable of type `F`. We convert `doubleString`
function to this type. The conversion is possible beacause `doubleString`
function is coherent with type `F`.

```go
func main() {
    f := F(doubleString)

    fmt.Println(f("a"))

    fmt.Println(f.upperCase("a"))

    fmt.Println(f.lowerCase("a"))

    fmt.Println(f.mixCase("a"))
}
```
The output of program is:

`
aa
`

`
AA
`

`
aa
`

`
aaAA
`

Take a closer look at syntax of calling methods of function.
It is similar to that used with structs. This it beacause
in Go `functions` are types just like `structs` so they are treated
the same.

In Go defining methods for functions is very popular idiom
and it is used in a lot of places. This pattern allows
to utilize decorator pattern in very efficient way.

# Package scope
In previous exaples we used only one package. Things are different
when we use more packages. In Go we can define new methods for type
only when it is in same package that method definition.

Lets take this project structure as exaple:

```bash
├── main.go
└── src
    └── lib
        └── lib.go
```

We have main and lib packages. Individual files looks like this:

`main.go`

```go
package main

import (
    "lib"
)

func (a lib.A) add() {
    a.I++
}

func main() {
    a := lib.A{I: 1}
    a.add()
}
```

`lib.go`

```go
package lib

type A struct {
    I int
}
```

In `lib` package we define type `A`. This struct have one field `I int`
which name strats from upper case letter so this field is accessible from
other packages.

In `main` packages we try to define new method for type `A`. The result is
copiler error
`cannot define new methods on non-local type lib.A`.

So as you can see we can define new methods only for types in same package.
This is the reason why we can't define new methods for build in types (like
`int` `string` `byte` etc.).

# Use type redefinition
But there is solution. We can create type redefinition and refer to it instend of
to orginal type. Next example ilustrates way of adding new method for
build in `int` type.

```go
package main

import "fmt"

type Int int

func (i *Int) add() {
    *i = Int(int(*i) + 1)
}

func main() {
    i := Int(1)

    fmt.Println(i)

    i.add()

    fmt.Println(i)
}
```

We define that `Int` is type that is same as `int` but it is defined
inside our package.
```go
type Int int
```

Next we add new method for type `*Int`. Inside it
we cast `Int` to `int` to be able to use `+` operator defined for `int`.
```go
func (i *Int) add() {
    *i = Int(int(*i) + 1)
}
```

The output of program is:

`
1
`

`
2
`

We successfuly enhanced build in type with new functionality (not super
useful in this example).


# What can't be receiver ?
We can't use the following things as receiver types:

- **methods** - if we define method on object type it can't
    be used as receiver type just like normal method.
- **interfaces** - in Go interfaces are defining set of actions
    possible for type. They are not definig acctual implementation.
    That's why thay can't be used as receivers for methods, beacause
    methods are about implementation.

# Summary
In this post I presented what kinds of objects in Go can be used
as function receiver arguments. As you can see various types
of receivers and methods in Go
are very usable and they are complement for normal functions.
