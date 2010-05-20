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

String.method('trim', function() {
   //return this.replace(/^\s+|\s+$/g, '');
   return this.replace(' ', '');
});

document.writeln('"' + "   neat     ".trim() + '"');