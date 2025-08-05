const questions = [
  {
    question: "What is EthOS primarily known as?",
    choices: [
      "A Web2 search engine",
      "A Layer-2 rollup",
      "A social DeFi sandbox",
      "A NFT trading platform"
    ],
    answer: 2
  },
  {
    question: "How many composable mechanics does EthOS claim to have?",
    choices: ["3", "5", "7", "10"],
    answer: 2
  },
  {
    question: "What do you earn while farming in EthOS?",
    choices: ["ETH", "Points only", "NFTs", "Governance tokens"],
    answer: 0
  },
  {
    question: "What mechanism does EthOS use to boost visibility?",
    choices: ["Airdrop", "Burn to Boost", "Minting", "Staking"],
    answer: 1
  },
  {
    question: "What is the main currency in the EthOS system?",
    choices: ["USDT", "ETH", "BTC", "ARB"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const tweetLink = document.getElementById("tweet-link");

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(index));
    choicesEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  nextBtn.classList.add("hidden");

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");

  scoreEl.textContent = `You scored ${score}/${questions.length}!`;
  const tweetText = encodeURIComponent(`I scored ${score}/${questions.length} on the EthOS quiz by @arnawama_! Try it yourself! #EthOS #Quiz`);
  tweetLink.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

showQuestion();
