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
        question: "Traditionen med att ta in en gran och pynta granen juligt kommer från Sverige?",
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
        question: "Jultomten brukade ha grön klädsel innan den populära Coca-Cola-annonsen på 1930-talet introducerade tomten i rött.",
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
        question: "Comet, Fenix och Rudolf är tre av Tomtens alla renar",
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
    let startQuizBtn = document.getElementById("startQuizBtn");
    let submitBtn = document.getElementById("submit");
    let resultDiv = document.getElementById("result");
    let quizDiv = document.getElementById("quiz-container");
    let startPage = document.getElementById("startPage");
    let feedbackString = document.getElementById("feedback");
    let darkLightIcon = document.getElementById("dark-light-icon");
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
        let optionDiv = document.getElementById("options");

        //Deklarera och definera feedback samt nollställ efter varje fråga 
        feedbackString.innerHTML = "";

        // Nollställ alt. från tidigare fråga. 
        optionDiv.innerHTML = "";

        // Visa aktuell fråga från arrayen 
        questionDiv.innerHTML = questionArray[currentQuestion].question;

        let btnOption;

        // foreach för att skapa buttons för varje alternativ samt selectoption för att 
        // lagra logik som körs då man tryckt på ett alternativ. 
        questionArray[currentQuestion].options.forEach((option, index) => {
            btnOption = document.createElement("button");
            btnOption.textContent = option;
            btnOption.classList.add("btnOption");
            btnOption.addEventListener("click", () => selectOption(index));
            optionDiv.appendChild(btnOption);
        });



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

            selectOption(); // Då användaren klickar på nästa fråga kollar datan om svaret är rätt och räknar poäng. 

            showQuestion();  // Om alla frågor inte besvarats så körs funk. showquestion och användaren klickas vidare till nästa obesvarade fråga 
            feedbackString.innerHTML = ""; //Föregående fråga feedback raderas. 
        }

        else {
            // Logik som tar bort knappen nästa fråga och lägger till knappen se resultat 
            submitBtn.style.display = "block";
            nextQuestionBtn.style.display = "none";
        }

    });

    // När man trycker på knappen "Se resultat" så körs funktionen showResult
    submitBtn.addEventListener("click", showResult);

    function showResult() {
        //Logik som körs då användaren trycker på "Se resultat"
        resultDiv.style.display = "block";
        quizDiv.style.display = "none";

        // Funktion med variabeln userScore för att samla in data om hur många rätt användaren fått.
        // och för att köra logik för att räkna och visa "rating" på användarens prestation i quizet. 
        function calculateStarRating(userScore) {


            // Variabeln definerar antal maxpoäng beroende på antal frågor i Arrayen. 
            let maxPoints = questionArray.length;

            // Skapat en variabel för att spara logik för hur data får fram procentuellt värde
            //  av antal userScore som användaren samlat under quizet. 
            let points = (userScore / maxPoints) * 100;


            // Skapat en variabel där texten skrivs ut beroende på vilket villkor som uppfylls i if else-satsen
            let resultText = document.querySelector("h2");

            // Skapat en variabel för att kunna ändra bakgrundsfärgen på resultatet beroende på vilken poäng användaren fått
            let resultColor = document.getElementById("resultTextColor");

            //Om användaren fått mer än 8/10 rätt. 
            if (points > 75) {
                document.querySelector(".very-good").style.display = "block";
                resultText.innerHTML = `Riktigt bra jobbat! <br> Ditt resultat: ${userScore} av ${questionArray.length}`;
                resultColor.style.backgroundColor = "green";
            }
            // Om användaren fått 5/10 - 7/10 rätt.  
            else if (points >= 50 && points <= 75) {
                document.querySelector(".good").style.display = "block";
                resultText.innerHTML = `Bra jobbat! <br> Ditt resultat: ${userScore} av ${questionArray.length}`;
                resultColor.style.backgroundColor = "orange";
            }
            // Om användaren fått mindre än 5/10 rätt
            else {
                document.querySelector(".not-approved").style.display = "block";
                resultText.innerHTML = `Underkänd! <br> Ditt resultat: ${userScore} av ${questionArray.length}`;
                resultColor.style.backgroundColor = "Red";
            }

        }
        // Anropar funktionen 
        calculateStarRating(userScore);

    }

    //Funktion som kan ändra sidan till dark/light mode 
    function switchTheme() {
        let toggleBtn = document.getElementById("toggleBtn");
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light");
        });
    }

    switchTheme();
});




// Lägga till funktion som skapar möjligheten för användaren att toggla mellan dark och light mode





