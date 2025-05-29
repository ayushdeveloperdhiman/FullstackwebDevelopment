const emojiBtn = document.querySelectorAll(".emoji-btn");
const resultMsg = document.getElementById("result-message");
const randomEmojiDisplay = document.getElementById("random-emoji");
const playAgain = document.getElementById("play-btn");

const emojis = ["😀", "😂", "😎", "😍", "😡"];

let randomEmoji = getRandomEmoji();

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function handleEmojiGuess(event) {
  const userGuess = event.target.textContent;
  if (userGuess === randomEmoji) {
    resultMsg.textContent = "Correct! You Guessed Right Emoji";
    resultMsg.style.color = "green";
    randomEmoji = getRandomEmoji();
  } else {
    resultMsg.textContent = `Oops! The correct emoji was ${randomEmoji}`;
    resultMsg.style.color = "red";
    playAgain.style.display = "inline-block";
    randomEmojiDisplay.textContent = randomEmoji;
    emojiBtn.forEach((button) => {
      button.disabled = true;
      button.style.cursor = "not-allowed";
    });
  }
}

function resetGame() {
  resultMsg.textContent = "";
  playAgain.style.display = "none";
  randomEmoji = getRandomEmoji();
  randomEmojiDisplay.textContent = "❓";
  emojiBtn.forEach((button) => {
    button.disabled = false;
    button.style.cursor = "pointer";
  });
}
emojiBtn.forEach((button) => {
  button.addEventListener("click", handleEmojiGuess);
});

playAgain.addEventListener("click", resetGame);
