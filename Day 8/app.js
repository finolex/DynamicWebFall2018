var difference = require('./setDifference.js');

var intersection = require('./setIntersection.js');

var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];

var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

//should print an array with cats, red, bananas, movies, blue, rain as elements
console.log(difference.setDifference(set1, set2));

//should print an array with dogs and code as elements
console.log(intersection.setIntersection(set1, set2));