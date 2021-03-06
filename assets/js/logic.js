var qdisplay = document.getElementById("qdisplay");
var timeEl = document.querySelector(".timer");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var scoreCard = document.getElementById("scoreCard");
var userAnswerEl = document.getElementById("userAnswer");
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

var timeLeft = 50;
var index = 0;
var startButton = document.querySelector(".startbutton");
var questions = [
{q: "Who won the NBA Finals in 2020", a: "The Lakers", choices:["The Lakers", "The Timberwolves", "The Clippers", "The Suns"]},
{q: "What NBA player has the most made threes", a: "Ray Allen", choices:["Steph Curry", "Reggie Miller", "Steven Jackson", "Ray Allen"]},
{q: "What NBA player has the most blocks", a: "Hakeem Olajuwon", choices:["Michael Jordan", "Kobe Bryant", "Hakeem Olajuwon", "Scottie Pippen"]},
{q: "What NBA player has the most dunks", a: "Dwight Howard", choices:["Shaq", "Shawn Kemp", "Gary Payton", "Dwight Howard"]},
{q: "What NBA players has the most steals", a: "John Stockton", choices:["John Stockton", "Kevin Durant", "John Wall", "Jimmy Butler"]}
  
];
//  I referenced the SetTimer in the startButton addEventListener to connect start button to time

  

var timeInterval
// Created function for the countdown timer
function setTimer() {
   timeLeft = 50;
   clearInterval();
    
 timeInterval = setInterval(function() {
   
    timeLeft--;
    timeEl.textContent = timeLeft;
    if(timeLeft <= 0) {
        endGame()
     
    }
} ,1000); 
}


function quizquestions() {
    qdisplay.textContent = questions[index].q
    for (let i = 0; i < questions[index].choices.length; i++) {
        document.getElementById(i+1).textContent= questions[index].choices[i];
        
    }
}


startButton.addEventListener("click", function() {
    index = 0;
    quizquestions();
    setTimer();
    startButton.disabled = true
    button1.disabled = false
    button2.disabled = false
    button3.disabled = false
    button4.disabled = false
});

button1.addEventListener("click", verifyChoice)
button2.addEventListener("click", verifyChoice)
button3.addEventListener("click", verifyChoice)
button4.addEventListener("click", verifyChoice)

function verifyChoice(event)
 { 
     console.log(event.target.textContent);
    // verifyChoice needs to verify if the choice is wrong
    if (event.target.textContent == questions[index].a) {
        userAnswerEl.textContent = "YOUR CORRECT!!!"
        sfxRight.play();
    }

    else {
           timeLeft = timeLeft -5
           userAnswerEl.textContent = "YOUR WRONG!!!"
           sfxWrong.play();
    }

    userAnswerEl.setAttribute("class", "userAnswer");
    setTimeout(function() {
        userAnswerEl.setAttribute("class", "userAnswer hide")
    }, 1000);
        index++
        if (index >= questions.length) {
            endGame()
        } else {
            quizquestions()
        }
        


        
        
   
}

function endGame() {
    clearInterval(timeInterval);
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    button4.disabled = true

    scoreCard.style.display = "block"
}

var submit = document.getElementById("submit")

submit.addEventListener("click", submitFunction);


function submitFunction() {
    var initials = document.getElementById("initials").value
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.push({initials:initials, score:timeLeft})
    window.localStorage.setItem("highscores", JSON.stringify(highscores))
    window.location.href = "./highscores.html"

}