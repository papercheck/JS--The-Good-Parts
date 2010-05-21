// augmenting_types.js

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

// On Page 33, this is represented by Math[this < 0 ? 'ceiling' : 'floor'](this);
// which is wrong..

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln((-10 / 3).integer()); //3
document.writeln((-10 / 3)); //3

// Trim function that is missing in JavaScript, can be created
// using regular expressions. Visit this more in Chapter 7.

String.method('trim', function() {
   return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"' + "   neat     ".trim() + '"');

// Add a method conditionally.

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
}