// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Philadelphia', function (err, temp) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }

// getTempPromise('Edinburgh').then(function (temp) {
// 	console.log('promise success');
// }, function (err) {
// 	console.log('promise err', err);
// });

// Challenge area

function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		}
		else {
			reject('Not a number');
		}
	});
}

addPromise(3, 2).then(function (sum) {
	console.log('success', sum);
}, function (err) {
	console.log('error', err);
});

addPromise(3, "2").then(function (number) {
	console.log('Shouldn\'t appear', number);
}, function (err) {
	console.log('Should apper', err);
});