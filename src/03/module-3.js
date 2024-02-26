// 3. Модуль 3 – Об'єкти. Операції rest та spread
// _______________________________________________________________________________
// _______________________________________________________________________________

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив["premium", "promoted", "top"]

console.log('%cTask1', 'color: green; font-weight: bold;');
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
console.log('apartment=>', apartment);

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

console.log('%cTask2', 'color: green; font-weight: bold;');

const owner = {
  name: 'Henry',
  phone: '982-126-1588',
  email: 'henry.carter@aptmail.com',
};
apartment.owner = owner;

console.log('apartment =>', apartment);

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]
console.log('%cTask3', 'color: green; font-weight: bold;');

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

console.log('aptRating = ', aptRating);
console.log('aptDescr = ', aptDescr);
console.log('aptPrice = ', aptPrice);
console.log('aptTags = ', aptTags);

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// Оголошена змінна apartment за допомогою const
// Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
// Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
// Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
// Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
// Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
// Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
//     Значення змінної lastTag - це "top"

console.log('%cTask4', 'color: green; font-weight: bold;');
const tagsLength = apartment.tags.length;
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = tagsLength;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[tagsLength - 1];

console.log('ownerName = ', ownerName);
console.log('ownerPhone = ', ownerPhone);
console.log('ownerEmail = ', ownerEmail);
console.log('numberOfTags = ', numberOfTags);
console.log('firstTag = ', firstTag);
console.log('lastTag = ', lastTag);

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

console.log('%cTask5', 'color: green; font-weight: bold;');

const aptRating1 = apartment['rating'];
const aptDescr1 = apartment['descr'];
const aptPrice1 = apartment['price'];
const aptTags1 = apartment['tags'];

console.log('aptRating1 = ', aptRating1);
console.log('aptDescr1 = ', aptDescr1);
console.log('aptPrice1 = ', aptPrice1);
console.log('aptTags1 = ', aptTags1);

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив ["premium", "promoted", "top", "trusted"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

console.log('%cTask6', 'color: green; font-weight: bold;');
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

console.log('apartment =>', apartment);

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
console.log('%cTask7', 'color: green; font-weight: bold;');
apartment.area = 60;
apartment.rooms = 3;
apartment.location = { country: 'Jamaica', city: 'Kingston' };

console.log('apartment =>', apartment);

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив["on sale", "trending", "best buy"]
console.log('%cTask8', 'color: green; font-weight: bold;');

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

console.log('product =>', product);

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

console.log('%cTask9', 'color: green; font-weight: bold;');
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};

console.log('credentials =>', credentials);

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153]

console.log('%cTask10', 'color: green; font-weight: bold;');
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log('keys =', keys);
console.log('values =', values);

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].

console.log('%cTask11', 'color: green; font-weight: bold;');
const keys1 = [];
const values1 = [];
const advert1 = {
  service: 'apt',
};
const apartment1 = Object.create(advert1);
apartment1.descr1 = 'Spacious apartment in the city center';
apartment1.rating1 = 4;
apartment1.price1 = 2153;

for (const key in apartment1) {
  if (apartment1.hasOwnProperty(key)) {
    keys1.push(key);
    values1.push(apartment1[key]);
  }
}

console.log('keys1 = ', keys1);
console.log('values1 = ', values1);

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
console.log('%cTask12', 'color: green; font-weight: bold;');

function countProps(object) {
  let propCount = 0;
  const array = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      array.push(key);
      propCount = array.length;
    }
  }

  return propCount;
}

console.log(countProps({})); // повертає 0
console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

console.log('%cTask13', 'color: green; font-weight: bold;');

const apartment2 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const values2 = [];
const keys2 = Object.keys(apartment2);

for (const key of keys2) {
  values2.push(apartment2[key]);
}
console.log('keys =', keys2);
console.log('values2 =', values2);

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

console.log('%cTask14', 'color: green; font-weight: bold;');

function countProps2(object) {
  return Object.keys(object).length;
}

console.log(countProps2({})); // повертає 0
console.log(countProps2({ name: 'Mango', age: 2 })); // повертає 2
console.log(countProps2({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

console.log('%cTask15', 'color: green; font-weight: bold;');
const apartment15 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys15 = Object.keys(apartment15);
const values15 = Object.values(apartment15);
console.log('keys15', keys15);
console.log('values15', values15);

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

console.log('%cTask16', 'color: green; font-weight: bold;');
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const allSalarys = Object.values(salaries);
  for (const salarie of allSalarys) {
    totalSalary += salarie;
  }
  return totalSalary;
}
console.log(countTotalSalary({})); // повертає 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //повертає 400

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

console.log('%cTask17', 'color: green; font-weight: bold;');

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log('hexColors', hexColors);
console.log('rgbColors', rgbColors);

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

console.log('%cTask18', 'color: green; font-weight: bold;');

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let price = null;
  for (const product of products) {
    if (product.name === productName) return (price = product.price);
  }
  return price;
}

console.log(getProductPrice('Radar')); // повертає 1300.
console.log(getProductPrice('Grip')); // повертає 1200.
console.log(getProductPrice('Scanner')); // повертає 2700.
console.log(getProductPrice('Droid')); // повертає 400.
console.log(getProductPrice('Engine')); // повертає null.

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
console.log('%cTask19', 'color: green; font-weight: bold;');

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

function getAllPropValues(propName) {
  let propValues = [];

  for (const product of products) {
    product.hasOwnProperty(propName) && propValues.push(product[propName]);
  }
  return propValues;
}

console.log(getAllPropValues('name')); // повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); // повертає [4, 3, 7, 9]
console.log(getAllPropValues('price')); // повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // повертає[]

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)

console.log('%cTask20', 'color: green; font-weight: bold;');
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

function calculateTotalPrice(productName) {
  let total = 0;
  for (const product of products) {
    productName === product.name && (total = product.price * product.quantity);
  }
  return total;
}
console.log(calculateTotalPrice('Blaster')); // повертає 0
console.log(calculateTotalPrice('Radar')); // повертає 5200
console.log(calculateTotalPrice('Droid')); // повертає 2800
console.log(calculateTotalPrice('Grip')); //повертає 10800
console.log(calculateTotalPrice('Scanner')); //повертає 8100

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures
console.log('%cTask21', 'color: green; font-weight: bold;');

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow } = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log('yesterday', yesterday);
console.log('today', today);
console.log('tomorrow', tomorrow);
console.log('meanTemperature', meanTemperature);

// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

console.log('%cTask22', 'color: green; font-weight: bold;');
const highTemperatures1 = {
  yesterday1: 28,
  today1: 26,
  tomorrow1: 33,
};

const {
  yesterday1,
  today1,
  tomorrow1,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures1;

const meanTemperature1 = (yesterday1 + today1 + tomorrow1) / 3;
console.log('yesterday1', yesterday1);
console.log('today1', today1);
console.log('tomorrow1', tomorrow1);
console.log('meanTemperature1', meanTemperature1);

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об'єкта

console.log('%cTask23', 'color: green; font-weight: bold;');
const highTemperatures23 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday23,
  today: highToday23,
  tomorrow: highTomorrow23,
  highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures23;

const meanTemperature23 = (highYesterday23 + highToday23 + highTomorrow23) / 3;

console.log('highYesterday23', highYesterday23);
console.log('highToday23', highToday23);
console.log('highTomorrow23', highTomorrow23);
console.log('highIcon', highIcon);
console.log('highTemperatures23', highTemperatures23);

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебирання масиву використовується цикл for...of
// В циклі for...of використовується деструктуризація об'єкта

console.log('%cTask24', 'color: green; font-weight: bold;');
const colors1 = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors1 = [];
const rgbColors1 = [];

for (const { hex, rgb } of colors) {
  hexColors1.push(hex);
  rgbColors1.push(rgb);
}

console.log('hexColors1', hexColors1);
console.log('rgbColors1', rgbColors1);

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

console.log('%cTask25', 'color: green; font-weight: bold;');
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    high: highToday,
    low: lowToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    high: highTomorrow,
    low: lowTomorrow,
    tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;
console.log('highToday', highToday);
console.log('lowToday', lowToday);
console.log('todayIcon', todayIcon);
console.log('highTomorrow', highTomorrow);
console.log('lowTomorrow', lowTomorrow);
console.log('tomorrowIcon', tomorrowIcon);
console.log('forecast', forecast);

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
console.log('%cTask26', 'color: green; font-weight: bold;');

function calculateMeanTemperature({
  today: { low: todayLow, high: todayHigh },
  tomorrow: { low: tomorrowLow, high: tomorrowHigh },
}) {
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
); // повертає 28.5
console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
); // повертає 37

// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// Оголошена змінна scores
// Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

console.log('%cTask27', 'color: green; font-weight: bold;');
const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
console.log('bestScore', bestScore);
console.log('worstScore', worstScore);

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив [64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

console.log('%cTask28', 'color: green; font-weight: bold;');
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore1 = Math.max(...allScores);
const worstScore1 = Math.min(...allScores);
console.log('allScores', allScores);
console.log('bestScore1', bestScore1);
console.log('worstScore1', worstScore1);

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується синтаксис ...

console.log('%cTask29', 'color: green; font-weight: bold;');
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings.theme); //дорівнює "light"
console.log(finalSettings.public); // дорівнює "false"
console.log(finalSettings.withPassword); // дорівнює "true"
console.log(finalSettings.minNumberOfQuestions); // дорівнює 10
console.log(finalSettings.timePerQuestion); // дорівнює 30
console.log('finalSettings', finalSettings);

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// Оголошена функція makeTask(data)
console.log('%cTask30', 'color: green; font-weight: bold;');

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  const newObjectTask = {
    completed,
    category,
    priority,
    ...data,
  };
  return newObjectTask;
  //   return { category, priority, completed, ...data };
}
console.log(makeTask({})); //повертає { category: "General", priority: "Normal", completed: false }
console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  })
); // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
console.log(makeTask({ category: 'Finance', text: 'Take interest' })); // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' })); // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
console.log(makeTask({ text: 'Buy bread' })); //повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.
// Оголошена функція add
// Функція add використовує параметр args
// Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)

console.log('%cTask31', 'color: green; font-weight: bold;');

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(15, 27)); // повертає 42
console.log(add(12, 4, 11, 48)); // повертає 75
console.log(add(32, 6, 13, 19, 8)); // повертає 78
console.log(add(74, 11, 62, 46, 12, 36)); // повертає 241

// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// Оголошена функція addOverNum()
console.log('%cTask32', 'color: green; font-weight: bold;');

function addOverNum(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    args[0] < args[i] && (total += args[i]);
  }

  return total;
}
console.log(addOverNum(50, 15, 27)); // повертає 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // повертає 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //повертає 218

// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// Оголошена функція findMatches()
console.log('%cTask33', 'color: green; font-weight: bold;');

function findMatches(...args) {
  const matches = []; // Don't change this line

  for (const argMain of args) {
    for (const arg of [...args[0]]) {
      arg === argMain && matches.push(arg);
    }
  }

  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // повертає [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // повертає [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //повертає [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // повертає[]

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.
// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт
// Значення властивості bookShelf.getBooks - це метод об'єкта
// Значення властивості bookShelf.addBook - це метод об'єкта
// Значення властивості bookShelf.removeBook - це метод об'єкта
// Значення властивості bookShelf.updateBook - це метод об'єкта

console.log('%cTask34', 'color: green; font-weight: bold;');

const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.getBooks()); // повертає рядок "Returning all books"
console.log(bookShelf.addBook('Haze')); //  повертає рядок "Adding book Haze"
console.log(bookShelf.removeBook('Red sunset')); // повертає рядок "Deleting book Red sunset"
console.log(bookShelf.updateBook('Sands of dune', 'Dune')); //  повертає рядок "Updating book Sands of dune to Dune"

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт
// Значення властивості bookShelf.updateBook - це метод об'єкта

console.log('%cTask35', 'color: green; font-weight: bold;');
const bookShelf1 = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const indexBook = this.books.indexOf(oldName);
    this.books.splice(indexBook, 1, newName);

    return (
      console.log('books', this.books), `Updating book ${oldName} to ${newName}`
    );
  },
};
console.log(bookShelf1.updateBook('Haze', 'Dungeon chronicles')); // значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
console.log(bookShelf1.updateBook('The last kingdom', 'Dune')); //, значення властивості books - це масив ["Dune", "Dungeon chronicles", "The guardian of dreams"]

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив[]

console.log('%cTask36', 'color: green; font-weight: bold;');
const atTheOldToad = {
  potions: [],
};
console.log('atTheOldToad', atTheOldToad);

// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.getPotions - це метод об'єкта

console.log('%cTask37', 'color: green; font-weight: bold;');
const atTheOldToad1 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};
console.log(atTheOldToad1.getPotions()); // повертає["Speed potion", "Dragon breath", "Stone skin"]

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// Після другого виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

console.log('%cTask38', 'color: green; font-weight: bold;');
const atTheOldToad3 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    return this.potions.push(potionName);
  },
};
console.log(
  'result',
  atTheOldToad3.addPotion('Invisibility'),
  atTheOldToad3.potions
); //, у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
console.log(
  'result',
  atTheOldToad3.addPotion('Power potion'),
  atTheOldToad3.potions
); //, у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив ["Speed potion", Stone skin"]
// Після другого виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив ["Stone skin"]

console.log('%cTask39', 'color: green; font-weight: bold;');

const atTheOldToad4 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);
  },
};

console.log('atTheOldToad.potions', atTheOldToad4.potions);
atTheOldToad4.removePotion('Dragon breath');
console.log('result', atTheOldToad4.potions); //, у властивості potions буде масив ["Speed potion", Stone skin"]
atTheOldToad4.removePotion('Speed potion');
console.log('result', atTheOldToad4.potions); //, у властивості potions буде масив ["Stone skin"]

// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив["Speed potion", "Polymorth", "Invisibility"]

console.log('%cTask40', 'color: green; font-weight: bold;');
const atTheOldToad5 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);
  },
};
console.log('atTheOldToad5.potions', atTheOldToad5.potions);

atTheOldToad5.updatePotionName('Dragon breath', 'Polymorth');
console.log('result1', atTheOldToad5.potions);
atTheOldToad5.updatePotionName('Stone skin', 'Invisibility');
console.log('result2', atTheOldToad5.potions);

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає рядок "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає рядок "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

console.log('%cTask41', 'color: green; font-weight: bold;');
const atTheOldToadN = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
    return `Potion ${newPotion.name} has been added to your inventory!`;
  },

  removePotion(potionName) {
    const index = this.potions.findIndex(potion => potion.name === potionName);
    if (index !== -1) {
      this.potions.splice(index, 1);
      return `Potion ${potionName} has been removed from your inventory!`;
    }
    return `Error! Potion ${potionName} is not in your inventory!`;
  },

  updatePotionName(oldName, newName) {
    const potion = this.potions.find(potion => potion.name === oldName);
    if (potion) {
      potion.name = newName;
      return `Potion name has been updated from ${oldName} to ${newName}!`;
    }
    return `Error! Potion ${oldName} is not in your inventory!`;
  },
};

console.log(
  'result1:',
  atTheOldToadN.removePotion('Dragon breath'),
  atTheOldToadN.potions
);
console.log(
  'result2:',
  atTheOldToadN.removePotion('Speed potion'),
  atTheOldToadN.potions
);
console.log(
  'result3:',
  atTheOldToadN.updatePotionName('Dragon breath', 'Polymorth'),
  atTheOldToadN.potions
);
console.log(
  'result4:',
  atTheOldToadN.updatePotionName('Stone skin', 'Invulnerability potion'),
  atTheOldToadN.potions
);
