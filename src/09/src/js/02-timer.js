// Завдання 2 - таймер зворотного відліку
// Виконуй це завдання у файлах 02-timer.html і 02-timer.js. Напиши скрипт таймера, який здійснює зворотний відлік до певної дати. Такий таймер може використовуватися у блогах та інтернет-магазинах, сторінках реєстрації подій, під час технічного обслуговування тощо. Подивися демо-відео роботи таймера.

// Елементи інтерфейсу
// HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку, таймер повинен запускатися. Додай мінімальне оформлення елементів інтерфейсу.

// <input type="text" id="datetime-picker" />
// <button type="button" data-start>Start</button>

// <div class="timer">
//   <div class="field">
//     <span class="value" data-days>00</span>
//     <span class="label">Days</span>
//   </div>
//   <div class="field">
//     <span class="value" data-hours>00</span>
//     <span class="label">Hours</span>
//   </div>
//   <div class="field">
//     <span class="value" data-minutes>00</span>
//     <span class="label">Minutes</span>
//   </div>
//   <div class="field">
//     <span class="value" data-seconds>00</span>
//     <span class="label">Seconds</span>
//   </div>
// </div>

// Бібліотека flatpickr
// Використовуй бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу. Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import flatpickr from "flatpickr";
// // Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";

// Бібліотека очікує, що її ініціалізують на елементі input[type="text"], тому ми додали до HTML документу поле input#datetime-picker.

// <input type="text" id="datetime-picker" />

// Другим аргументом функції flatpickr(selector, options) можна передати необов'язковий об'єкт параметрів. Ми підготували для тебе об'єкт, який потрібен для виконання завдання. Розберися, за що відповідає кожна властивість в документації «Options», і використовуй його у своєму коді.

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// Вибір дати
// Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr. Саме у ньому варто обробляти дату, обрану користувачем. Параметр selectedDates - це масив обраних дат, тому ми беремо перший елемент.

// ✅ Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
// ✅ Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// ✅ Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
// ✅ Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.
// Відлік часу
// ✅ Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.

// Кількість днів може складатися з більше, ніж двох цифр.
// ✅ Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.
// НЕ БУДЕМО УСКЛАДНЮВАТИ
//✅ Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його - необхідно перезавантажити сторінку.

// ✅ Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// Форматування часу
//✅ Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. Зверни увагу, що вона не форматує результат. Тобто, якщо залишилося 4 хвилини або будь-якої іншої складової часу, то функція поверне 4, а не 04. В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів. Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.

// Бібліотека повідомлень
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix.

import iziToast from 'izitoast';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import '../css/02-timer.css';
const elements = {
  btnStart: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
changeDisabledBtn();
let ms = 0;
let nowTime = null;
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    nowTime = Date.now();
    const selectedTime = selectedDates[0].getTime();
    ms = selectedTime - nowTime;
    if (ms > 0) {
      elements.btnStart.disabled = false;
    } else {
      message('Please choose a date in the future');
      elements.btnStart.disabled = true;
    }
  },
};
const flp = flatpickr('#datetime-picker', options);
elements.btnStart.addEventListener('click', onClickStartBtn);
function onClickStartBtn() {
  timerId = setInterval(() => {
    ms -= 1000;
    renderTimerValue();
  }, 1000);

  changeDisabledBtn();
  changeDisabledInput();
}
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
function renderTimerValue() {
  if (ms <= 0) {
    clearInterval(timerId);
    changeDisabledInput();
    changeDisabledBtn();
    message('Timer has ended');
  }
  if (ms > 0) {
    convertMs(ms);
    elements.days.textContent = addLeadingZero(convertMs(ms).days);
    elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
    elements.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
    elements.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
  } else {
    elements.days.textContent = '00';
    elements.hours.textContent = '00';
    elements.minutes.textContent = '00';
    elements.seconds.textContent = '00';
  }
}
function changeDisabledBtn() {
  elements.btnStart.disabled = !elements.btnStart.disabled;
}
function changeDisabledInput() {
  elements.input.disabled = !elements.input.disabled;
}

function message(message) {
  alert(message);
}
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// const elements = {
//   btnStart: document.querySelector('[data-start]'),
//   input: document.querySelector('#datetime-picker'),
//   timerValues: document.querySelectorAll('.value')
// };

// let timerId;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const nowTime = Date.now();
//     const selectedTime = selectedDates[0].getTime();
//     const ms = selectedTime - nowTime;
//     elements.btnStart.disabled = ms <= 0;
//   },
// };

// flatpickr('#datetime-picker', options);

// elements.btnStart.addEventListener('click', () => {
//   if (!timerId) {
//     const endTime = new Date(elements.input.value).getTime();
//     if (!isNaN(endTime)) {
//       timerId = setInterval(() => {
//         const ms = endTime - Date.now();
//         if (ms <= 0) {
//           clearInterval(timerId);
//           timerId = null;
//         } else {
//           renderTimerValue(ms);
//         }
//       }, 1000);
//     }
//   }
// });

// function renderTimerValue(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   const values = [days, hours, minutes, seconds];
//   elements.timerValues.forEach((element, index) => {
//     element.textContent = addLeadingZero(values[index]);
//   });
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }
