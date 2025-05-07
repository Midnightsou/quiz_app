// Ensure the user is logged in
let currentUser = localStorage.getItem("currentUser");
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60; // Default time limit
let quizLevel = "easy"; // Default difficulty level

// Redirect to sign-in page if the user is not logged in
if (!currentUser) {
  window.location.href = "signin.html";
} else {
  const userNameElement = document.getElementById("user-name");
  if (userNameElement) {
    userNameElement.textContent = currentUser;
  }
}

// Sample questions for each level
const questionData = {
  easy: [
    { question: "What is the capital of Saudi Arabia?", options: ["Riyadh", "Makkah", "Medina", "Jeddah"], answer: "Riyadh" },
    { question: "Who was the first prophet?", options: ["Adam", "Noah", "Moses", "Abraham"], answer: "Adam" },
  ],
  medium: [
    { question: "Which prophet was swallowed by a whale?", options: ["Jonah", "Moses", "Isaiah", "David"], answer: "Jonah" },
    { question: "Which battle is considered the first battle in Islam?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Battle of Tabuk"], answer: "Battle of Badr" },
  ],
  hard: [
    { question: "What year did the Battle of Badr occur?", options: ["624 CE", "612 CE", "630 CE", "590 CE"], answer: "624 CE" },
    { question: "Which Surah was the first to be revealed to Prophet Muhammad?", options: ["Al-Alaq", "Al-Fatiha", "Al-Baqarah", "Al-Ikhlas"], answer: "Al-Alaq" },
  ],
};

// Load questions based on the selected level
function loadQuestions() {
  questions = questionData[quizLevel];
  displayQuestion();
}

// Display the current question and options
function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  } else {
    endQuiz();
  }
}

// Check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

// End the quiz and display results
function endQuiz() {
  clearInterval(timer);
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("results-container").style.display = "block";
  document.getElementById("final-score").textContent = `Your score is: ${score} / ${questions.length}`;
  saveScoreToLeaderboard(currentUser, score);
}

// Start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60; // Reset timer
  loadQuestions();
  startTimer();
  document.getElementById("start-quiz-btn").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}

// Start the timer
function startTimer() {
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
    } else {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// Reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("results-container").style.display = "none";
  document.getElementById("start-quiz-btn").style.display = "inline-block";
}

// Save score to leaderboard
function saveScoreToLeaderboard(user, score) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ user, score });
  leaderboard.sort((a, b) => b.score - a.score); // Sort by score descending
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// Display leaderboard
function displayLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  const leaderboardContainer = document.getElementById("leaderboard");
  leaderboardContainer.innerHTML = leaderboard
    .slice(0, 5)
    .map((entry, index) => `<li>${index + 1}. ${entry.user}: ${entry.score}</li>`)
    .join("");
}

// Event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
  // Start quiz button
  const startQuizButton = document.getElementById("start-quiz-btn");
  if (startQuizButton) {
    startQuizButton.addEventListener("click", () => {
      const selectedLevel = document.querySelector('input[name="difficulty"]:checked');
      if (selectedLevel) {
        quizLevel = selectedLevel.value;
        startQuiz();
      } else {
        alert("Please select a difficulty level.");
      }
    });
  }

  // Retry button
  const retryButton = document.getElementById("retry-btn");
  if (retryButton) {
    retryButton.addEventListener("click", resetQuiz);
  }

  // Quit quiz button
  const quitQuizButton = document.getElementById("quit-quiz-btn");
  if (quitQuizButton) {
    quitQuizButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Logout button
  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      window.location.href = "signin.html";
    });
  }

  // View leaderboard button
  const viewLeaderboardButton = document.getElementById("view-leaderboard-btn");
  if (viewLeaderboardButton) {
    viewLeaderboardButton.addEventListener("click", () => {
      displayLeaderboard();
      document.getElementById("leaderboard-container").style.display = "block";
    });
  }

  // Close leaderboard button
  const closeLeaderboardButton = document.getElementById("close-leaderboard-btn");
  if (closeLeaderboardButton) {
    closeLeaderboardButton.addEventListener("click", () => {
      document.getElementById("leaderboard-container").style.display = "none";
    });
  }
});
