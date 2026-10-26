const TIME_LIMIT = 30;
const list = Object.entries(questions); // [[question, {options, answer, explanation}], ...]

let current = 0;
let score = 0;
let timeLeft = TIME_LIMIT;
let timerId = null;
let locked = false;
let wrongAnswers = [];

const $ = (id) => document.getElementById(id);

function showQuestion() {
  const [text, data] = list[current];
  locked = false;
  timeLeft = TIME_LIMIT;

  $("progress").textContent = `Q ${current + 1}/${list.length}`;
  $("score").textContent = `Score: ${score}`;
  $("fill").style.width = (current / list.length) * 100 + "%";
  $("question").textContent = text;
  $("explanation").classList.add("hidden");
  $("nextBtn").classList.add("hidden");

  const box = $("options");
  box.innerHTML = "";
  data.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "opt";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(index));
    box.appendChild(btn);
  });

  updateTimer();
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) selectOption(-1); // time over
  }, 1000);
}

function updateTimer() {
  $("timer").textContent = timeLeft + "s";
  $("timer").classList.toggle("low", timeLeft <= 10);
}

function selectOption(index) {
  if (locked) return;
  locked = true;
  clearInterval(timerId);

  const [text, data] = list[current];
  const buttons = document.querySelectorAll(".opt");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === data.answer) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
  });

  if (index === data.answer) {
    score++;
  } else {
    wrongAnswers.push({
      question: text,
      yours: index === -1 ? "No answer (time up)" : data.options[index],
      correct: data.options[data.answer],
      explanation: data.explanation
    });
  }

  $("score").textContent = `Score: ${score}`;
  $("explanation").textContent = (index === -1 ? "Time's up! " : "") + data.explanation;
  $("explanation").classList.remove("hidden");
  $("nextBtn").textContent = current === list.length - 1 ? "See results" : "Next";
  $("nextBtn").classList.remove("hidden");
}

function showResult() {
  $("quiz").classList.add("hidden");
  $("result").classList.remove("hidden");
  $("wrongList").classList.add("hidden");
  $("finalScore").textContent = `${score} / ${list.length}`;

  const ratio = score / list.length;
  $("message").textContent =
    ratio === 1 ? "Perfect! JavaScript legend." :
    ratio >= 0.6 ? "Nice work! Good JavaScript knowledge." :
    "Keep practicing and try again.";
  $("reviewBtn").classList.toggle("hidden", wrongAnswers.length === 0);
}

function showWrongAnswers() {
  const box = $("wrongList");
  box.innerHTML = "";
  wrongAnswers.forEach((w) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<b></b><div>Your answer: <span class="y"></span></div><div>Correct: <span class="c"></span></div><div class="e"></div>`;
    div.querySelector("b").textContent = w.question;
    div.querySelector(".y").textContent = w.yours;
    div.querySelector(".c").textContent = w.correct;
    div.querySelector(".e").textContent = w.explanation;
    box.appendChild(div);
  });
  box.classList.remove("hidden");
}

function restart() {
  current = 0;
  score = 0;
  wrongAnswers = [];
  $("result").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  showQuestion();
}

$("nextBtn").addEventListener("click", () => {
  current++;
  if (current < list.length) showQuestion();
  else showResult();
});
$("restartBtn").addEventListener("click", restart);
$("reviewBtn").addEventListener("click", showWrongAnswers);

showQuestion();
