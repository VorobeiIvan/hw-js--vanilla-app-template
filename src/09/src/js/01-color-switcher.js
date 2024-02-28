// Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. Подивися демо-відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

const elements = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const timeout = 1000;
let intervalID;

elements.startBtn.addEventListener('click', onClickStartBtn);

function onClickStartBtn() {
  toggleStartBtnDisabled();

  intervalID = setInterval(changeColor, timeout);

  elements.stopBtn.addEventListener('click', onClickStopBtn);
}
function onClickStopBtn() {
  toggleStartBtnDisabled();
  clearInterval(intervalID);

  elements.stopBtn.removeEventListener('click', onClickStopBtn);
}

function toggleStartBtnDisabled() {
  elements.startBtn.disabled = !elements.startBtn.disabled;
}
function changeColor() {
  elements.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
