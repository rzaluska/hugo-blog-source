+++
title = "Important interfaces that every Go developer should know"
date = 2017-09-20T18:19:56+02:00
draft = true
slug = "important-go-interfaces"
hl = true
tags = ["go", "interfaces"]
+++

Interfaces are very important concept in Go language. They provide simple and
effective way of expressing common behaviours among types. Thats why interfaces
are used all the time by Golang developers.

Some of interfaces are more special than others. They are definded in standard
library Go packages and they show how to desing good interface. Every Golang
developer should know most important set of interfaces. That way one can easly
determine which of well known interfaces given type implements just
by looking at methods signatures.

In this blog post I will present most important and good to know interfaces
and semantics behind them.

## Build in: error
Error in build in interfaces that defines whether given type can be treated
as error. Error interface is defined as

```go
type error interface {
    Error() string
}
```

As you can see this is exteamly simple interface. Only one method `Error()` is
defined. Its purpose is to provide precise information about given error.

Most of the time you don't need to create impementation of this interfaces
by yourself. You can find helper methods in package `errors`. For example,
to create new error value one can write:

```go
myError := errors.New("Something goes wrong")
```

## io.Reader

This interface is very important for various types of file system and network
communication tasks. It is defined like this:

```go
type Reader interface {
        Read(p []byte) (n int, err error)
}
```

## io.Writer

## io.ReadWriter

## io.Closer

## io.WriteCloser

## fmt.Stringer

## net.Conn

## image.Image

## draw.Image
