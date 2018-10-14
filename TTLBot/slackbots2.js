var SlackBot = require('slackbots');
var tokens = require('./tokens');
require('es6-promise').polyfill();
require('isomorphic-fetch');

var searchTerm;
var personToQuery;
var token1 = tokens.APIToken;
var token2 = tokens.botToken;

let totalLLs;

var bot = new SlackBot({
    token: token2, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'TTLBotTest'
});

bot.on('start', function() {
    var params = {
        icon_emoji: ':cat:'
    };
});

bot.on('error', (err) => console.log(err));

bot.on('message', function(data){
    if(data.type !== 'message'){
        return;
    }

    var inputCommand = data.text.split(' ');

    if (inputCommand[1] == 'search'){

        if (inputCommand[3] == 'll'){
            searchTerm = '%23ll'
        } 
        if (inputCommand[3] == 'ttl'){
            searchTerm = '%23ttl'
        } 

        personToQuery = inputCommand[2];

        let slackAPI = "https://slack.com/api/search.messages?token=" + token1 + "&query=" + searchTerm + "&pretty=1"

        console.log(searchTerm, personToQuery, slackAPI);

        fetch(slackAPI)

            .then(function(response){
                return response.json();
            })

            .then(function(data){
                var counter = 0;
                for (var i = 0; i < data.messages.matches.length; i++){
                    if(data.messages.matches[i].username == personToQuery){
                        counter += 1;
                    }
                }

                totalLLs = personToQuery + " has a total of " + counter + ' messages with the required query';

                return totalLLs;
            })

            .then(function(totalLLs){
                var params = {
                    icon_emoji: ':cat:'
                };
                
                bot.postMessageToChannel('general', totalLLs, params);
            })

            .catch(function(error){
                console.log(error);
            });
    }
})



