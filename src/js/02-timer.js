import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

// const days = document.querySelector('span[data-value="days"]');
// const hours = document.querySelector('span[data-value="hours"]');
// const mins = document.querySelector('span[data-value="mins"]');
// const secs = document.querySelector('span[data-value="secs"]');
// const label = document.querySelectorAll('.label');
// let btnIsActive = (startBtn.disabled = false);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options);

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime
      const timeComponents = convertMs(deltaTime)
      console.log(timeComponents)
    }, 1000)

  }
}

// timer.start();
// startBtn.addEventListener('click', onStartTime);

// function onStartTime() {
//   updateTimer();
// }

// function updateTimer(date) {
//   (days.textContent = `${date.days}`),
//     (hours.textContent = `${date.hours}`),
//     (mins.textContent = `${date.mins}`),
//     (secs.textContent = `${date.secs}`);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
