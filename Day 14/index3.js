console.log('Booted');
const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port, listening);
const fs = require('fs');
const data = fs.readFileSync('words.json');
let words = JSON.parse(data);

function listening(){
	console.log('listening...')
}

function error(err){
	if (err) throw err;
	console.log('This file has been saved!');
}

app.get('/add/:saveWord', saveWord);

function saveWord(req, res){
	let word = req.params.saveWord;
	fs.writeFileSync('words.json', JSON.stringify(words[word] = word), error);
	res.send('Your word, ' + word + ' got saved! It worked!');
}

app.get('/viewFile', viewFile)

function viewFile(req, res){
	res.send(words)
}
