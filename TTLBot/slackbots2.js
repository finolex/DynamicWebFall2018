//create and import all the necessary modules
//slackbot module for interacting with Slack
//tokens is a separate file that contains all the API tokens
//create two variables, searchTerm and personToQuery for use later
//create totalLLs for use later

var SlackBot = require('slackbots');
var tokens = require('./tokens');
require('es6-promise').polyfill();
require('isomorphic-fetch');

var searchTerm;
var personToQuery;
var token1 = tokens.APIToken;
var token2 = tokens.botToken;

let totalLLs;

//summon bot
//needs the bot API key, and a name

var bot = new SlackBot({
    token: token2, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'TTLBotTest'
});

//sets params upon initiating bot
//params refers to the emoji that the bot posts with

bot.on('start', function() {
    var params = {
        icon_emoji: ':cat:'
    };
});

//if there's an error upon initiating bot, publish to console.log

bot.on('error', (err) => console.log(err));


//if someone calls the bot, handle the data in a certain way

bot.on('message', function(data){

    //if someone calls the bot but doesn't have a message after, ignore
    if(data.type !== 'message'){
        return;
    }

    //if there is a message, take the message, split it into an array word-by-word
    var inputCommand = data.text.split(' ');

    //if the user asks the bot to search
    if (inputCommand[1] == 'search'){

        //and the search term is either ll or ttl, add the %23 infront as that's the equivalent of a #
        if (inputCommand[3] == 'll'){
            searchTerm = '%23ll'
        } 
        if (inputCommand[3] == 'ttl'){
            searchTerm = '%23ttl'
        } 

        //also assign the username in the message to bot to personToQuery variable
        //the username is the email username user to sign up for the slack workspace
        //for example, my email is ac5837@nyu.edu and my username is ac5847
        personToQuery = inputCommand[2];

        //use the slackAPI URL, and put in the API token and the term to query
        let slackAPI = "https://slack.com/api/search.messages?token=" + token1 + "&query=" + searchTerm + "&pretty=1"

        //AJAX -> fetch the data from slack's searchMessage API

        fetch(slackAPI)

            .then(function(response){
                //upon getting the data, convert to JSON
                return response.json();
            })

            .then(function(data){
                //create a counter to count the total number of messages the personToQuery has, in the returned JSON object                var counter = 0;
                var counter = 0;

                for (var i = 0; i < data.messages.matches.length; i++){
                    if(data.messages.matches[i].username == personToQuery){
                        //if personToQuery matches the username in the individual JSON parts, increase counter by 1
                        counter += 1;
                    }
                }

                //create a string to return and later push to back to Slack
                totalLLs = personToQuery + " has a total of " + counter + ' messages with the required query';

                return totalLLs;
            })

            .then(function(totalLLs){
                //this doesn't have to be AJAX, but is nice to have as a function after the previous promise
                var params = {
                    icon_emoji: ':cat:'
                };

                //pushes to general channel, the string we created before, with the cat emoji icon
                
                bot.postMessageToChannel('general', totalLLs, params);
            })

            .catch(function(error){
                //console.log any errors that might occur in the entire AJAX process
                console.log(error);
            });
    }
})



