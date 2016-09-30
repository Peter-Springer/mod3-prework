function foo() {
  var bar;
  quux = "shadowing"
  function zip() {
    var quux = "inner"
    bar = true;
  }
  return zip;
}
