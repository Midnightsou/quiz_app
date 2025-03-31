const questions = {
    easy: [
        ["Who is the last Prophet of Islam?", ["Prophet Musa", "Prophet Ibrahim", "Prophet Muhammad (SAW)"], 2],
        ["What is the first pillar of Islam?", ["Zakat", "Salah", "Shahada"], 2],
        ["How many daily prayers are obligatory for Muslims?", ["Three", "Four", "Five"], 2],
        ["What is the holy book of Islam?", ["Torah", "Quran", "Injil"], 1],
        ["Who was the first Caliph after Prophet Muhammad (SAW)?", ["Umar ibn Khattab", "Abu Bakr As-Siddiq", "Uthman ibn Affan"], 1],
        ["What is the second most important Islamic city after Makkah?", ["Madinah", "Jerusalem", "Baghdad"], 0],
        ["What is the meaning of 'Islam'?", ["Peace and Submission", "Freedom and Justice", "Love and Mercy"], 0],
        ["How many verses are in Surah Al-Fatiha?", ["Five", "Six", "Seven"], 2],
        ["What is the night on which the Quran was first revealed called?", ["Laylat al-Bara'ah", "Laylat al-Qadr", "Laylat al-Isra"], 1],
        ["What is the first mosque built in Islam?", ["Masjid Al-Haram", "Quba Mosque", "Masjid An-Nabawi"], 1],
        ["Who built the Kaaba?", ["Prophet Ibrahim and Prophet Ismail", "Prophet Musa", "Prophet Nuh"], 0],
        ["What is the Islamic calendar based on?", ["Lunar cycle", "Solar cycle", "Both"], 0],
        ["How many months are there in the Islamic calendar?", ["10", "12", "11"], 1],
        ["Which is the holiest night in Islam?", ["Laylat al-Qadr", "Laylat al-Isra", "Eid Night"], 0],
        ["Who was the wife of Prophet Muhammad (SAW) known as 'Mother of the Believers'?", ["Aisha (RA)", "Fatimah (RA)", "Khadijah (RA)"], 2],
        ["What do Muslims say before eating?", ["Bismillah", "Allahu Akbar", "SubhanAllah"], 0],
        ["Which Surah is called 'The Heart of the Quran'?", ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Yasin"], 2],
        ["What is the Islamic ruling on consuming pork?", ["Forbidden", "Allowed", "Depends"], 0],
        ["What is the name of the Islamic fasting month?", ["Rajab", "Ramadan", "Shawwal"], 1],
        ["What is the reward for fasting in Ramadan?", ["Forgiveness of sins", "Wealth", "Strength"], 0]
    ],
    medium: [
        ["In which Islamic month did the Battle of Badr take place?", ["Muharram", "Ramadan", "Rabi' al-Awwal"], 1],
        ["Who was the Prophet known for his patience during suffering?", ["Prophet Yusuf", "Prophet Ayyub", "Prophet Musa"], 1],
        ["How many Makki Surahs are there in the Quran?", ["70", "60", "50"], 0],
        ["Which companion of the Prophet (SAW) is known as 'The Sword of Allah'?", ["Khalid ibn Al-Walid", "Abu Bakr As-Siddiq", "Ali ibn Abi Talib"], 0],
        ["What was the name of the treaty signed between Muslims and Quraysh in the 6th year of Hijrah?", ["Treaty of Makkah", "Treaty of Hudaybiyyah", "Treaty of Taif"], 1],
        ["How long did Prophet Muhammad (SAW) receive revelation?", ["20 years", "23 years", "25 years"], 1],
        ["Who was the first person to accept Islam?", ["Abu Bakr", "Ali ibn Abi Talib", "Khadijah bint Khuwaylid"], 2],
        ["What was the name of Prophet Muhammad’s (SAW) mother?", ["Fatimah", "Aminah", "Asiya"], 1],
        ["Which angel brought revelation to Prophet Muhammad (SAW)?", ["Angel Israfil", "Angel Jibreel", "Angel Mikail"], 1],
        ["What was the migration of Prophet Muhammad (SAW) from Makkah to Madinah called?", ["Hajj", "Hijrah", "Umrah"], 1],
        ["How many years did Prophet Muhammad (SAW) live in Makkah before Hijrah?", ["10", "13", "15"], 1],
        ["Who was known as 'The Trustworthy' before Prophethood?", ["Prophet Musa", "Prophet Muhammad (SAW)", "Prophet Isa"], 1],
        ["Which battle was the first major battle in Islamic history?", ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq"], 1],
        ["What was the real name of Abu Bakr As-Siddiq?", ["Abdullah ibn Uthman", "Umar ibn Khattab", "Ali ibn Abi Talib"], 0],
        ["Which Surah was revealed completely first?", ["Surah Al-Fatiha", "Surah Al-Alaq", "Surah Al-Kahf"], 0],
        ["Who compiled the Quran into one book?", ["Umar ibn Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"], 1],
        ["Which Prophet was given the miracle of speaking in infancy?", ["Prophet Isa", "Prophet Musa", "Prophet Yusuf"], 0],
        ["Which Surah in the Quran is named after a woman?", ["Surah Maryam", "Surah Nisa", "Surah Hujurat"], 0],
        ["Which city was known as Yathrib before Islam?", ["Makkah", "Madinah", "Taif"], 1],
        ["Which Prophet could control the wind?", ["Prophet Isa", "Prophet Sulayman", "Prophet Yunus"], 1]
    ],
    hard: [
        ["Which Sahabi was given the title 'The Sword of Allah'?", ["Abu Bakr As-Siddiq", "Khalid ibn Al-Walid", "Umar ibn Khattab"], 1],
        ["Which battle is also known as the 'Day of Furqan'?", ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq"], 1],
        ["What is the name of the mountain where the first revelation was received?", ["Jabal al-Rahma", "Jabal al-Noor", "Jabal al-Uhud"], 1],
        ["How many years did Prophet Nuh (AS) preach to his people?", ["500 years", "950 years", "1000 years"], 1],
        ["Who was the first child to accept Islam?", ["Ali ibn Abi Talib", "Abdullah ibn Umar", "Hasan ibn Ali"], 0],
        ["What was the age of Prophet Muhammad (SAW) when his mother passed away?", ["Six years old", "Eight years old", "Twelve years old"], 0],
        ["Which Prophet was known as the 'Father of Prophets'?", ["Prophet Ibrahim", "Prophet Adam", "Prophet Musa"], 0],
        ["How many prophets are mentioned by name in the Quran?", ["20", "25", "30"], 1],
        ["Who led the Muslims in prayer when Prophet Muhammad (SAW) was on his deathbed?", ["Ali ibn Abi Talib", "Abu Bakr As-Siddiq", "Umar ibn Khattab"], 1],
        ["Who was the Prophet that could talk to ants?", ["Prophet Musa", "Prophet Sulayman", "Prophet Dawud"], 1],
        ["Which Prophet was tested with extreme illness but remained patient?", ["Prophet Yusuf", "Prophet Ayyub", "Prophet Shu'ayb"], 1],
        ["How many gates of Jannah are mentioned in the Quran?", ["Six", "Seven", "Eight"], 2],
        ["Which Surah contains the longest Ayah in the Quran?", ["Surah Al-Baqarah", "Surah Al-Kahf", "Surah Al-Ma'idah"], 0],
        ["Who was known as the most generous companion of Prophet Muhammad (SAW)?", ["Abdul Rahman ibn Awf", "Uthman ibn Affan", "Bilal ibn Rabah"], 1],
        ["Which angel is responsible for taking souls?", ["Jibreel", "Israfil", "Malik al-Mawt"], 2],
        ["What was the name of Prophet Yusuf's (AS) younger brother?", ["Benjamin", "Yahya", "Isa"], 0],
        ["How many idols were inside the Kaaba before the conquest of Makkah?", ["100", "360", "500"], 1],
        ["Who was the last Sahabi to die?", ["Anas ibn Malik", "Abu Hurairah", "Abdullah ibn Abbas"], 0],
        ["Which two Prophets were cousins?", ["Musa and Harun", "Isa and Yahya", "Ibrahim and Lut"], 1],
        ["Which wife of Prophet Muhammad (SAW) was given the title 'Mother of the Poor'?", ["Aisha (RA)", "Zainab bint Jahsh (RA)", "Khadijah (RA)"], 1]
    ]
};

let currentLevel = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 240;

// Display Level Selection
function showLevelSelection() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("level-screen").classList.remove("hidden");
}

// Start Quiz
function startQuiz(level) {
    currentLevel = level;
    currentQuestions = [...questions[level]].sort(() => Math.random() - 0.5); // Shuffle questions
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    document.getElementById("level-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    startTimer();
}

// Show Question
function showQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1} of 20`;
    document.getElementById("question-text").textContent = questionData[0];

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData[1].forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("quiz-screen").classList.add("fade");
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === currentQuestions[currentQuestionIndex][2]) {
        score++;
    }
    nextQuestion();
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < 19) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

// End Quiz
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("results-screen").classList.remove("hidden");
    document.getElementById("final-score").textContent = `${score} / 20`;

    const answersContainer = document.getElementById("correct-answers");
    answersContainer.innerHTML = "";
    currentQuestions.forEach((q, index) => {
        const p = document.createElement("p");
        p.textContent = `Q${index + 1}: ${q[0]} - Correct Answer: ${q[1][q[2]]}`;
        answersContainer.appendChild(p);
    });
}

// Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Timer
function startTimer() {
    timeLeft = 240;
    document.getElementById("time-left").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// Restart Quiz
function restartQuiz() {
    document.getElementById("results-screen").classList.add("hidden");
    document.getElementById("level-screen").classList.remove("hidden");
}

// Main Menu
function goToMainMenu() {
    document.getElementById("results-screen").classList.add("hidden");
    document.getElementById("welcome-screen").classList.remove("hidden");
}