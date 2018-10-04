var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 10 }, function(err, data, response) {
//   console.log(data)
// })

function tweets(){
	var costume = ["ghost", "the nun", "witch", "pumpking", "vampire"];
	var quote = 'This is a bot that posts suggestions for halloween costumes. You should be a ' + costume[Math.floor(Math.random() * costume.length)];

	var tweet = {
		status: quote	
	}

	return tweet;
}


function didItTweet(err, data, response) {
	if (err){
		console.log(err + "it didn't work");
	} else {
		console.log('Worked!');
	}
}

T.post('statuses/update', tweets(), didItTweet());



