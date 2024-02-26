// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counterValueDisplay = document.querySelector('#value');
const counterDecrementBTN = document.querySelector('[data-action="decrement"]');
const counterIncrementBTN = document.querySelector('[data-action="increment"]');

const handlerCounterDecrement = () => {
  if (counterValue > 0) {
    counterValue -= 1;
    counterValueDisplay.textContent = counterValue;
  }
};
const handlerCounterIncrement = () => {
  counterValue += 1;
  counterValueDisplay.textContent = counterValue;
};

counterDecrementBTN.addEventListener('click', handlerCounterDecrement);
counterIncrementBTN.addEventListener('click', handlerCounterIncrement);
