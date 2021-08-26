
//console.log("Quizz about Iron man!");
console.log("---#---#---#---");

// declaring data

var readLineSync = require('readline-sync');

var score = 0;

var questions = [
  {
    question: "What is Ironman's first name? ",
    answer: "Tony"
  }, 
  {
    question: "What is Ironman's best friends first name? ",
    answer: "James"
  },
  {
    question: "What is Ironman's wife name? ",
    answer: "Pepper"
  },
  {
    question: "In which movie Ironman died? ",
    answer: "Avengers endgame"
  }
];
// welcome function
function welcome() {
userName = readLineSync.question("Hi, What's your name? ");

console.log("Welcome "+ userName + " to Iron man quizz!");
}

// calling functions
welcome();