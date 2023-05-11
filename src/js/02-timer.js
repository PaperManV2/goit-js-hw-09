import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');
const DataInput = document.getElementById('datetime-picker');
let timeLeft;
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    timeLeft = selectedDates[0].getTime() - currentDate.getTime();
    if (selectedDates[0] <= currentDate) {
      Notiflix.Report.failure('Please choose a date in the future');
      btnStart.setAttribute('disabled', '');
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  }
  return value;
}

btnStart.addEventListener('click', () => {
  DataInput.setAttribute('disabled', '');

  btnStart.setAttribute('disabled', '');
  let value = convertMs(timeLeft);

  days.textContent = addLeadingZero(value.days);
  hours.textContent = addLeadingZero(value.hours);
  minutes.textContent = addLeadingZero(value.minutes);
  seconds.textContent = addLeadingZero(value.seconds);

  let counter = setInterval(() => {
    timeLeft = timeLeft - 1000;
    value = convertMs(timeLeft);

    if (timeLeft <= 0) {
      btnStart.removeAttribute('disabled');
      DataInput.removeAttribute('disabled');
      window.alert('Done');
      return clearInterval(counter);
    }

    days.textContent = addLeadingZero(value.days);
    hours.textContent = addLeadingZero(value.hours);
    minutes.textContent = addLeadingZero(value.minutes);
    seconds.textContent = addLeadingZero(value.seconds);
  }, 1000);
});

flatpickr(DataInput, options);
