+++
title = "Important interfaces that every Go developer should know"
date = 2017-09-20T18:19:56+02:00
draft = true
slug = "important-go-interfaces"
tags = ["go", "interfaces"]
+++

Interfaces are very important concept in Go language.
They provide simple and effective way to express common behaviours among types.
They give us easy to understand solution for typical situations where
we need some kind of polymorphism.
Thats why interfaces are used all the time by Golang developers.

Some of interfaces are more special than others.
Most essential ones are definded in Go standard library.
They are used and can be find in every Go project.
Each Golang developer should know these most important interfaces.
That way one can easly determine which of well known
interfaces given type implements just by looking at methods signatures.
It also gives us a grasp of what behaviours we can expect, while calling
implemented method of interface that is standard and used everywhere.
Standard interfaces are also showing us how to desing good interface
(one that will be idiomatic Go code).

In this blog post I will present most important and good to know interfaces
and semantics behind them.

After this a litter too long introduction lets see and actual list of most
important interfaces:

## Build in: error
Error in build in interfaces that defines whether given type can be treated
as error. Error interface is defined as

{{< highlight go >}}
type error interface {
    Error() string
}
{{< / highlight >}}

As you can see this is exteamly simple interface. Only one method
is defined - `Error()`.
Its purpose is to provide precise information about given error including
verbose context.

Most of the time you don't need to create impementation of this interfaces
by yourself. You can find helper methods in package `errors`. For example,
to create new error value one can write:

{{< highlight go >}}
myError := errors.New("Something goes wrong")
{{< / highlight >}}

If you want to wrap error aroud another error and provide more context to it
you can use function `Errorf` from `fmt` package
\[[doc](https://golang.org/pkg/fmt/#Errorf)\].

{{< highlight go >}}
...
if err != nil {
    return fmt.Errorf("Error occured while we have computed something: %v", err)
}
...
{{< / highlight >}}

## io.Reader

This interface is very important for various types of file system and network
communication tasks. It is defined like this:

{{< highlight go >}}
type Reader interface {
        Read(p []byte) (n int, err error)
}
{{< / highlight >}}

It's definition contains one method `Read`.
This method will read `len(p)` bytes from whatever source it is definde for.
The bytes will be saved in slice `p []byte`.
This method will return `n` - the number of bytes that were
read and an `error` if something went wrong.

For example if you open a file and then call `Read` method you will
read bytes from that file:

{{< highlight go >}}
file, err := os.Open("file.txt")
if err != nil {
	log.Fatal(err)
}

defer file.Close()

contens := make([]byte, 10)

// Try to read 10 or less bytes in case of EOF
n, err := file.Read(contains)
{{< / highlight >}}

This method also have the same semetics for network connections where you can read data from
them just like from file.

An `ioutil` package defines method `ReadAll` which is helpful when you want to read whole file at
once \[ [doc](https://golang.org/pkg/io/ioutil/#ReadAll) \]

{{< highlight go >}}
...

file, err := os.Open("file.txt")
...


// ReadAll argument is io.Reader.
// It turns out that struct os.File is implementing this interface,
// as we saw beafore, so we can use it here.
b, err := ioutil.ReadAll(file),
if err != nil {
    // handle error
}
// b slice contains all bytes of file
{{< / highlight >}}

By using io.Reader interface we can wrap one implementation around another.
This gives us idiomatic way of achieveing things such as:

- reading from compressed file
- reading from compressed network tcp stream
- reading from encrypted network connection

Below is and example of reading from compressed file:
{{< highlight go >}}
import "compress/gzip"

...

file, err := os.Open("archive.gz")
...

// Wrap os.File with gzip.Reader
// We can do this beacause new reader expects io.Reader implementation
// as argument and os.File implements is
decompressReader, err := gzip.NewReader(file)

c := make([]byte, 10)

// Read 10 decompressed bytes
n, err := decompressReader.Read(c)

if err != nil {
    // handle errors
}

a := c[0] // use decompressed data
{{< / highlight >}}

## io.Writer
This interface is very similar to io.Reader. We use it to write bytes to
various destinations. Its definition is also very simple:

{{< highlight go >}}
type Writer interface {
        Write(p []byte) (n int, err error)
}
{{< / highlight >}}

This interface has one method - `Write`, which takes one argument - slice of
bytes `p` (`[]byte`). Then it writes given bytes to some output
for which this method is defined for.
Finally it returns `n` - number of bytes that have been written to output
and `error` if there was an error during writeing.
Simple exaples of `io.Writer` usage
my include writeing bytes to file or network connection.

This example shows how to write text `'Test\n'` to file:
{{< highlight go >}}
...
file, err := os.Create("file.txt")
if err != nil {
	log.Fatal(err)
}

defer file.Close()

contens := []byte{"Test\n"}

n, err := file.Write(contains)
if err != nil {
    log.Printf("Error while writeing to file: %v", err)
}
...
{{< / highlight >}}

Similar to `io.Reader`, `io.Writer` interfaces can be wrapped around each
other. This gives us result opposite to `io.Reader`, for example:

- writeing compressed bytes to file
- writeing compressed bytes to network connection

This example shows how we can write compressed bytes to file:

{{< highlight go >}}
import "compress/gzip"

...

file, err := os.Create("file.txt.gz")
if err != nil {
	log.Fatal(err)
}

defer file.Close()

contens := []byte{"Test\n"}

// Wrap os.File with gzip.Writer
compressedWriter := gzip.NewWriter(file)

// Write compressed bytes
n, err := compressedWriter.Write(contains)
if err != nil {
    log.Printf("Error while writeing to file: %v", err)
}
...
{{< / highlight >}}

## io.ReadWriter

## io.Closer

## io.WriteCloser

## fmt.Stringer

## net.Conn

## http.ResponseWriter
mock httptest.RespnseRecorder

## image.Image

## draw.Image

## sort.Interface
