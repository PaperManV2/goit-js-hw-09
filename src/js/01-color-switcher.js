function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let colorChanger = null;
let color;

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', '');
  btnStart.attribute;
  colorChanger = setInterval(() => {
    color = getRandomHexColor();

    body.style.backgroundColor = color;
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled');
  clearInterval(colorChanger);
});
