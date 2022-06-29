const startButton = document.getElementById('start');
const quiz = document.getElementById('quiz');
const quizQuestion = document.getElementById('quiz_question')
const nextButton = document.getElementById('next')
// const quizAnswerGuesses = document.getElementsByClassName('guess');
const guessA = document.getElementById(A);
const guessB = document.getElementById(B);
const guessC = document.getElementById(C);
const guessD = document.getElementById(D);

quiz.style.display = 'none'

let questions = [
    {
        question: "Canada has many National Parks but which one was it's first?",
        guessA: 'Banff National Park, Alberta',
        guessB: 'Glacier National Park, British Columbia',
        guessC: 'Thousand Islands National Park, Ontario',
        guessD: 'Qausuittuq National Park, Nunavat',
        correct: 'A'
    }, {
        question: "What is a toque?",
        A: 'A tool to rake a camp fire ',
        B: 'A type of traditional chain',
        C: 'A wooly hat',
        D: 'None of the above',
        correct: 'C'
    }, {
        question: "Canada only has one offical bilingual province, which one?",
        A: 'Ontario',
        B: 'New Brunswick',
        C: 'Nova Scotia',
        D: 'Quebec',
        correct: 'B'
    }
]

const finalQuestion= questions.length - 1;
let currentQuestion = 0;

function displayQuestion() {
    let q = questions[currentQuestion];

    quizQuestion.innerHTML ="<p>"+ q.question +"</p>";
    A.innerHTML = q.guessA;
    B.innerHTML = q.guessB;
    C.innerHTML = q.guessC;
    D.innerHTML = q.guessD;
}

startButton.addEventListener("click", beginQuiz);
quiz.style.display = 'none';
nextButton.style.display = 'none';


function beginQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
    nextButton.style.display = 'block';
}


