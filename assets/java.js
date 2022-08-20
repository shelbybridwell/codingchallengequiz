
//references
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestions = document.querySelector("number-of-questions");
let displayContainer = document.getElementById("display-container");
let scorContainer = document.querySelector("score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector("start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [{id: "0", questions:"Question One: " , options:["A","B","C"], correct: "C" },
{id: "1", questions:"Question Two: ",options:["A","B","C"], correct:"C"},
{id: "2", questions:"Question Three",options:["A","B","C"], correct:"C"},
{id: "3", questions:"Question Four: ",options:["A","B","C"], correct:"C"},
{id: "4", questions:"Question Five: ",options:["A","B","C"], correct:"C"},
];
//Restart game
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scorContainer.classList.add("hide";)
});

//next button
nextBtn.addEventListener("click", (displayNext = () =>
   {
    // increment 
    questionCount += 1;

    if(questionCount == quizArray.length){
//hide question and display score
        displayContainer.classList.add("hide");
        scorContainer.classList.remove("hide");
//user score
        userScore.innerHTML = "Your Score : " + scoreCount + "out of  + questionCount;
         } else {
//display count
            countOfQuestions.innerHTML =
                questionCount + 1 + " of " + quizArray.length + "Question";
//display quiz         
                quizDisplay(questionCount);
                count = 11;
                clearInterval(countdown);
                timerDisplay();
         }
  
}));

//timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '${count}s';
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }

    }, 1000);
};
//Display Quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll("container_mid");
    //hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
//display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator(){
    //randomizes questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for(let i of quizArray) {
      i.options.sort(() => Math.random() -0.5);
    //quiz card creation
    let div =document.createElement("div");
    div.classList.add("container_mid", "hide");
    //question number
    couuntOfQuestions.innerHTML = 1+ " of "+ quizArray.length + " Question ";
    //question
    let question_Div = document.createElement("p");
    question_Div.classList.add("question");
    question_Div.innerHTML = i.questions;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += ``
    <button class = "options-div" onclick ="checker(this)
    ">${i.options[0]}</button> 
    <button class = "options-div" onclick ="checker(this)
    ">${i.options[1]}</button>
    <button class = "options-div" onclick="checker(this)
    ">${i.options[2]}</button>
    <button class = "options-div" onclick="checker(this)
    ">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
    }
}
//checher function to check if option is correct
function checker(userOption){
    let userSolution =userOption.innerText;
    let question = document.getElementsByClassName("container_mid")
    [questionCount];
    let options = question.querySelectorAll("option-div");
// if user clicked correct answer stored
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if(element.innerHTML == quizArray[questionCount].correct){
                element.classList.add("correct");
            }
        });
    }
// clear interval countdown
clearInterval(countdown);
//disable options
options.forEach((element) => {
    element.disabled =true;
 });
}




//initial setup 
function initial(){
    quizArray.innerHTML = "";
    questionCount = 0,
    scoreCount = 0,
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizContainer(questionCount);
}

//when star button is clicked
startButton.addEventListener("click", () =>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
})
//hide quiz and display start screen 
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};