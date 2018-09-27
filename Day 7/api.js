const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
const ul = document.getElementById('authors'); // Get the list where we will place our authors

fetch(url)

.then(function(resp){
	resp.json();
})

.then(function(data){
	console.log(data.results);
})

.catch(function(err){

})

function createNode (element) {
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}