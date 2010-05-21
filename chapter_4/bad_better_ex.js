// bad_better_ex.js

// BAD EXAMPLE

// Make a function that assigns event handler functions to an array
// of nodes the wrong way.
// When you click on a node, an alert box is supposed to display
// the ordinal of the node.
// But it always displays the number of nodes instead.

var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            window.alert(i);
        };
    }
};

// END BAD EXAMPLE

// BETTER EXAMPLE

// Make a function that assigns event handler functions to an array of nodes the
// right way.
// When you click on a node, an alert box will display the ordinal of the
// node.

var add_the_handler = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = (function (i) {
            return function (e) {
                window.alert(i);
            };
        }(i));
    };
    
};
// END BETTER EXAMPLE