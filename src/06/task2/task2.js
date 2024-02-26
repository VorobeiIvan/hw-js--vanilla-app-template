// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  ulEl.appendChild(liEl);
});
console.log(ulEl.innerHTML);
