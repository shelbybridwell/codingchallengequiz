

const quizDisplay = document.getElementById("display-container");
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

const quizArray = [{id: "0", questions: "Question One: ", "Question Two: ","Question Three"; options["A","B","C"], correct: "C" } ,
{id: "1", questions: "Question One: ", "Question Two: ","Question Three"; options["A","B","C"], correct: "C" },
{id: "2", questions: "Question One: ", "Question Two: ","Question Three"; options["A","B","C"], correct: "C" },
{id: "3", questions:  "Question One: ", "Question Two: ","Question Three"; options["A","B","C"], correct: "C" },
{id: "4", questions: "Question One: ", "Question Two: ","Question Three"; options["A","B","C"], correct: "C" },
{id: "5", questions: "Question One: ", "Question Two: ","Question Three"; options["A","B","C"], correct: "C" },];

//Quiz
function quizCreator(){
    //randomizes questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for(let i of quizArray) {
      i.options.sort(() => Math.random() -0.5);
    //quiz card creation
    let div =document.createElement("div");
    div.classList.add("container-mid");
    //question number
    couuntOfQuestions.innerHTML = 1+ "of"+ quizArray.length + "Question";
    //question
    let question_Div = document.createElement("p");
    question_Div.classList.add("question");
    question_Div.innerHTML = i.questions;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += '
    <button class="options-div" onclick="checker(this)">${i.options[0]}</button>
    <button class="options-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="options-div" onclick="checker(this)">${i.options[2]}</button>
    ';
    
    }
}