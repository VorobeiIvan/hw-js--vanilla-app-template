// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const createBTN = controlsEl.querySelector('[data-create]');
const destroyBTN = controlsEl.querySelector('[data-destroy]');
const inputElement = controlsEl.querySelector('input');

let amount = 0;
function handlerInput() {
  amount = parseInt(inputElement.value);
}

function createBoxes(amount) {
  cleaningDisplay();
  createMarkup(amount);
  cleaningInputValue();
}

function createMarkup(amount) {
  let widthValue = 30;
  let heightValue = 30;
  const step = 10;

  boxesEl.innerHTML = new Array(amount)
    .fill('')
    .map(() => {
      const color = getRandomHexColor();
      const boxMarkup = `<div style="background-color: ${color}; 
          width: ${(widthValue += step)}px;
          height: ${(heightValue += step)}px;">
       </div>`;
      return boxMarkup;
    })
    .join('');
}

function cleaningDisplay() {
  boxesEl.innerHTML = '';
}
function cleaningInputValue() {
  inputElement.value = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerCreateBTN() {
  createBoxes(amount);
}
function handlerDestroyBTN() {
  cleaningDisplay();
}

controlsEl.addEventListener('input', handlerInput);
createBTN.addEventListener('click', handlerCreateBTN);
destroyBTN.addEventListener('click', handlerDestroyBTN);
