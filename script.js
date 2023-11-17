//Elements
const startButton = document.querySelector(".start-btn");
const lapButton = document.querySelector(".lap-btn");
const pauseButton = document.querySelector(".pause-btn");
const resetButton = document.querySelector(".reset-btn");
const resetLaps = document.querySelector(".reset-lap");
const lapsElement = document.querySelector(".laps");
const hoursElement = document.querySelector(".hours-time");
const minutesElement = document.querySelector(".minutes-time");
const secondsElement = document.querySelector(".seconds-time");
const millisecondsElement = document.querySelector(".milliseconds-time");

let hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0,
  lap = 1;

let timer;
//Event Handlers

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", lapTime);
resetLaps.addEventListener("click", function () {
  lapsElement.innerHTML = "";
  lap = 1;
  lapsElement.classList.add("hidden");
  resetLaps.classList.add("hidden");
});
//Functions

function startTimer() {
  timer = setInterval(updateTimer, 10);
  startButton.disabled = true;
}

function updateTimer() {
  millisecond++;
  millisecondsElement.textContent = `${String(millisecond)}`.padStart(2, 0);
  if (millisecond === 100) {
    millisecond = 0;
    second++;
    secondsElement.textContent = `${String(second)}`.padStart(2, 0);
  }
  if (second === 60) {
    second = 0;
    minute++;
    minutesElement.textContent = `${String(minute)}`.padStart(2, 0);
  }
  if (minute === 60) {
    minute = 0;
    hour++;
    hoursElement.textContent = `${String(minute)}`.padStart(2, 0);
  }
}

function pauseTimer() {
  clearInterval(timer);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  hoursElement.textContent = `00`;
  minutesElement.textContent = `00`;
  secondsElement.textContent = `00`;
  millisecondsElement.textContent = `00`;
  startButton.disabled = false;
}

function lapTime() {
  const h2Element = document.createElement("h2");
  const lapElement = document.createElement("p");
  const spanElement = document.createElement("span");
  spanElement.textContent = `Lap ${lap}: `;

  h2Element.textContent = "LAPS";
  spanElement.classList.add("span-lap");

  lapElement.textContent = `${spanElement.textContent} ${String(hour).padStart(
    2,
    0
  )}:${String(minute).padStart(2, 0)}:${String(second).padStart(2, 0)}:${String(
    millisecond
  ).padStart(2, 0)}`;

  if (lap === 1) {
    lapsElement.append(h2Element, lapElement);
  } else {
    lapsElement.appendChild(lapElement);
  }
  lapsElement.classList.remove("hidden");
  resetLaps.classList.remove("hidden");
  lap++;
}
