// <script type="module" src="../01/page-1.js"></script>; - підключення JS в html.type="module" - оболонка.

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = ' Привіт';
const isOpen = true;
const shouldConfirm = false;

// іменування змінних - іменник (хто?,що?)
// іменування констант бульових значень -  (що зробити?)
console.log('totalPrice', totalPrice); // метод виводу в консоль
const type = typeof totalPrice; // оператор типу. повертає значення типу

// alert('Message'); // вспливаюче модальне вікно-повідомлення. (синхронний код)

// const shouldRenew = confirm('Хочете продовжити підписку'); // метод запиту, повертає true (ok), false (cencel)
// console.log(shouldRenew); // виведе результат вибора з модалки

// let quantity = prompt('Введіть кількість товарів'); // модалка з інпутом для введення значення. повертає null(cancel), string (ok)

// quantity = Number(quantity); // Number - метод для переведення значення в число
// console.log(quantity);

let elementWidth = '50px';
const result1 = Number.parseInt(elementWidth); // parseInt парсить ціле чисо
console.log(result1);

let elementHeight = '208.74px';
elementHeight = Number.parseFloat(elementHeight); // парсить дробне число (з крапкою, 20.7)

let salary = 1380.1672;
console.log('salary', salary.toFixed(2));
// toFix, повертає рядок, відсікає визнвчену кількість символів після крапки. НЕ ОКРУГЛЮЄ
salary = Number(salary.toFixed(2)); // переведення значення до числа

// Nan  - для перевірок. не число
// infinity - безкінечність

console.log(Math.PI); //  об'єкт Math набір методів та свойств для математичних виразів

const base = 2;
const power = 5;
const result2 = Math.pow(base, power); // зведення до степені bese- число яке зводиться до степені, power -степінь

console.log('result2', result2);
console.log(2 ** 5); // ** оператор експонента. аналогічний результат Math.pow (2,5)

//Задача
// Напишискрипт який просить користувача ввести число і степінь, зводить число в степінь і виводить результат

// let number = prompt('Введіть число');
// number = Number(number);
// console.log('number', number);

// let degree = prompt('Введіть степінь');
// degree = Number(degree);
// console.log('degree', degree);

// const result = number ** degree;
// console.log('result', result);
// alert(`Результат: ${result}`);

const max = 50;
const min = 30;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result); // генерація рандомного числа в діапазоні від 30 до 50 та округлення
