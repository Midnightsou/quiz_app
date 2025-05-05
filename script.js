// User authentication functions
function createAccount(event) {
    event.preventDefault();
    const username = document.getElementById("create-username").value;
    const password = document.getElementById("create-password").value;
    if (!username || !password) return alert("All fields are required.");
    if (localStorage.getItem(username)) return alert("Username already exists.");
    localStorage.setItem(username, password);
    alert("Account created successfully!");
    window.location.href = "signin.html";
}

function signIn(event) {
    event.preventDefault();
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        localStorage.setItem("currentUser", username);
        window.location.href = "quiz.html";
    } else {
        alert("Invalid credentials.");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// Questions data
const questionsData = {
    easy: [
        { question: "Who was Prophet Yusuf's father?", options: ["Ibrahim", "Yaqub", "Musa", "Ismail"], answer: "Yaqub" },
        { question: "Where was Prophet Yusuf thrown into?", options: ["A cave", "A well", "A house", "A pit"], answer: "A well" },
        { question: "How many brothers did Prophet Yusuf have?", options: ["10", "11", "12", "13"], answer: "11" },
        { question: "Who tried to seduce Prophet Yusuf?", options: ["The queen", "The king's wife", "The king", "The merchant's wife"], answer: "The king's wife" },
        { question: "What did Yusuf's brothers do to him?", options: ["Stole his coat", "Told him to leave", "Sold him as a slave", "Threw him in a pit"], answer: "Threw him in a pit" },
        { question: "Who bought Prophet Yusuf in Egypt?", options: ["The king", "Al-Aziz", "A merchant", "A prince"], answer: "Al-Aziz" },
        { question: "What was Yusuf known for in Egypt?", options: ["His wisdom", "His strength", "His beauty", "His dream interpretations"], answer: "His dream interpretations" },
        { question: "Who were the two people Yusuf interpreted dreams for in prison?", options: ["The king and his advisor", "Two prisoners", "The queen and her maid", "His brothers"], answer: "Two prisoners" },
        { question: "What was the king's dream that Yusuf interpreted?", options: ["Seven cows", "Seven stars", "Seven trees", "Seven years of famine"], answer: "Seven cows" },
        { question: "What did Prophet Yusuf predict for Egypt?", options: ["Prosperity", "Seven years of famine", "Seven years of peace", "War"], answer: "Seven years of famine" },
        { question: "What did Yusuf do when he saw his brothers in Egypt?", options: ["He forgave them", "He punished them", "He rejected them", "He ignored them"], answer: "He forgave them" },
        { question: "Who was the first to recognize Yusuf when he revealed himself?", options: ["His father", "His brothers", "The king", "His uncle"], answer: "His brothers" },
        { question: "What did Yaqub do when he was told Yusuf was alive?", options: ["Cried and rejoiced", "Refused to believe", "Told them to go back", "Praised Allah"], answer: "Refused to believe" },
        { question: "What did Yusuf do when he revealed himself to his brothers?", options: ["Punished them", "Forgave them", "Told them to leave", "Cried and left"], answer: "Forgave them" },
        { question: "What did Yusuf's father Yaqub receive from his sons that proved Yusuf was alive?", options: ["His shirt", "A letter", "His coat", "A ring"], answer: "His shirt" },
        { question: "How did Prophet Yusuf become powerful in Egypt?", options: ["Through military conquest", "Through his dream interpretations", "By building great structures", "By being loved by the king"], answer: "Through his dream interpretations" },
        { question: "What did Prophet Yusuf do for his family when they came to Egypt?", options: ["Welcomed them with a feast", "Gave them food", "Sent them to work", "Offered them shelter"], answer: "Gave them food" },
        { question: "How did Prophet Yusuf treat his brothers when they came to Egypt during the famine?", options: ["He punished them", "He forgave them", "He ignored them", "He sent them away"], answer: "He forgave them" },
        { question: "What did the king of Egypt do after Yusuf interpreted his dream?", options: ["Fired him", "Made him a governor", "Rewarded him", "Ignored him"], answer: "Made him a governor" },
        { question: "What did Yusuf do after he was reunited with his family?", options: ["He left Egypt", "He built a palace for them", "He invited them to stay with him", "He made them rich"], answer: "He invited them to stay with him" },
        { question: "What was the result of Prophet Yusuf's patience and trust in Allah?", options: ["He became king", "He was rewarded with wealth", "He was reunited with his family", "He became a prophet"], answer: "He was reunited with his family" }
    ],
    medium: [
        { question: "What was the name of Prophet Yusuf's father?", options: ["Ibrahim", "Yaqub", "Ismail", "Musa"], answer: "Yaqub" },
        { question: "Which prophet is Prophet Yusuf's great-grandfather?", options: ["Ishaq", "Ibrahim", "Nuh", "Idris"], answer: "Ibrahim" },
        { question: "How many brothers did Prophet Yusuf have?", options: ["10", "11", "12", "13"], answer: "11" },
        { question: "What did Prophet Yusuf see in his dream?", options: ["Fire", "A tree", "11 stars, sun and moon", "A ladder"], answer: "11 stars, sun and moon" },
        { question: "Why did Yusuf's brothers hate him?", options: ["He was older", "He got more food", "Their father loved him more", "He stole their things"], answer: "Their father loved him more" },
        { question: "What did the brothers do to Prophet Yusuf?", options: ["Took him to Syria", "Sold him to a traveler", "Threw him in a well", "Hurt him"], answer: "Threw him in a well" },
        { question: "What did the brothers tell their father about Yusuf?", options: ["He went to town", "He drowned", "A wolf ate him", "He ran away"], answer: "A wolf ate him" },
        { question: "Who picked up Yusuf from the well?", options: ["A merchant caravan", "His brothers", "A prophet", "An angel"], answer: "A merchant caravan" },
        { question: "Where was Yusuf sold?", options: ["Jerusalem", "Mecca", "Egypt", "Medina"], answer: "Egypt" },
        { question: "Who tried to seduce Prophet Yusuf?", options: ["Queen of Egypt", "His master's wife", "His cousin", "His sister"], answer: "His master's wife" },
        { question: "What was Yusuf known for in prison?", options: ["Carpentry", "Healing", "Dream interpretation", "Leadership"], answer: "Dream interpretation" },
        { question: "Who had a dream about birds eating from his head?", options: ["The king", "Yusuf", "A prisoner", "A brother"], answer: "A prisoner" },
        { question: "What was the king's dream that Yusuf interpreted?", options: ["Seven fat cows eaten by seven lean cows", "A wolf", "A boat", "An army"], answer: "Seven fat cows eaten by seven lean cows" },
        { question: "What position did Yusuf get in Egypt?", options: ["Warrior", "Minister of finance", "Farmer", "Chief judge"], answer: "Minister of finance" },
        { question: "Why did Yusuf's brothers come to Egypt?", options: ["To conquer", "For trade", "For food during famine", "To search for Yusuf"], answer: "For food during famine" },
        { question: "Did Yusuf recognize his brothers when they came to Egypt?", options: ["Yes", "No"], answer: "Yes" },
        { question: "What did Yusuf hide in his brother’s bag?", options: ["Money", "A gem", "The king’s cup", "Bread"], answer: "The king’s cup" },
        { question: "What did Yusuf do when he finally revealed himself?", options: ["Punished them", "Forgave them", "Told them to leave", "Cried and left"], answer: "Forgave them" },
        { question: "Who came with Yusuf's brothers to Egypt later?", options: ["Their wives", "Their children", "Their father Yaqub", "Their enemies"], answer: "Their father Yaqub" },
        { question: "What did Yaqub regain when he saw Yusuf’s shirt?", options: ["Strength", "Wealth", "His sight", "His land"], answer: "His sight" }
    ],
    hard: [
        { question: "What was the reason behind Prophet Yusuf’s brothers’ jealousy?", options: ["His good deeds", "His dream", "His beauty", "His knowledge"], answer: "His dream" },
        { question: "What did the wife of Al-Aziz try to do to Prophet Yusuf?", options: ["Poison him", "Seduce him", "Imprison him", "Accuse him of theft"], answer: "Seduce him" },
        { question: "Who was the first to recognize Prophet Yusuf when he revealed himself?", options: ["His father", "His brothers", "The king", "His mother"], answer: "His brothers" },
        { question: "How did Prophet Yusuf respond to his brothers after revealing himself?", options: ["He punished them", "He forgave them", "He asked for a favor", "He demanded an apology"], answer: "He forgave them" },
        { question: "What did Yusuf’s father, Yaqub, do when he heard that Yusuf was alive?", options: ["Wept and refused to believe it", "Immediately traveled to Egypt", "Sent gifts to Yusuf", "Gave thanks and praised Allah"], answer: "Wept and refused to believe it" },
        { question: "Which dream of the king did Yusuf interpret?", options: ["Seven cows", "Seven stars", "Seven cities", "Seven horses"], answer: "Seven cows" },
        { question: "How many years of famine did Prophet Yusuf predict?", options: ["7", "10", "5", "12"], answer: "7" },
        { question: "When Yusuf’s brothers arrived in Egypt, what was the first thing he did?", options: ["Tested them by taking one prisoner", "Fed them", "Called for a feast", "Told them about his dream"], answer: "Tested them by taking one prisoner" },
        { question: "What did Yusuf instruct his servants to do when his brothers left Egypt?", options: ["Return their money secretly", "Give them food and gifts", "Send them away without any food", "Accuse them of theft"], answer: "Return their money secretly" },
        { question: "What did Yaqub say when he was told that Yusuf was alive?", options: ["Praise be to Allah", "I will not believe it until I see him", "I knew this day would come", "I am happy but sorrowful"], answer: "I will not believe it until I see him" },
        { question: "What significant event occurred when Prophet Yusuf reunited with his father?", options: ["He became a king", "His sight was restored", "He was crowned", "His dream came true"], answer: "His sight was restored" },
        { question: "Why did Prophet Yusuf’s brothers fear him when they returned to Egypt?", options: ["Because they thought he would harm them", "Because he was powerful", "Because he recognized them", "Because he had become a king"], answer: "Because they thought he would harm them" },
        { question: "What did Yusuf do when he was falsely accused?", options: ["He defended himself", "He admitted his crime", "He prayed for patience", "He left the country"], answer: "He prayed for patience" },
        { question: "What was Prophet Yusuf’s reaction to being falsely accused?", options: ["He defended himself", "He admitted his crime", "He prayed for patience", "He left the country"], answer: "He prayed for patience" },
        { question: "What did Yusuf do when he reunited with his family?", options: ["He became a king", "He built a palace", "He welcomed them to Egypt", "He made them his ministers"], answer: "He welcomed them to Egypt" },
        { question: "Did Yusuf recognize his brothers when they came to Egypt?", options: ["Yes", "No"], answer: "Yes" },
        { question: "What did Yusuf hide in his brother’s bag?", options: ["Money", "A gem", "The king’s cup", "Bread"], answer: "The king’s cup" },
        { question: "What did Yusuf do when he finally revealed himself?", options: ["He punished them", "He cried and forgave them", "He told them to leave", "He imprisoned them"], answer: "He cried and forgave them" },
        { question: "Who came with Yusuf's brothers to Egypt later?", options: ["Their wives", "Their children", "Their father Yaqub", "Their enemies"], answer: "Their father Yaqub" },
        { question: "What did Yaqub regain when he saw Yusuf’s shirt?", options: ["Strength", "Wealth", "His sight", "His land"], answer: "His sight" }
    ]
};

// Quiz variables
let questions = [];
let currentQuestion = 0;
let score = 0;
let timer;

// Show level selection screen
function showLevelSelection() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("level-screen").classList.remove("hidden");
}

// Start quiz based on selected level
function startQuiz(level) {
    questions = [...questionsData[level]];
    questions = questions.sort(() => Math.random() - 0.5); // Shuffle questions
    score = 0;
    currentQuestion = 0;
    document.getElementById("level-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
    startTimer();
}

// Display the current question
function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-number").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById("question-text").textContent = q.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectOption(option);
        optionsContainer.appendChild(btn);
    });
    updateProgressBar();
}

// Handle option selection
function selectOption(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) score++;
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else endQuiz();
}

// Update the progress bar
function updateProgressBar() {
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;
}

// End the quiz and show results
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("results-screen").classList.remove("hidden");
    document.getElementById("final-score").textContent = `${score} / ${questions.length}`;

    const correctAnswersContainer = document.getElementById("correct-answers");
    correctAnswersContainer.innerHTML = "";
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.textContent = `${i + 1}. ${q.question} - Answer: ${q.answer}`;
        correctAnswersContainer.appendChild(div);
    });
    updateLeaderboard();
}

// Restart the quiz
function restartQuiz() {
    window.location.href = "quiz.html";
}

// Go back to the main menu
function goToMainMenu() {
    window.location.href = "index.html";
}

// Start the quiz timer
function startTimer() {
    let time = 20 * questions.length;
    const timerEl = document.getElementById("timer");
    timerEl.textContent = `Time Left: ${time}s`;
    timer = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(timer);
            endQuiz();
        } else {
            timerEl.textContent = `Time Left: ${time}s`;
        }
    }, 1000);
}

// Update the leaderboard
function updateLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    const user = localStorage.getItem("currentUser") || "Anonymous";
    leaderboard.push({ user, score });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 10)));

    const list = document.getElementById("leaderboard-list");
    list.innerHTML = "";
    leaderboard.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.user}: ${entry.score}`;
        list.appendChild(li);
    });
}
