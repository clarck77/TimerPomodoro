let timer;
let timeLeft = 25 * 60;
let running = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      document.getElementById("alarm").play();
      running = false;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateDisplay();
  running = false;
}

function setTimer(minutes) {
  timeLeft = minutes * 60;
  updateDisplay();
}

function setCustomTimer() {
  const customMinutes = document.getElementById("customMinutes").value;
  if (!isNaN(customMinutes) && customMinutes > 0) {
    setTimer(customMinutes);
  }
}

updateDisplay();
