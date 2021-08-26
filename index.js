
//console.log("Quizz about Iron man!");
console.log("---#---#---#---");

// declaring data
var chalk = require("chalk");
const red = chalk.red;
const green = chalk.green;
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
console.log("---#---#---#---");
console.log("Welcome "+ userName + " to Iron man quizz!");
console.log("---#---#---#---");
}
// play function
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(green("right!"));
    score = score + 1;
  } else if(answer.toUpperCase().includes(userAnswer.toUpperCase())){ 
    // check for word
    console.log(green("right!"));
    score = score + 1;
  } else {
    console.log(red("Wrong answer!"));
   
  }

  console.log("current score: ", score);
  console.log("---#---#---#---");
}

// game function
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// score function
function showScores() {
  console.log("You SCORED: ", score);

}

// calling functions

welcome();
game();
showScores();