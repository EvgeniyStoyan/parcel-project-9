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
let btnIsActive = (startBtn.disabled = false);

function onStartClick() {

  if (btnIsActive) {
    return;
  }

  intervalId = setInterval(callBackSetInterval, INTERVAL_DELAY);

  btnIsActive = true;

  console.log("ghjhjh")
}

function onStopClick() {
  clearInterval(intervalId);
  btnIsActive = false;
}

function callBackSetInterval() {
  return (body.style.backgroundColor = getRandomHexColor());
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const body = document.querySelector('body');
// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');

// startBtn.addEventListener('click', onStartClick);
// stopBtn.addEventListener('click', onStopClick);

// let intervalId = null;
// let btnIsActive = false;

// function onStartClick() {
//   if (btnIsActive) {
//     return;
//   }

//   intervalId = setInterval(callBackSetInterval, 1000);

//   btnIsActive = true;
// }

// function onStopClick() {
//   clearInterval(intervalId);
//   btnIsActive = false;
// }

// function callBackSetInterval() {
//   return (body.style.backgroundColor = getRandomHexColor());
// }
