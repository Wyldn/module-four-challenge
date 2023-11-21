// Quiz questions array
const questions = [
  {
    question: "What is 1 + 1?",
    options: ["1", "2", "3"],
    correctAnswer: "2"
  },
  {
    question: "What is 4 + 2?",
    options: ["5", "6", "7"],
    correctAnswer: "6"
  },

  {
    question: "What is 9 + 10?",
    options: ["21", "20", "19"],
    correctAnswer: "2"
  },
  {
    question: "What is 8 + 11?",
    options: ["18", "23", "19"],
    correctAnswer: "19"
  },
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "4"],
    correctAnswer: "4"
  },
];

const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const timerEl = document.getElementById("time");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers");
const gameOverScreen = document.getElementById("game-over");
const initialsInput = document.getElementById("initials");
const scoreList = document.getElementById("score-list");
let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let timerInterval;

