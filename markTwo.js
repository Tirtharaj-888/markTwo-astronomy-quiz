var rls = require('readline-sync');
var userName = rls.question("Hi! What's Your name? ");
console.log("**** Welcome " + userName + " to the Astronomy Quiz ****");

var q1 = {
  question: "Which galaxy do we live in? ",
  answer: "Milky Way"
}
var q2 = {
  question: "Which galaxy is the nearest to us? ",
  answer: "Andromeda"
}
var q3 = {
  question: "Which is the nearest planet to our Earth? ",
  answer: "Venus"
}
var q4 = {
  question: "Which planet has maximum moons? ",
  answer: "Saturn"
}
var q5 = {
  question: "Which is the farthest planet from the Sun? ",
  answer: "Neptune"
}

var arrayQuesAns = [q1, q2, q3, q4, q5];
var userScore = 0;
var leaderBoard = [{ name: "Rituraj", score: 5 }, { name: "Mammam", score: 3 }, { name: "Baba", score: 1 }
]

for (i = 0; i < arrayQuesAns.length; i++) {
  var userAns = rls.question(arrayQuesAns[i].question);
  if (userAns === arrayQuesAns[i].answer) {
    console.log('Great!');
    userScore = userScore + 1;
    console.log('Your score: ', userScore);
    console.log("\n");
  }
  else {
    console.log('Oops!');
    userScore = userScore - 1;
    console.log('Your score: ', userScore);
    console.log("\n");
  }
}

console.log("You scored: ", userScore, '\n');
console.log("**** Here is the leaderboard ****");
for (i = 0; i < leaderBoard.length; i++) {
  console.log(leaderBoard[i].name, " : ", leaderBoard[i].score);
}
