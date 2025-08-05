const questions = [
  {
    question: "What is the primary goal of EthOS?",
    choices: [
      "To be a hardware-based crypto wallet",
      " A social DeFi platform with gamified mechanics and ETH-based rewards",
      "A centralized exchange for Ethereum tokens",
      "A wallet for storing NFTs"
    ],
    answer: 2
  },
  {
    question: "How many composable mechanics does EthOS claim to have?",
    choices: ["3", "5", "7", "10"],
    answer: 3
  },
  {
    question: "What is $AIR in the context of EthOS?",
    choices: ["A stablecoin used for gas fees", "A gamified airdrop token", "An NFT for EthOS characters", "A liquidity provider staking token"],
    answer: 2
  },
  {
    question: "What mechanism does EthOS use to boost visibility?",
    choices: ["Airdrop", "Burn to Boost", "Minting", "Staking"],
    answer: 2
  },
  {
    question: "What is BOOST in the context of EthOS?",
    choices: ["A daily airdrop token", "A price-boosting market tool", "Extra APY for EOS farming", "The main governance token"],
    answer: 3
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
