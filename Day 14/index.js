console.log("hello server");

const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port, listening);

function listening(){
	console.log('I\'m listening...');
}

app.use(express.static('public'));
app.get('/hello', sayHello);

function sayHello(req, res){
	res.send('Hello to you')
}

app.get('/hi/:database/:number', sayHi);

function sayHi(req, res){
	let data = req.params;
	totalHi = '';
	for (let i =  0; i < parseInt(data.number); i++){
		totalHi += 'Hi ' + data.database + ', how are you?' + '\n';
	}

	res.send(totalHi)
}