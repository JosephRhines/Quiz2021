var timeEl = document.querySelector(".timer")
var button1 = document.getElementById("1")
var button2 = document.getElementById("2")
var button3 = document.getElementById("3")
var button4 = document.getElementById("4")
var score = 0;
var timeLeft = 50;
var startButton = document.querySelector(".startbutton")
var questions = [
{q: "Who won the NBA Finals in 2020", a: "The Lakers", choices:["The Lakers", "The Timberwolves", "The Clippers", "The Suns"]},
{q: "What NBA player has the most made threes", a: "Ray Allen", choices:["Steph Curry", "Reggie Miller", "Steven Jackson", "Ray Allen"]},
{q: "What NBA player has the most blocks", a: "Hakeem Olajuwon", choices:["Michael Jordan", "Kobe Bryant", "Hakeem Olajuwon", "Scottie Pippen"]},
{q: "What NBA player has the most dunks", a: "Dwight Howard", choices:["Shaq", "Shawn Kemp", "Gary Payton", "Dwight Howard"]},
{q: "What NBA players has the most steals", a: "John Stockton", choices:["John Stockton", "Kevin Durant", "John Wall", "Jimmy Butler"]}
  
];
//  I referenced the SetTimer in the startButton addEventListener to connect start button to time
startButton.addEventListener("click", setTimer)
  


// Created function for the countdown timer
function setTimer() {
   
    
var timeInterval = setInterval(function() {
    console.log(timeLeft)
    timeLeft--;
    timeEl.textContent = timeLeft;
    if(timeLeft === 0) {
     clearInterval(timeInterval);
    }
} ,1000); 
}

function quizquestions() {
    
}







