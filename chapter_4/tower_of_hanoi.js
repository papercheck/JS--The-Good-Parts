// tower_of_hanoi.js

var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc -1, src, dst, aux);
        document.writeln('Move disc ' + disc +
                ' from ' + src + ' to ' + dst);
        hanoi(disc -1, aux, src, dst);
    }
};

hanoi(3, 'Src', 'Aux', 'Dst');

// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node in turn. walk_the_DOM calls
// itself to process each of the child nodes.break

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};


// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
                (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
};

// The above function walk_the_DOM does not produce anything.

// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the results of calling itself.

// JavaScript does not currently optimize this form.

var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};

document.writeln(factorial(4)); //24


var test_if = function(a) {
    if (a < 101) {
        return true;
    }
    return false;
};

// The following function is short hand for the above function.

var test_if_short = function(a) {
    return (a < 101);
};

document.writeln(test_if(101));
document.writeln(test_if_short(101));