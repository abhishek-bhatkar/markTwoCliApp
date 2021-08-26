
//console.log("Quizz about Iron man!");
console.log("---#---#---#---");

// declaring data

var readLineSync = require('readline-sync');

// welcome function
function welcome() {
userName = readLineSync.question("Hi, What's your name? ");

console.log("Welcome "+ userName + " to Iron man quizz!");
}

// calling functions
welcome();