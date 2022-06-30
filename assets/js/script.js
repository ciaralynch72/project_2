const startButton = document.getElementById('start');
const quiz = document.getElementById('quiz');
const quizQuestion = document.getElementById('quiz_question')
const nextButton = document.getElementById('next')
const score = document.getElementById('score')
const prog = document.getElementById('prog')
// const quizAnswerGuesses = document.getElementsByClassName('guess');
const guessA = document.getElementById(A);
const guessB = document.getElementById(B);
const guessC = document.getElementById(C);
const guessD = document.getElementById(D);



const questions = [
    {
        question: "Canada has many National Parks but which one was it's first?",
        guessA: 'Banff National Park, Alberta',
        guessB: 'Glacier National Park, British Columbia',
        guessC: 'Thousand Islands National Park, Ontario',
        guessD: 'Qausuittuq National Park, Nunavat',
        correct: 'A'
    }, {
        question: "What is a toque?",
        guessA: 'A tool to rake a camp fire ',
        guessB: 'A type of traditional chain',
        guessC: 'A wooly hat',
        guessD: 'None of the above',
        correct: 'C'
    }, {
        question: "Canada only has one offical bilingual province, which one?",
        guessA: 'Ontario',
        guessB: 'New Brunswick',
        guessC: 'Nova Scotia',
        guessD: 'Quebec',
        correct: 'B'
    }
]

const finalQuestion = questions.length - 1;
let currentQuestion = 0;

//show the start button only to begin the quiz
startButton.addEventListener("click", beginQuiz);
// hide quiz until start button is clicked
quiz.style.display = 'none';
//hide the next button until the quiz is started 
nextButton.style.display = 'none';



//display a question after clicking the start button
function displayQuestion() {
    let q = questions[currentQuestion];

    quizQuestion.innerHTML ="<h2>"+ q.question +"</h2>";
    A.innerHTML = q.guessA;
    B.innerHTML = q.guessB;
    C.innerHTML = q.guessC;
    D.innerHTML = q.guessD;
}

 function progress(){
     for(qIndex = 0; qIndex <= finalQuestion; qIndex++){
         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
  
     }
     console.log('working?')
 }

function beginQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
    progress();
    console.log('do you do anything')
}
function setNextQuestion() {
  if (currentQuestion < finalQuestion) {
        currentQuestion++;
    setNextQuestion();
  }
     console.log('how do I get this to the next question?')
     
 }

 function checkAnswer(answer){
    if( answer == questions[currentQuestion].correct){
        // answer is correct

        // change progress color to green
        console.log('ANSWER IS CORRECT');
    }else{
        // answer is wrong
        // change progress color to red
       console.log('answer is incorrect')
    }
   
    if(currentQuestion < finalQuestion){
        currentQuestion++;
        displayQuestion();
    }else{
        // end the quiz and show the score
        alert('game is over')
    }
}


nextButton.style.display = 'block';
nextButton.addEventListener('click', setNextQuestion)
