var SlackBot = require('slackbots');
var tokens = require('./tokens');
require('es6-promise').polyfill();
require('isomorphic-fetch');

var searchTerm = '%23ll';
var personToQuery = 'ac5847';
var token1 = tokens.APIToken;
var token2 = tokens.botToken;

const slackAPI = "https://slack.com/api/search.messages?token=" + token1 + "&query=" + searchTerm + "&pretty=1"

let totalLLs;

fetch(slackAPI)
    .then(function(response){
        return response.json()
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

         // create a bot
        var bot = new SlackBot({
            token: token2, // Add a bot https://my.slack.com/services/new/bot and put the token 
            name: 'TTLBotTest'
        });

        bot.on('start', function() {
        // more information about additional params https://api.slack.com/methods/chat.postMessage
            var params = {
                icon_emoji: ':cat:'
            };
            
            // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
            bot.postMessageToChannel('general', totalLLs, params);
        });

        bot.on('error', (err) => console.log(err));
    })

    .catch(function(error){
        console.log(error);
    });






