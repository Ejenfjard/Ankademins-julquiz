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
        question: "Pomeranskal är vanligt förekommande i en traditionell glögg?",
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

document.addEventListener("DOMContentLoaded", function () {

    let nextQuestionBtn = document.getElementById("nextQuestion");
    let startQuizBtn = document.getElementById("startQuiz");
    let submitBtn = document.getElementById("submit");
    let resultDiv = document.getElementById("result");
    let quizDiv = document.getElementById("quiz-container");
    let startPage = document.getElementById("startPage");
    let feedbackString = document.getElementById("feedback");
    let currentQuestion = 0
    let userScore = 0;

    startQuizBtn.addEventListener("click", startQuiz);


    function startQuiz() {
        // Tar bort startPage och ersätter det med Quizet samt kör funktionen 
        // showQuestion
        quizDiv.style.display = "block";
        startPage.style.display = "none";

        showQuestion();
    }


    function showQuestion() {
        let questionDiv = document.getElementById("question");
        let optionsDiv = document.getElementById("options");
        //Deklarera och definera feedback samt nollställ efter varje fråga 

        feedbackString.innerHTML = "";

        // Visa aktuell fråga från arrayen 
        questionDiv.innerHTML = questionArray[currentQuestion].question;

        // Ta bort tidigare alternativ
        optionsDiv.innerHTML = "";

        //Skapar ett element där svarsalterativen visas
        let btnDiv = document.createElement("div");
        btnDiv.id = "btnOptionContainer";

        questionArray[currentQuestion].options.forEach((option, index) => {
            let btnOption = document.createElement("button");
            btnOption.textContent = option;
            btnOption.classList.add("option");
            btnOption.addEventListener("click", () => selectOption(index));
            btnDiv.appendChild(btnOption);
        });

        optionsDiv.appendChild(btnDiv);

    }

    function selectOption(selectedIndex) {
        let correctAnswerIndex = questionArray[currentQuestion].correctAnswer;


        if (selectedIndex === correctAnswerIndex) {

            feedbackString.innerHTML = "Rätt svar!";
            userScore++;

        } else {
            feedbackString.innerHTML = "Fel svar!";
        }
    }

    nextQuestionBtn.addEventListener("click", () => {
        //logik för att gå vidare till nästa fråga 
        currentQuestion++;

        if (currentQuestion < questionArray.length) {
            showQuestion();  // Om alla frågor inte besvarats så körs funk. showquestion och användaren klickas vidare till nästa obesvarade fråga 
            feedbackString.innerHTML = ""; //Föregående fråga feedback raderas. 
        }

        else {
            submitBtn.style.display = "block";
            nextQuestionBtn.style.display = "none";
        }

    });

    submitBtn.addEventListener("click", () => {
        //Logik som körs då användaren trycker på "Se resultat"
        resultDiv.style.display = "block";
        quizDiv.style.display = "none";


        // Lägga till en if else sats som tar in logiken där quizet ger tillbaka information om 
        // hur många rätt användaren fått och färg på text ska visas utifrån vilken poäng användaren fått. 

    });

})











// Lägga till funktion som skapar möjligheten för användaren att toggla mellan dark och light mode





