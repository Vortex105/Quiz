// DOM Elements
const totalAns = document.getElementById("answered");
const total = document.getElementById("total");
const timer = document.getElementById("timer");
const circleTime = document.querySelector(".timer");
const ask = document.getElementById("questionBox");
const options = document.querySelectorAll(".option");
const pick = document.querySelectorAll(".select");
const ansBox = document.querySelectorAll(".option-box");
const nextBtn = document.getElementById("nextBtn");

// Global Variables
let questionLimit = JSON.parse(localStorage.getItem("UserQuestion"));
let shuffledQuestions = [];
let scoreCount = 0;
let masterNum = 0;
let count = questionLimit * 5;
const progFig = questionLimit * 5;
const progDeg = 360 / progFig;
let randFig = progDeg;

// Timer and UI Initialization
timer.textContent = count;
total.textContent = questionLimit;

// Fetch Questions and Initialize Game
const questApiURL = `https://opentdb.com/api.php?amount=${questionLimit}&category=9&difficulty=medium&type=multiple`;
let newQuestions = [];

// Fetch Questions
async function fetchQuestions() {
  try {
    const response = await fetch(questApiURL);
    const data = await response.json();

    newQuestions = data.results.map((questions) => {
      const answers = [...questions.incorrect_answers];
      const correctAnswer = { text: questions.correct_answer, correct: true };
      answers.push(correctAnswer);
      answers.sort(() => Math.random() - 0.5);

      return {
        question: questions.question,
        answers: answers.map((answer) => ({
          text: answer.text || answer,
          correct: answer.correct || false,
        })),
      };
    });

    shuffledQuestions = shuffleArray(newQuestions);
    initializeGame();
  } catch (error) {
    console.error("Error fetching questions:", error);
    alert("Failed to load questions. Please reload the page.");
  }
}

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Game Initialization
function initializeGame() {
  countTime();
  updateQuestion();
  disableOtherAns();
  nextBtn.disabled = true;
  totalAns.textContent = masterNum + 1;
}

// Countdown Timer
function countTime() {
  let timeInterval = setInterval(() => {
    if (count === 0) {
      clearInterval(timeInterval);
      alert("Time's up!");
      location.reload();
    }
    timer.textContent = count;
    count--;
    const timerColor = timer.dataset.color;
    randFig += progDeg;
    circleTime.style.background = `conic-gradient(${timerColor} ${randFig}deg, #ABD1C6 ${randFig}deg)`;
  }, 1000);
}

// Disable Other Answer Options
function disableOtherAns() {
  pick.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        pick.forEach((r) => {
          if (r !== e.target) r.disabled = true;
        });
        nextBtn.disabled = false;
      }
    });
  });
}

// Update Question and Options
function updateQuestion() {
  if (masterNum >= shuffledQuestions.length) {
    masterNum = 0; // Reset for circular navigation
  }
  ask.textContent = shuffledQuestions[masterNum].question;
  options.forEach((option, index) => {
    option.textContent = shuffledQuestions[masterNum].answers[index].text;
  });
}

// Reset Radio Buttons
function resetRadiobtns() {
  pick.forEach((radio) => {
    radio.checked = false;
    radio.disabled = false;
  });
}

// Update Total Answers and Handle Submission
function updateTotalAns() {
  const totalAnswered = masterNum + 1;
  totalAns.textContent = totalAnswered;

  if (totalAnswered === questionLimit) {
    nextBtn.textContent = "Submit";
  } else {
    nextBtn.textContent = "Next";
  }
}

// Handle Results and Submission
function showResults() {
  const preScore = (scoreCount / questionLimit) * 10;
  scoreCount = Math.round(preScore);

  const userName = localStorage.getItem("Username");
  const userScores = { userName, totalScore: scoreCount };
  localStorage.setItem("user", JSON.stringify(userScores));

  location.replace("results.html");
}

// Handle Next Button Click
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true
  if (nextBtn.textContent === "Submit") {
    showResults();
    return;
  }

  const correctAnswerIndex = shuffledQuestions[masterNum].answers.findIndex(
    (answer) => answer.correct
  );

  pick.forEach((option, index) => {
    if (option.checked && index === correctAnswerIndex) {
      scoreCount++;
    }
  });

  resetRadiobtns();
  masterNum++;
  updateTotalAns();
  updateQuestion();
});

// Start the Game
fetchQuestions();
