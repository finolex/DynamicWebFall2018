const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {triviaPost: null, error: null});
})

app.post('/', function (req, res) {
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