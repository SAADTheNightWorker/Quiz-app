
const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", check: false },
        { text: "Blue whale", check: true },
        { text: "Elephant", check: false },
        { text: "Giraffe", check: false },
      ],
    },

    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", check: false },
        { text: "Australia", check: true },
        { text: "Arctic", check: false },
        { text: "Africa", check: false },
      ],
    },
  ];

  const questionElement = document.getElementById("question");
  const answerBtnElement = document.getElementById("answer-btn");
  const nextBtn = document.getElementById("next-btn");

  let questionIndex = 0;
  let score = 0;

  function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextBtn.style.display = "none";
    showQuestion();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.textContent = `Question ${questionNo}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");
      answerBtnElement.appendChild(button);
      button.addEventListener("click", () => selectAnswer(answer.check));
    });
  }

  function resetState() {
    answerBtnElement.innerHTML = "";
    nextBtn.style.display = "none";
  }

  function selectAnswer(isCorrect) {
    const selectedButton = event.target;
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }
    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
  }

  function handleNextbtn() {
    questionIndex++;
    if (questionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextBtn.textContent = "Play Again";
    nextBtn.addEventListener("click", startQuiz);
  }

  nextBtn.addEventListener("click", handleNextbtn);

  startQuiz();