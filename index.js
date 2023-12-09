let questionArray = [

    {
        question: "Advent betyder högtidlighet?",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },

    {
        question: "Julskinkan är den viktigaste rätten på julbordet enligt svenskar?",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 0
    },



    {
        question: "Traditionen med att ta in en gran och pynta den juligt kommer från Sverige?",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },



    {
        question: "Second hand är årets julklapp?",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },

    {
        quesztion: "Pomeranskal är vanligt förekommande i en traditionell glögg?",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 0
    },


    {
        question: "Julstjärnan i fönstret symboliserar polstjärnan",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },

    {
        question: "Jultomten brukade ha grön klädsel innan den populära Coca-Cola-annonsen på 1930-talet introducerade honom i rött.",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 0
    },

    {
        question: "På jul firar vi jesus uppståndelse",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },


    {
        question: "Comet,Fenix, och Rudolf är tre av Tomtens alla renar",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },

    {
        question: "Enligt hednisk tradition är det otur att fira något på månadens 25:e dag och därför är Norden de enda som firar jul den 24 dec och inte 25 dec",
        options: [
            "Sant",
            "Falskt"
        ],
        correctAnswer: 1
    },

];

let questionDiv = document.getElementById("question");
let optionsDiv = document.getElementById("options");
let nextQuestionBtn = document.getElementById("nextQuestion");
let startQuizBtn = document.getElementById("startQuiz");

let currentQuestion = 0


function startQuiz() {
    startQuizBtn.addEventListener("click", (event) => {
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("startPage").style.display = "none";

    })




}

startQuiz();




