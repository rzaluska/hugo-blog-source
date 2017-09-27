+++
title = "Important interfaces that every Go developer should know"
date = 2017-09-20T18:19:56+02:00
draft = true
slug = "important-go-interfaces"
hl = true
tags = ["go", "interfaces"]
+++

Interfaces are very important concept in Go language. They provide simple and
effective way to express common behaviours among types. They provide
easy to understand drop in replacement for typical situations where
we need some kind of polymorphism.
Thats why interfaces are used all the time by Golang developers.

Some of interfaces are more special than others.
Most essential ones are definded in Go standard
library.
They are used and can be find in every Go project.
Each Golang developer should know these most important interfaces.
That way one can easly determine which of well known
interfaces given type implements just by looking at methods signatures.
It also gives us grasp of what behaviours we can expect, while calling
implemented method of interface, that is standard and used everywhere.
Standard interfaces are also showing us how to desing good interface
(one that will be idiomatic Go code).

In this blog post I will present most important and good to know interfaces
and semantics behind them.

After this a litter too long introduction lets see and actual list of most
important interfaces:

## #1 Build in: error
Error in build in interfaces that defines whether given type can be treated
as error. Error interface is defined as

```go
type error interface {
    Error() string
}
```

As you can see this is exteamly simple interface. Only one method
is defined - `Error()`.
Its purpose is to provide precise information about given error including
verbose context.

Most of the time you don't need to create impementation of this interfaces
by yourself. You can find helper methods in package `errors`. For example,
to create new error value one can write:

```go
myError := errors.New("Something goes wrong")
```

If you want to wrap error aroud another error and provide more context to it
you can use function `Errorf` from `fmt` package
\[[doc](https://golang.org/pkg/fmt/#Errorf)\].

```go
...
if err != nil {
    return fmt.Errorf("Error occured while we have computed something: %v", err)
}
...
```

## #2 io.Reader

This interface is very important for various types of file system and network
communication tasks. It is defined like this:

```go
type Reader interface {
        Read(p []byte) (n int, err error)
}
```

It's definition contains one method `Read`. This method will read `len(p)` bytes
from whatever source it is definde for. The bytes will be saved in slice `p []byte`.
It will return `n` - number of bytes that were read and an `error` is something went wrong.

For example if you open a file and user `Read` method you will read bytes from that file:

```go
file, err := os.Open("file.txt")
if err != nil {
	log.Fatal(err)
}

defer file.Close()

contens := make([]byte, 10)

// Try to read 10 or less bytes in case of EOF
n, err := file.Read(contains)
```

This method also have the same semetics for network connections where you can read data from
them just like from file.

An `ioutil` package defines method `ReadAll` which is helpful when you want to read whole file at
once \[ [doc](https://golang.org/pkg/io/ioutil/#ReadAll) \]

```go
...

file, err := os.Open("file.txt")
...


// ReadAll argument is io.Reader.
// It turns out that struct os.File is implementing this interface,
// as we saw beafore, so we can use it here.
b, err := ioutil.ReadAll(file),
```

## io.Writer

## io.ReadWriter

## io.Closer

## io.WriteCloser

## fmt.Stringer

## net.Conn

## image.Image

## draw.Image

## sort.Interface
