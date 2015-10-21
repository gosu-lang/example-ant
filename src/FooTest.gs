uses org.junit.Assert
uses org.junit.Test

class FooTest {

  @Test
  function fooTest() {
    var x = new Foo()
    Assert.assertNotNull(x)
    Assert.assertEquals("Hello World! 42", x.sayHi("!"))
    Assert.fail("Intentional failure to break build")
  }
  
}