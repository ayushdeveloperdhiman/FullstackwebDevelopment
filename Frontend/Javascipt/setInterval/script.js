const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let timeElapsed = 0;
let intervalId;

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timeElapsed++;
      timerElement.textContent = `Timer Elapsed: ${timeElapsed} seconds`;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  timeElapsed = 0;
  timerElement.textContent = `Timer Elapsed: ${timeElapsed} seconds`;
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
