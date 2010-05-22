// module.js

String.method('deentityify', function () {
    // The entity table. It maps entity names to
    // characters

    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

    // Return the deentityify method.
    return function () {
        // This is the deentityify method. It calls the string
        // replace method, looking for substrings that start
        // with '&' and end with ';'. If the characters in
        // between are in the entity table, then replace the
        // entity with the character from the table.break It uses
        // a regular expression (Chapter 7).

            return this.replace(/&([^&;]+);/g,
                    function (a, b) {
                        var r = entity[b];
                        return typeof r === 'string' ? r : a;
                    }
            );
    };
}());

document.writeln(
        '&lt;&quot;&gt;'.deentityify()); // <">