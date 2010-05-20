// chapter_4.js

// Create a variable called add and store a function
// in it that adds two numbers
var add = function (a, b) {
	return a + b;
};
var a = 4;
var b = 2;

document.writeln(add(a, b) * 4);

// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number then 1
// is used as the default.

var myObject = { 
	value: 0,	
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};
// Augment myObject with a double method.

myObject.double = function() {
	var that = this; // Workaround.
	
	var helper = function() {
		that.value = add(that.value, that.value);
	};
	
	helper(); // Invoke the helper as a function.
};


myObject.increment();
document.writeln(myObject.value);   // 1

myObject.increment(2);
document.writeln(myObject.value);   // 3

var sum = add(3, 4);
document.writeln(sum);


// Invoke double as a method.

myObject.double();
document.writeln(myObject.value); // 6