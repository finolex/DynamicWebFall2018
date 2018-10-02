var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

console.log('hi')

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 10 }, function(err, data, response) {
//   console.log(data)
// })