+++
title = "Important interfaces that every Go developer should know"
date = 2017-10-01T21:10:56+02:00
slug = "important-go-interfaces"
tags = ["go", "interfaces"]
+++

Interfaces are a very important concept in Go language.
They provide a simple and effective way to express common behaviors among types.
They give us easy to understand solution for typical situations where
we need some kind of polymorphism.
That's why interfaces are used all the time by Golang developers.

Some of the interfaces are more special than others.
Most essential ones are defined in Go standard library.
They are used and can be found in every Go project.
Each Golang developer should know these most important interfaces.
That way one can easily determine which of well-known
interfaces a given type implements just by looking at methods signatures.
It also gives us a grasp of what behaviors we can expect, while calling
implemented method of interface that is standard and used everywhere.
Standard interfaces are also showing us how to design good interface
(one that will be idiomatic Go code).

In this blog post, I will present most important and good to know interfaces
and semantics behind them.

After this, a litter too long introduction lets see an actual list of most
important interfaces:

## Build-in  interface - error \[[doc](https://golang.org/ref/spec#Errors)\]
Error is an build-in interface that describles types that can be treated
as an error values. Error interface is defined as:

{{< highlight go >}}
type error interface {
    Error() string
}
{{< / highlight >}}

As you can see this is an extremely simple interface.
Every type in Go that is created to describle some sort of error must implement
only one method - `Error()`.
The purpose of it is to provide precise information about given error including
verbose context.

Most of the time you don't need to create the implementation of this interfaces
by yourself. You can find helper methods in package `errors`. For example,
to create new error value one can write:

{{< highlight go >}}
myError := errors.New("Something goes wrong")
{{< / highlight >}}

If you want to wrap error around another error and provide more context to it
you can use function `Errorf` from `fmt` package
\[[doc](https://golang.org/pkg/fmt/#Errorf)\].

{{< highlight go >}}
...
if err != nil {
    return fmt.Errorf("Error occured while we have computed something: %v", err)
}
...
{{< / highlight >}}

If you are looking for more powerful solution that can help you effectively
deal with errors in Go you can use
[https://github.com/pkg/errors/](https://github.com/pkg/errors/) package.
By using function `Wrap` from this package you can create meaningful
error messages that can also contain function stack traces.
This solution is far more superior than using `fmt.Errorf`.

## io.Reader \[[doc](https://golang.org/pkg/io/#Reader)\]

This interface is very important for various types of file system and network
communication tasks. It is defined like this:

{{< highlight go >}}
type Reader interface {
        Read(p []byte) (n int, err error)
}
{{< / highlight >}}

Its definition contains one method `Read`.
This method will read `len(p)` bytes from whatever source it is defined for.
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

content := make([]byte, 10)

// Try to read 10 or less bytes in case of EOF
n, err := file.Read(content)
{{< / highlight >}}

This method also has the same semantics for network connections where you can read data from
them just like from file.

An `ioutil` package defines method `ReadAll` which is helpful when you want to read the whole file at
once \[ [doc](https://golang.org/pkg/io/ioutil/#ReadAll) \] (or read from
whatever source that implements `io.Reader` interface).

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

By using `io.Reader` interface we can wrap one of its implementation around another.
This gives us an idiomatic way of achieving things such as:

- reading from the compressed file
- reading from compressed network TCP stream
- reading from an encrypted network connection

Below is an example of reading from compressed file:
{{< highlight go >}}
import "compress/gzip"

...

file, err := os.Open("archive.gz")
...

// Wrap os.File with gzip.Reader
// We can do this beacause new reader expects io.Reader implementation
// as argument and os.File is implementing it
decompressReader, err := gzip.NewReader(file)

c := make([]byte, 10)

// Read 10 decompressed bytes
n, err := decompressReader.Read(c)

if err != nil {
    // handle errors
}

a := c[0] // use decompressed data
{{< / highlight >}}

## io.Writer \[[doc](https://golang.org/pkg/io/#Writer)\]
This interface is very similar to io.Reader. We use it to write bytes to
various destinations. Its definition is also very simple:

{{< highlight go >}}
type Writer interface {
        Write(p []byte) (n int, err error)
}
{{< / highlight >}}

This interface has one method - `Write`, which takes one argument - the slice of
bytes `p` (`[]byte`). Then it writes given bytes to some output
for which this method is defined for.
Finally, it returns `n` - number of bytes that have been written to output
and `error` if there was an error during writing.
Simple examples of `io.Writer` usage
my include writing bytes to file or network connection.

This example shows how to write text `'Test\n'` to file:
{{< highlight go >}}
...
file, err := os.Create("file.txt")
if err != nil {
    log.Fatal(err)
}

defer file.Close()

content := []byte("Test\n")

n, err := file.Write(content)
if err != nil {
    log.Printf("Error while writeing to file: %v", err)
}
...
{{< / highlight >}}

Similar to `io.Reader`, `io.Writer` interfaces can be wrapped around each
other. This gives us result opposite to `io.Reader`, for example:

- writing compressed bytes to file
- writing compressed bytes to the network connection

This example shows how we can write compressed bytes to file:

{{< highlight go >}}
import "compress/gzip"

...

file, err := os.Create("file.txt.gz")
if err != nil {
    log.Fatal(err)
}

defer file.Close()

content := []byte("Test\n")

// Wrap os.File with gzip.Writer
compressedWriter := gzip.NewWriter(file)

// Write compressed bytes
n, err := compressedWriter.Write(content)
if err != nil {
    log.Printf("Error while writeing to file: %v", err)
}
...
{{< / highlight >}}

## io.ReadWriter  \[[doc](https://golang.org/pkg/io/#ReadWriter)\]
This is first of presented interfaces that is example of interface composition
in Golang. This interface is defined like this:

{{< highlight go >}}
type ReadWriter interface {
        Reader
        Writer
}
{{< / highlight >}}

As you can see this interface is composed of two other interfaces:

- io.Reader
- io.Writer

It represents method set defined for things that you can read from and write to.
For example:

- os.File
- bytes.Buffer

By defining `io.Reader` and `io.Writer` as small one method interfaces we
can now compose them into a new one.

## io.Closer \[[doc](https://golang.org/pkg/io/#Closer)\]
This interface is defined for objects that need to be closed after use.
An example that comes to head immediately is `os.File`.
This interface definition is very simple:

{{< highlight go >}}
type Closer interface {
        Close() error
}
{{< / highlight >}}

In this interface, we have only one method - `Close`. It is used to
report a finish of usage of given resource. This method is also important
when we write to file using buffered io (`package  bufio`) and we need to make
sure that all bytes are saved to file.

Method `Close` is used in a lot of situations together with `defer` keyword:

{{< highlight go >}}
func foo() {
    f, err := os.Open("file.txt")
    if err != nil {
        //error handling
    }

    // Call Close() when we will be returning form current function
    defer func() {
        err := f.Close()
        if err != nil {
            // error when closing file
        }
    }()

    ...

}
{{< / highlight >}}

## io.WriteCloser \[[doc](https://golang.org/pkg/io/#WriteCloser)\]
This is next example of interfaces that combines two simple ones into
one bigger. This interface is defined like this:

{{< highlight go >}}
type WriteCloser interface {
        Writer
        Closer
}
{{< / highlight >}}

It combines the functionality of `io.Writer` and `io.Closer`.

## io.ReadWriteCloser \[[doc](https://golang.org/pkg/io/#ReadWriteCloser)\]
This interface combines three simple interfaces together

{{< highlight go >}}
type ReadWriteCloser interface {
        Reader
        Writer
        Closer
}
{{< / highlight >}}

## fmt.Stringer \[[doc](https://golang.org/pkg/fmt/#Stringer)\]
This interface functionality is similar to methods like `__str__` in Python
and `toString()` in Java. It is used to define text representation of
given object. This interface has one method `String()`:

{{< highlight go >}}
type Stringer interface {
        String() string
}
{{< / highlight >}}

This method is invoked implicitly when object is passed to `fmt.Printf`
function and verb is valid for string (`%s`, `%q`, `%v`, `%x`, `%X`). Be aware
that if an object implements both `String()` and `Error()` methods,
then the `Error()` method will be used by `fmt.Printf`.

## fmt.GoStringer \[[doc](https://golang.org/pkg/fmt/#GoStringer)\]
This interface can be used to change the behavior of Go-syntax representation
verb in `fmt.Printf` format string (`%#v`). By default, this verb will produce
the representation of an object that is valid Go source code. If you want to
change this then you need to implement this interface:

{{< highlight go >}}
type GoStringer interface {
        GoString() string
}
{{< / highlight >}}


## net.Conn \[[doc](https://golang.org/pkg/net/#Conn)\]
This interface is more complicated than previous ones. It has more methods
and they are designed to work with network data streams.

{{< highlight go >}}
type Conn interface {
        Read(b []byte) (n int, err error)
        Write(b []byte) (n int, err error)
        Close() error
        LocalAddr() Addr
        RemoteAddr() Addr
        SetDeadline(t time.Time) error
        SetReadDeadline(t time.Time) error
        SetWriteDeadline(t time.Time) error
}
{{< / highlight >}}

The `net.Conn`  is an interface because that way it is easy to test programs
that use a network for communication. You can mock this interface by dummy
implementation of its methods and test if your network protocol is working well.

You can get ready to use real implementation of `net.Conn` by using methods from
standard library:

- `net.Dial` - this method will return connection object which we can use to
    talk to remote server
- `net.Listener.Accept()` - this method will return connection
    which represents client connected to the server. Method `Accept()` is defined
    for `interface Listener` and how it works depends on the implementation
    of this interface.

## http.ResponseWriter \[[doc](https://golang.org/pkg/http/#ResponseWriter)\]
This interface is used most often when we are working with HTTP connections.
It is used to send data back to the client. It has simple implementation:

{{< highlight go >}}
type ResponseWriter interface {
        Header() Header
        Write([]byte) (int, error)
        WriteHeader(int)
}
{{< / highlight >}}

This methods have very simple semantics:

- `Header()` - it gives ability to set custom HTTP headers:
    {{< highlight go >}}
    func handler(w http.ResponseWriter, req *http.Request) {
        w.Header().Set("Content-Type", "text/plain")
    }
    {{< / highlight >}}
- `Write()` - sends response body do client
    {{< highlight go >}}
    func handler(w http.ResponseWriter, req *http.Request) {
        w.Write([]byte("Test"))
    }
    {{< / highlight >}}
- `WriteHeader()` - sets HTTP response status code (eg. 200 or 404)
    {{< highlight go >}}
    func handler(w http.ResponseWriter, req *http.Request) {
        w.WriteHeader(http.StatusOK)
    }
    {{< / highlight >}}

Interface `ResponseWriter` can be mocked using `httptest.ResonseRecorder`
struct which is an implementation of it. That way it is very easy to test
HTTP servers in Golang.

## image.Image \[[doc](https://golang.org/pkg/image/#Image)\]
This interface represents the read-only image. You can read color data at given
coordinate.

{{< highlight go >}}
type Image interface {
        ColorModel() color.Model
        Bounds() Rectangle
        At(x, y int) color.Color
}
{{< / highlight >}}

This interface is very simple and has three methods:

- `ColorModel()` - returns information about color space used by image (eg. RGBA)
- `Bounds()` - returns image dimension data
- `At()` returns color information at gived coordinate

## draw.Image \[[doc](https://golang.org/pkg/image/draw/#Image)\]
This interface represents the image that can be modified. It adds the new method to
`image.Image` interface.

{{< highlight go >}}
type Image interface {
        image.Image
        Set(x, y int, c color.Color)
}
{{< / highlight >}}

The `Set()` method can be used to modify color data at given coordinate.

## driver.Conn (SQL) \[[doc](https://golang.org/pkg/database/sql/driver/#Conn)\]
This interface is used for various SQL servers connection implementations.

{{< highlight go >}}
type Conn interface {
        Prepare(query string) (Stmt, error)
        Close() error
        Begin() (Tx, error)
}
{{< / highlight >}}

Most of the time you don't need to use this interface as it is created
for SQL drivers developers. Normal connection to SQL servers in
Golang will involve `sql.Open` function and `sql.BD` structure which
implements `driver.Conn` for given SQL server type (eq. Postgresql, MySQL).

## sort.Interface \[[doc](https://golang.org/pkg/sort/#Interface)\]
This interface is used to define the method of comparing data types.

{{< highlight go >}}
type Interface interface {
        Len() int
        Less(i, j int) bool
        Swap(i, j int)
}
{{< / highlight >}}

It has three methods:

- `Len()` - returns size of collection
- `Less()` - tells if one of the elements at given indices is smaller than other
- `Swap()` - used to swap elements at given indices in collection

If you want your collection to be sortable by standard Golang functions
you must create proper `sort.Interface` implementation for it.

## Conclusion
This post lists some of the most important interfaces in Golang.
Of course, this list is not complete because there are a lot more
interfaces in Go. The ones in this post are a good starting point and
will give you knowledge of what you are dealing with,
useful for most of the time.
