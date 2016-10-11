var Greeting = function() {
  this.hello = function(name) {
    return 'Hello, ' + name;
  };
};

var FizzBuzz = function() {
	this.speak = function(n) {
		if(n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
		if(n % 3 === 0) return "Fizz";
		if(n % 5 === 0) return "Buzz";
		return n.toString();
	};
};
