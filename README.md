# example-ant
Example usage of the 'gosuc' task for ant; ivy setup is included for dependency resolution

## Build configuration
Most of the build.xml is related to ivy setup.  The `gosuc` task has the following parameters:
  * `srcdir` the source directory
  * `destdir` the destination directory
  * `checkedarithmetic` switch to enable compilation with checked arithmetic
  * `failonerror` switch to ignore compile errors and continue with the build

## Usage/Outcome
Executing `$ ant test` should produce the following output:
```
...
compile:
    [mkdir] Created dir: /home/user/gosu-lang/example-ant/build
    [gosuc] Initializing Gosu compiler...
    [gosuc] Gosu compilation completed with 1 warning:
    [gosuc] [WARNING] /home/user/gosu-lang/example-ant/src/Foo.gs:[8,27] warning: Primitive type int is not allowed here. Type int is implicitly transformed to java.lang.Integer as a type parameter, please use java.lang.Integer directly.

test:
    [mkdir] Created dir: /home/user/gosu-lang/example-ant/reports
    [junit] Running FooTest
    [junit] Made a Foo using default constructor.
    [junit] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.402 sec

BUILD SUCCESSFUL
```

`build.log` and `test.log` files are available to more detailed analysis. 