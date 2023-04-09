function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

const INTERVAL_DELAY = 1000;
let intervalId = null;
startBtn.disabled = false;
stopBtn.disabled = true;

function onStartClick() {

  if (startBtn.disabled = false) {
    return;
  }

  intervalId = setInterval(callBackSetInterval, INTERVAL_DELAY);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopClick() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function callBackSetInterval() {
  return (body.style.backgroundColor = getRandomHexColor());
}

