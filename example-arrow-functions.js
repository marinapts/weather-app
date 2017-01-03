// var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Marina'));

// var person = {
// 	name: 'Marina',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name);
// 		})		
// 	}
// }

// person.greet();

// CHallenge area

function add (a, b) {
	return a + b;
}

// console.log(add(1, 3));
// console.log(add(9, 0));

var addStatement = (a, b) => {
	console.log(a + b);
}

var addExpression = (a, b) => console.log(a + b);

addStatement(2,3);
addExpression(4,6);