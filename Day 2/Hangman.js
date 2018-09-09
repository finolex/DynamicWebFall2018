wordArray = ['f', 'o', 'x', 'o'];
guessedArray = [];
lettersUsed = [];
var life = 6;

for(var i = 0; i< wordArray.length; i++){
  guessedArray.push('_');
}

function guessLetter(newGuess){
  var proceed = true;
  
  for(var k = 0; k < lettersUsed.length; k++) {
    if (newGuess == lettersUsed[k]){
      proceed = false;
    } 
  }

  //check if the letter has been used before, and only proceed if it hasn't
  if (proceed == false){
    console.log('You\'ve guessed this letter before, try something else.');
    console.log('');
  } else if (proceed == true){
    if (life != 1){
      //update lettersUsed with newGuess
      lettersUsed.push(newGuess);

      //create a placeholder to test against the entire list for checking later
      placeholderArray = guessedArray.slice();

      //if the guessed letter isn't empty, check if it exists in the original word, and then update it in the guessedArray
      if (newGuess != null) {
        for(var i = 0; i< wordArray.length; i++){
          if (wordArray[i] == newGuess){
            guessedArray[i] = newGuess;
          };
        }
      }

      //check against placeholder if updates have been made, and give remark to the user accordingly
      if (JSON.stringify(guessedArray) === JSON.stringify(placeholderArray)){
        console.log('You guessed a wrong letter.');
        life -= 1;
      } else {
        console.log('You guessed a correct letter!')
      }

      //check if user finished guessing
      if (JSON.stringify(guessedArray) === JSON.stringify(wordArray)){
        console.log('You finished!');
      } else {
        console.log('Keep going :)')
      }

      //print to user updates at the end of every guess
      console.log("This is where you're at", guessedArray, "and you've ", life, 'lives left. These are the letters you\'ve guessed before ', lettersUsed);
      console.log('');

      if(life == 6){
        console.log("    0000000000000");
        console.log("0           0");
        console.log("0    ");
        console.log("0    ");
        console.log("0  ");
        console.log("0   ");
        console.log("0   ");
        console.log("0  ");
        console.log("0  ");
        console.log("0  ");
        console.log("0 ");
        console.log("0  ");
        console.log("0");
        console.log("0");
        console.log("0");
      } else if (life == 5){
        console.log("    0000000000000");
        console.log("0           0");
        console.log("0           1");
        console.log("0          1 1");
        console.log("0           1");
        console.log("0  ");
        console.log("0     ");
        console.log("0      ");
        console.log("0    ");
        console.log("0     ");
        console.log("0  ");
        console.log("0");
        console.log("0");
        console.log("0");
        console.log("0");
      } else if(life == 4){
        console.log("    0000000000000");
        console.log("0           0");
        console.log("0           1");
        console.log("0          1 1");
        console.log("0           1");
        console.log("0           2");
        console.log("0           2 ");
        console.log("0           2  ");
        console.log("0        ");
        console.log("0     ");
        console.log("0        ");
        console.log("0    ");
        console.log("0");
        console.log("0");
        console.log("0");
      } else if (life == 3){
      console.log("    0000000000000");
      console.log("0           0");
      console.log("0           1");
      console.log("0          1 1");
      console.log("0           1");
      console.log("0          32");
      console.log("0         3 2 3");
      console.log("0        3  2  3");
      console.log("0     ");
      console.log("0        ");
      console.log("0     ");
      console.log("0      ");
      console.log("0");
      console.log("0");
      console.log("0");
      } else if (life == 2){
          console.log("    0000000000000");
      console.log("0           0");
      console.log("0           1");
      console.log("0          1 1");
      console.log("0           1");
      console.log("0          324");
      console.log("0         3 2 3");
      console.log("0        3  2  3");
      console.log("0          4 ");
      console.log("0         4   ");
      console.log("0        4     ");
      console.log("0       4       ");
      console.log("0");
      console.log("0");
      console.log("0");
      }

    } else {
      console.log("You've no more lives left.");
      console.log("    0000000000000");
      console.log("0           0");
      console.log("0           1");
      console.log("0          1 1");
      console.log("0           1");
      console.log("0          324");
      console.log("0         3 2 4");
      console.log("0        3  2  4");
      console.log("0          4 5");
      console.log("0         4   5");
      console.log("0        4     5");
      console.log("0       4       5");
      console.log("0");
      console.log("0");
      console.log("0");
    }
  }
}

guessLetter('f');

guessLetter('f');

guessLetter('l');

guessLetter('a');

guessLetter('b');

guessLetter('c');

guessLetter('o');

guessLetter('j');

guessLetter('k');