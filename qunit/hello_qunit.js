var greeting = new Greeting();
var fizzbuzz = new FizzBuzz();

QUnit.test( 'JavaScript QUnit Tests', function( assert ) {
  assert.equal( greeting.hello('Mike'), 'Hello, Mike' );
  assert.equal( greeting.hello('Janet'), 'Hello, Janet' );
  assert.notEqual( greeting.hello('David'), 'Hi, David' );
});

QUnit.test("hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!");
});

QUnit.test("return number", function( assert ) {
  assert.ok(fizzbuzz.speak(1) === "1", "speak 1");
  assert.ok(fizzbuzz.speak(2) === "2", "speak 2");
});

QUnit.test("3の倍数でFizzを返す", function( assert ) {
  assert.ok(fizzbuzz.speak(3) === "Fizz", "speak Fizz by 3");
  assert.ok(fizzbuzz.speak(6) === "Fizz", "speak Fizz by 6");
  assert.notEqual(fizzbuzz.speak(15) === "Fizz", "speak Fizz by 15");
})
