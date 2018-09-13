// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

function Book(title,author,alreadyread) {
  this.aTitle = title;
  this.aAuthor = author;
  this.alreadeyRead = alreadyread;
  this.print = function(){
    return (this.aTitle + " written by " + this.aAuthor)
  }
  this.checkRead = function() {
    if (this.alreadeyRead === true) {console.log("You already read " + this.print())}
    else { 
      console.log("You still need to read " + this.print());
      }
  }
}

var bookArray = [];
bookArray.push(new Book("Harry Potter","J.K. Rowling",true));
bookArray.push(new Book("Game of Thrones","R.R. Martin",false));

for (var i =0; i< bookArray.length; i++) {
  console.log(bookArray[i].print());
  bookArray[i].checkRead();
}
