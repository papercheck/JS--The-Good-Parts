// chapter_4_constructor.js

// Create a constructor function called Quo.
// It makes an object with a status property.

var Quo = function (string) {
    this.status = string;
}

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function () {
    return this.status;
}

// Make an instance of Quo.break
 var myQuo = new Quo("confused");

document.writeln(myQuo.get_status()); // Confused