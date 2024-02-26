// 4. Модуль 4 - Перебираючі методи масиву
// _______________________________________________________________________________
// _______________________________________________________________________________

// #region task1
console.log('%cTask1', 'color: green; font-weight: bold;');
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza();
const pointer = makePizza;

console.log('result', result);
console.log('pointer', pointer);

// #endregion
// #region task2
console.log('%cTask2', 'color: green; font-weight: bold;');
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."
function deliverPizza2(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza2(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage2(pizzaName, callback) {
  return callback(pizzaName);
}
console.log(makeMessage2('Royal Grand', makePizza2)); //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage2('Ultracheese', deliverPizza2)); // повертає рядок "Delivering Ultracheese pizza."

// #endregion
// #region task3
console.log('%cTask3', 'color: green; font-weight: bold;');
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

function makePizza3(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza3('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza3('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

//#endregion
// #region task4

console.log('%cTask4', 'color: green; font-weight: bold;');
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.
// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError) повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError) повертає "Error! There is no pizza with a name Vienna in the assortment."

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(
        `There is no pizza with a name ${pizzaName}in the assortment.`
      );
    } else {
      return onSuccess(pizzaName);
    }
  },
};
// Callback for onSuccess
function makePizza4(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError4(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza4, onOrderError4));
console.log(pizzaPalace.order('Four meats', makePizza4, onOrderError4));
console.log(pizzaPalace.order('Big Mike', makePizza4, onOrderError4));
console.log(pizzaPalace.order('Vienna', makePizza4, onOrderError4));

//#endregion
// #region task5
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask5', 'color: green; font-weight: bold;');

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(element => {
    totalPrice += element;
  });
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

//#endregion
// #region task6

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask6', 'color: green; font-weight: bold;');

function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(number => number > value && filteredNumbers.push(number));
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

//#endregion
// #region task7
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра (масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask7', 'color: green; font-weight: bold;');

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach(el => secondArray.includes(el) && commonElements.push(el));

  return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []

//#endregion
// #region task8
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask8', 'color: green; font-weight: bold;');

calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
console.log(calculateTotalPrice(5, 100)); // повертає 500
console.log(calculateTotalPrice(8, 60)); // повертає 480
console.log(calculateTotalPrice(3, 400)); // повертає 1200

//#endregion
// #region task9
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// У функції використане неявне повернення
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask9', 'color: green; font-weight: bold;');

calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
console.log(calculateTotalPrice(5, 100)); // повертає 500
console.log(calculateTotalPrice(8, 60)); // повертає 480
console.log(calculateTotalPrice(3, 400)); // повертає 1200

//#endregion
// #region task10
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask10', 'color: green; font-weight: bold;');

const calculateTotalPrice10 = orderedItems => {
  let totalPrice = 0;
  orderedItems.forEach(item => (totalPrice += item));
  return totalPrice;
};
console.log(calculateTotalPrice10([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice10([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice10([412, 371, 94, 63, 176])); // повертає 1116

//#endregion
// #region task11
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

console.log('%cTask11', 'color: green; font-weight: bold;');

const filterArray11 = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach(number => number > value && filteredNumbers.push(number));

  return filteredNumbers;
};
console.log(filterArray11([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray11([1, 2, 3, 4, 5], 4)); //повертає [5]
console.log(filterArray11([1, 2, 3, 4, 5], 5)); //повертає []
console.log(filterArray11([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
console.log(filterArray11([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]

//#endregion
// #region task12

// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна getCommonElements.
// Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
// Для перебирання масиву firstArray використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask12', 'color: green; font-weight: bold;');

const getCommonElements12 = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(
    element => secondArray.includes(element) && commonElements.push(element)
  );
  return commonElements;
};
console.log(getCommonElements12([1, 2, 3], [2, 4])); // повертає [2]
console.log(getCommonElements12([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
console.log(getCommonElements12([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
console.log(getCommonElements12([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
console.log(getCommonElements12([1, 2, 3], [10, 20, 30])); // повертає []

//#endregion
// #region task13
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask13', 'color: green; font-weight: bold;');

const changeEven = (numbers, value) => {
  const newNumbers = numbers.map(number =>
    number % 2 === 0 ? number + value : number
  );
  return newNumbers;
};
console.log(changeEven([1, 2, 3, 4, 5], 10)); // повертає новий масив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // повертає новий масив [144, 13, 81, 192, 136, 154]

//#endregion
// #region task14
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()
console.log('%cTask14', 'color: green; font-weight: bold;');

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = planets.map(planet => planet.length);

console.log('planetsLengths =>', planetsLengths);
//#endregion
// #region task15
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція
console.log('%cTask15', 'color: green; font-weight: bold;');

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log('titles = >', titles);

//#endregion
// #region task16
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()
console.log('%cTask16', 'color: green; font-weight: bold;');

const books1 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism'],
  },
];

const genres = books1.flatMap(book => book.genres);
console.log('genres', genres);

//#endregion
// #region task17
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask17', 'color: green; font-weight: bold;');

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log('getUserNames', getUserNames(users));

//#endregion
// #region task18
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask18', 'color: green; font-weight: bold;');

const getUserEmails = users => {
  return users.map(user => user.email);
};

console.log('getUserEmails', getUserEmails(users));

//#endregion
// #region task19
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()
console.log('%cTask19', 'color: green; font-weight: bold;');

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log('evenNumbers', evenNumbers);
console.log('oddNumbers', oddNumbers);

//#endregion
// #region task20
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()
console.log('%cTask20', 'color: green; font-weight: bold;');

const books20 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];
// Change code below this line
const allGenres = books20.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, i) => allGenres.indexOf(genre) === i
);
console.log('allGenres', allGenres);
console.log('uniqueGenres', uniqueGenres);
//#endregion
// #region task21
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

console.log('%cTask21', 'color: green; font-weight: bold;');
const books21 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log('topRatedBooks', topRatedBooks);
console.log('booksByAuthor', booksByAuthor);

//#endregion
// #region task22
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask22', 'color: green; font-weight: bold;');

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
console.log(getUsersWithEyeColor(users, 'green'));
console.log(getUsersWithEyeColor(users, 'brown'));

//#endregion
// #region task23
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask23', 'color: green; font-weight: bold;');

const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter(user => user.age >= minAge && user.age <= maxAge);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.log(getUsersWithAge(users, 80, 100));

//#endregion
// #region task24
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask24', 'color: green; font-weight: bold;');

const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
console.log(getUsersWithFriend(users, 'Adrian Cross'));
console.log('users', users);

//#endregion
// #region task25
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask25', 'color: green; font-weight: bold;');

const getFriends = users => {
  const allUserFriends = users.flatMap(user => user.friends);
  const uniqueFriends = allUserFriends.filter(
    (friend, index, arrayAllUserFriends) =>
      arrayAllUserFriends.indexOf(friend) === index
  );
  return uniqueFriends;
};
console.log(users);
console.log(getFriends(users));

//#endregion
// #region task26
// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask26', 'color: green; font-weight: bold;');

const getActiveUsers = users => users.filter(user => user.isActive === true);
console.log(getActiveUsers(users));

//#endregion
// #region task27
// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.

// Оголошена змінна getInactiveUsers.
// Змінній getInactiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Moore Hensley, Ross Vazquez і Blackburn Dotson
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask27', 'color: green; font-weight: bold;');

const getInactiveUsers = users => users.filter(user => user.isActive === false);
console.log(getInactiveUsers(users));

//#endregion
// #region task28
// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()
console.log('%cTask28', 'color: green; font-weight: bold;');

const books28 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR28 = 'Robert Sheckley';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR28);

console.log('bookWithTitle28', bookWithTitle);
console.log('bookByAuthor28', bookByAuthor);

//#endregion
// #region task29
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// Оголошена функція getUserWithEmail(users, email)

// Для перебирання параметра users використовується метод find()

// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony

// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head

// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson

// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined

// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask29', 'color: green; font-weight: bold;');

const getUserWithEmail = (users, email) =>
  users.filter(user => user.email === email);
console.log(
  'getUserWithEmail',
  getUserWithEmail(users, 'shereeanthony@kog.com')
);
console.log('getUserWithEmail', getUserWithEmail(users, 'elmahead@omatom.com'));
console.log(
  'getUserWithEmail',
  getUserWithEmail(users, 'blackburndotson@furnigeer.com')
);

//#endregion
// #region task30
// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна eachElementInFirstIsEven
// Значення змінної eachElementInFirstIsEven - це буль true
// Оголошена змінна eachElementInFirstIsOdd
// Значення змінної eachElementInFirstIsOdd - це буль false
// Оголошена змінна eachElementInSecondIsEven
// Значення змінної eachElementInSecondIsEven - це буль false
// Оголошена змінна eachElementInSecondIsOdd
// Значення змінної eachElementInSecondIsOdd - це буль true
// Оголошена змінна eachElementInThirdIsEven
// Значення змінної eachElementInThirdIsEven - це буль false
// Оголошена змінна eachElementInThirdIsOdd
// Значення змінної eachElementInThirdIsOdd - це буль false
// Для перебирання масивів використаний метод every()
console.log('%cTask30', 'color: green; font-weight: bold;');

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

console.log('eachElementInFirstIsEven', eachElementInFirstIsEven);
console.log('eachElementInFirstIsOdd', eachElementInFirstIsOdd);
console.log('eachElementInSecondIsEven', eachElementInSecondIsEven);
console.log('eachElementInSecondIsOdd', eachElementInSecondIsOdd);
console.log('eachElementInThirdIsEven', eachElementInThirdIsEven);
console.log('eachElementInThirdIsOdd', eachElementInThirdIsOdd);

//#endregion
// #region task31
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask31', 'color: green; font-weight: bold;');

const isEveryUserActive = users => users.every(user => user.isActive === true);
console.log('isEveryUserActive', isEveryUserActive(users));

//#endregion
// #region task32
// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна anyElementInFirstIsEven
// Значення змінної anyElementInFirstIsEven - це буль true
// Оголошена змінна anyElementInFirstIsOdd
// Значення змінної anyElementInFirstIsOdd - це буль false
// Оголошена змінна anyElementInSecondIsEven
// Значення змінної anyElementInSecondIsEven - це буль false
// Оголошена змінна anyElementInSecondIsOdd
// Значення змінної anyElementInSecondIsOdd - це буль true
// Оголошена змінна anyElementInThirdIsEven
// Значення змінної anyElementInThirdIsEven - це буль true
// Оголошена змінна anyElementInThirdIsOdd
// Значення змінної anyElementInThirdIsOdd - це буль true
// Для перебирання масивів використаний метод some()
console.log('%cTask32', 'color: green; font-weight: bold;');

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

console.log('anyElementInFirstIsEven', anyElementInFirstIsEven);
console.log('anyElementInFirstIsOdd', anyElementInFirstIsOdd);
console.log('anyElementInSecondIsEven', anyElementInSecondIsEven);
console.log('anyElementInSecondIsOdd', anyElementInSecondIsOdd);
console.log('anyElementInThirdIsEven', anyElementInThirdIsEven);
console.log('anyElementInThirdIsOdd', anyElementInThirdIsOdd);

//#endregion
// #region task33
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.

// Оголошена функція isAnyUserActive(users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask33', 'color: green; font-weight: bold;');

const isAnyUserActive = users => users.some(user => user.isActive === true);

console.log('isAnyUserActive', isAnyUserActive(users));

//#endregion
// #region task34
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив [1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime
// Значення змінної averagePlayTime - це число 673
console.log('%cTask34', 'color: green; font-weight: bold;');

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acum, playtime) => acum + playtime, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log('playtimes', playtimes);
console.log('totalPlayTime', totalPlayTime);
console.log('averagePlayTime', averagePlayTime);

//#endregion
// #region task35
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

console.log('%cTask35', 'color: green; font-weight: bold;');
const players1 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = players1.reduce(
  (total, player) => (total += player.playtime / player.gamesPlayed),
  0
);

console.log('totalAveragePlaytimePerGame', totalAveragePlaytimePerGame);

//#endregion
// #region task36
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.

// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

console.log('%cTask36', 'color: green; font-weight: bold;');
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => (totalBalance += user.balance), 0);
console.log('calculateTotalBalance', calculateTotalBalance(users));

//#endregion
// #region task37
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

console.log('%cTask37', 'color: green; font-weight: bold;');

const getTotalFriendCount = users =>
  users.reduce((total, user) => (total += user.friends.length), 0);

console.log('getTotalFriendCount', getTotalFriendCount(users));

//#endregion
// #region task38
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()
console.log('%cTask38', 'color: green; font-weight: bold;');

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

console.log('releaseDates', releaseDates);
console.log('authors', authors);

console.log('ascendingReleaseDates', ascendingReleaseDates);
console.log('alphabeticalAuthors', alphabeticalAuthors);

//#endregion
// #region task39
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()
console.log('%cTask39', 'color: green; font-weight: bold;');

const releaseDates39 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates39 = [...releaseDates39].sort((a, b) => a - b);
const descendingReleaseDates39 = [...releaseDates39].sort((a, b) => b - a);
console.log('releaseDates39', releaseDates39);
console.log('ascendingReleaseDates39', ascendingReleaseDates39);
console.log('descendingReleaseDates', descendingReleaseDates39);

//#endregion
// #region task40
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод sort()
console.log('%cTask40', 'color: green; font-weight: bold;');

const authors40 = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];

const authorsInAlphabetOrder = [...authors40].sort((a, b) =>
  a.localeCompare(b)
);
const authorsInReversedOrder = [...authors40].sort((a, b) =>
  b.localeCompare(a)
);

console.log('authors', authors40);
console.log('authorsInAlphabetOrder', authorsInAlphabetOrder);
console.log('authorsInReversedOrder', authorsInReversedOrder);
//#endregion
// #region task41
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()
console.log('%cTask41', 'color: green; font-weight: bold;');

const books41 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const sortedByAuthorName = [...books41].sort((a, b) =>
  a.author.localeCompare(b.author)
);
const sortedByReversedAuthorName = [...books41].sort((a, b) =>
  b.author.localeCompare(a.author)
);
const sortedByAscendingRating = [...books41].sort(
  (a, b) => a.rating - b.rating
);
const sortedByDescentingRating = [...books41].sort(
  (a, b) => b.rating - a.rating
);

console.log('books41', books41);
console.log('sortedByAuthorName', sortedByAuthorName);
console.log('sortedByReversedAuthorName', sortedByReversedAuthorName);
console.log('sortedByAscendingRating', sortedByAscendingRating);
console.log('sortedByDescentingRating', sortedByDescentingRating);

//#endregion
// #region task42

// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).

// Оголошена змінна sortByAscendingBalance
// Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за зростанням їх балансу
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// Для перебирання параметра users використаний метод sort()
console.log('%cTask42', 'color: green; font-weight: bold;');

const sortByAscendingBalance = users =>
  users.sort((a, b) => a.balance - b.balance);

console.log('sortByAscendingBalance', sortByAscendingBalance(users));

//#endregion
// #region task43
// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask43', 'color: green; font-weight: bold;');

const sortByDescendingFriendCount = users =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);

console.log('sortByDescendingFriendCount', sortByDescendingFriendCount(users));
//#endregion
// #region task44
// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// Оголошена змінна sortByName
// Змінній sortByName присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за ім'ям в алфавітному порядку
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask44', 'color: green; font-weight: bold;');

const sortByName = users =>
  [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log('sortByName', sortByName(users));

//#endregion
// #region task45
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort

console.log('%cTask45', 'color: green; font-weight: bold;');
const books45 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books45
  .filter(book => book.rating >= MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((a, b) => a.localeCompare(b));

console.log('names', names);
//#endregion
// #region task46
// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

// Оголошена змінна getNamesSortedByFriendCount
// Змінній getNamesSortedByFriendCount присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('%cTask46', 'color: green; font-weight: bold;');

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];


  const getNamesSortedByFriendCount = users => 
  [...users].sort((a,b)=>a.friends.length-b.friends.length).map(({name})=>name)

  console.log('getNamesSortedByFriendCount', getNamesSortedByFriendCount(users))

//#endregion
//#region task47
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// Оголошена змінна getSortedFriends
// Змінній getSortedFriends присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

console.log('%cTask47', 'color: green; font-weight: bold;');
const users47=[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const getSortedFriends = users => 
users.flatMap(({friends})=>friends)
.filter((friend,index,arr)=>arr.indexOf(friend)===index)
.sort((a, b) => a.localeCompare(b));
console.log('users', users47) 
console.log('getSortedFriends', getSortedFriends(users47))
//#endregion
//#region task48
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

console.log('%cTask48', 'color: green; font-weight: bold;');

const getTotalBalanceByGender = (users, gender) => users.filter(user=>user.gender===gender).reduce((total,user)=>total+=user.balance,0)

console.log('getTotalBalanceByGender', getTotalBalanceByGender(users, "male"))
console.log('getTotalBalanceByGender', getTotalBalanceByGender(users, "female"))
//#endregion
