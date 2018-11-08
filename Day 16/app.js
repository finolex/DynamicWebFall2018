const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


let loginsData = fs.readFileSync('logins.json');
let logins = JSON.parse(loginsData);
console.log(logins);

//Code for the login page

app.get('/', function (req, res) {
  res.render('login');
})

app.post('/', function (req, res) {
  let user = req.body.user;
  let pass = req.body.pass;
  let proceed = false;

  if(user != ''){
  	if(pass != ''){
  		if (user == logins[String(user)]){
	  	res.send("This username already exists. Please refresh page and try again");
	 	} else {
  		logins[user] = {"user": user, "pass": pass}

		  fs.writeFileSync('logins.json', JSON.stringify(logins, null, 2), function(err){
		  	if (err) throw err;
		  	console.log("Saved Login!");
		  });

		  res.redirect('/app');
  		}
  	} else {res.send('Type in a password. Please refresh page and try again')}
  } else {res.send('Type in a username. Please refresh page and try again')}
})



//Code for the app itself

app.get('/app', function (req, res) {
  res.render('index', {triviaPost: null, error: null});
})

app.post('/app', function (req, res) {
  let number = req.body.number;
  let url = `http://numbersapi.com/${number}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {triviaPost: null, error: 'Error, please try again'});
    } else {
      let trivia = body;
      if(trivia == undefined){
        res.render('index', {triviaPost: null, error: 'Error, please try again'});
      } else {
        res.render('index', {triviaPost: trivia, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})