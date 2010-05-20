// object_lit.js

var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard",
	"middle-name": "F."
};

document.writeln(stooge["first-name"] + ' ' + stooge["last-name"]);

var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};

document.writeln(flight.departure.IATA);
document.writeln(flight.status);

stooge["middle-name"] = "(none)";

document.writeln(stooge["first-name"] + ' ' + stooge["middle-name"] + ' ' + stooge["last-name"]);

stooge['first-name'] = 'Jo';
	
document.writeln(stooge["first-name"] + ' ' + stooge["middle-name"] + ' ' + stooge["last-name"]);

stooge.nickname = 'Curly';

document.writeln(stooge.nickname);

flight.equipment = {
	model: 'Boeing 777'
};

flight.status = 'overdue';

document.writeln(flight.equipment.model);
document.writeln(flight.status);

var x = stooge;
document.writeln(x.nickname);
var nick = stooge.nickname

document.writeln(nick);

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
		};
	}
var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';	
another_stooge.nickname = 'Moe';

document.writeln(another_stooge["first-name"] + ' ' + another_stooge["middle-name"] + ' ' + another_stooge["last-name"] );
document.writeln(another_stooge.nickname);	
	
stooge.profession = 'actor';	
//another_stooge.profession = 'actor';

document.writeln(stooge.profession);	
document.writeln(another_stooge.profession);	
document.write('<hr>');
document.writeln(typeof flight.number);
document.writeln(typeof flight.status);
document.writeln(typeof flight.arrival);
document.writeln(typeof flight.manifest);
document.write('<hr>');
var name;
for (name in another_stooge) {
	if (typeof another_stooge[name] !== 'function') {
		document.writeln(name + ': ' + another_stooge[name]);
	}
}
document.write('<hr>');
var i;
var properties = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];
for (i = 0; i < properties.length; i += 1) {
	document.writeln(properties[i] + ': ' +
		another_stooge[properties[i]]);
	}
document.write('<hr>');
document.writeln(another_stooge.nickname);
delete another_stooge.nickname;
document.writeln(another_stooge.nickname);
	