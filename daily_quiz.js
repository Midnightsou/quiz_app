let timerLimit = 600; // 10 minutes in seconds for Daily Quiz
let timerInterval;

// Start a countdown timer for the Daily Quiz
function startTimer() {
  timerInterval = setInterval(() => {
    if (timerLimit > 0) {
      timerLimit--;
      document.getElementById("timer").innerText = formatTime(timerLimit);
    } else {
      clearInterval(timerInterval);
      alert("Time's up! Your quiz has ended.");
      endQuiz();
    }
  }, 1000);
}

// Format time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Load daily challenge questions
function loadDailyChallengeQuestions() {
  const questions = getDailyChallengeQuestions();
  const container = document.getElementById("questions-container");
  container.innerHTML = ""; // Clear any existing content

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    // Add question text
    const questionText = document.createElement("h3");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    // Add options
    q.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.classList.add("option-btn");
      optionButton.onclick = () => selectOption(index, option, q.answer);
      questionDiv.appendChild(optionButton);
    });

    container.appendChild(questionDiv);
  });
}

// Mock function to get daily challenge questions
function getDailyChallengeQuestions() {
  return [
    { question: "What is the first Surah of the Quran?", options: ["Al-Fatiha", "Al-Baqarah", "An-Nisa", "Al-Imran"], answer: "Al-Fatiha" },
    { question: "How many pillars of Islam are there?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "Who was the last prophet in Islam?", options: ["Prophet Musa", "Prophet Isa", "Prophet Muhammad", "Prophet Ibrahim"], answer: "Prophet Muhammad" },
  ];
}

// Handle option selection
function selectOption(questionIndex, selectedOption, correctAnswer) {
  const questionDivs = document.querySelectorAll(".question");
  const questionDiv = questionDivs[questionIndex];

  // Disable all buttons for this question
  const buttons = questionDiv.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  // Highlight the selected option
  if (selectedOption === correctAnswer) {
    event.target.classList.add("correct");
  } else {
    event.target.classList.add("incorrect");
  }
}

// End the quiz and save the score
function endQuiz() {
  const questions = getDailyChallengeQuestions();
  let score = 0;

  const questionDivs = document.querySelectorAll(".question");
  questionDivs.forEach((div, index) => {
    const selectedButton = div.querySelector(".correct");
    if (selectedButton && selectedButton.textContent === questions[index].answer) {
      score++;
    }
  });

  // Save the score and username to localStorage
  const username = localStorage.getItem("currentUser") || "Anonymous";
  localStorage.setItem("quiz_username", username);
  localStorage.setItem("quiz_score", score);

  // Redirect to the results page
  window.location.href = "result.html";
}

// Initialize the Daily Quiz
window.onload = function () {
  startTimer(); // Start the timer
  loadDailyChallengeQuestions(); // Load daily questions
};