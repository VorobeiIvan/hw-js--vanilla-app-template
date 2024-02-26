// 2. Модуль 2 - Масиви. Функції
// _______________________________________________________________________________
// _______________________________________________________________________________

// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=

console.log('%cTask1', 'color: green; font-weight: bold;');
console.log(checkAge(20)); // повертає "You are an adult"
console.log(checkAge(8)); // повертає "You are a minor"
console.log(checkAge(14)); // повертає "You are a minor"
console.log(checkAge(38)); // повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if
function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  }

  return 'You are a minor';
}

// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
// Оголошена функція checkPassword(password)

console.log('%cTask12', 'color: green; font-weight: bold;');

console.log(checkPassword('mangohackzor')); // повертає "Access denied, wrong password!"
console.log(checkPassword('polyhax')); // повертає "Access denied, wrong password!"
console.log(checkPassword('jqueryismyjam')); // повертає "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }

  return 'Access denied, wrong password!';
}

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
console.log('%cTask3', 'color: green; font-weight: bold;');

console.log(checkStorage(100, 50)); // повертає "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // повертає "Your order is too large, not enough goods in stock!"
console.log(checkStorage(70, 0)); // повертає "Your order is empty!"
console.log(checkStorage(200, 20)); // повертає "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)); // повертає "Your order is too large, not enough goods in stock!"
console.log(checkStorage(150, 0)); // повертає "Your order is empty!"

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  } else if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
}

//   Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

console.log('%cTask4', 'color: green; font-weight: bold;');
let fruits = ['apple', 'plum', 'pear', 'orange'];

console.log(fruits); // - це масив ["apple", "plum", "pear", "orange"]

//   Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
// Ім'я змінної	Значення змінної
console.log('%cTask5', 'color: green; font-weight: bold;');
const firstElement = fruits[0]; //перший елемент масиву
const secondElement = fruits[1]; //другий елемент масиву
let lastElement = fruits[fruits.length - 1]; //останній елемент масиву
// Оголошена змінна firstElement
console.log(firstElement); // - це рядок "apple"
// Оголошена змінна secondElement
console.log(secondElement); // - це рядок "plum"
// Оголошена змінна lastElement
console.log(lastElement); // - це рядок "orange"

// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
// Оголошена змінна fruits
console.log('%cTask6', 'color: green; font-weight: bold;');
fruits[1] = 'peach';
fruits[3] = 'banana';

console.log(fruits); // - це масив ["apple", "peach", "pear", "banana"]

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// Оголошена змінна fruitsArrayLength
console.log('%cTask7', 'color: green; font-weight: bold;');

function fruitsArrayLength() {
  return fruits.length;
}
console.log(fruitsArrayLength()); // - це число 4

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення

console.log('%cTask8', 'color: green; font-weight: bold;');
const lastElementIndex = fruits.length - 1; //Індекс останнього елемента масиву fruits через довжина_масиву - 1
lastElement = fruits[fruits.length - 1]; // Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
console.log(lastElementIndex); //  - це число 3
// Оголошена змінна lastElement
console.log(lastElement); //  - це рядок "banana"

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
console.log('%cTask9', 'color: green; font-weight: bold;');
console.log(getExtremeElements([1, 2, 3, 4, 5])); //  повертає [1, 5]
console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); //  повертає ["Earth", "Venus"]
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); //  повертає ["apple", "banana"]

function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}

//   Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.
// Оголошена функція splitMessage(message, delimiter)
console.log('%cTask10', 'color: green; font-weight: bold;');
console.log(splitMessage('Mango hurries to the train', ' ')); //  повертає ["Mango", "hurries", "to", "the", "train"]
console.log(splitMessage('Mango', '')); //  повертає ["M", "a", "n", "g", "o"]
console.log(splitMessage('best_for_week', '_')); //  повертає ["best", "for", "week"]

function splitMessage(message, delimiter) {
  let words;
  return (words = [message.split(delimiter)]);
}

//   Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
console.log('%cTask11', 'color: green; font-weight: bold;');
console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); //  повертає 50
console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // повертає 100
console.log(calculateEngravingPrice('Web-development is creative work', 40)); //  повертає 160
console.log(calculateEngravingPrice('Web-development is creative work', 20)); // повертає 80

function calculateEngravingPrice(message, pricePerWord) {
  let numberOfSymbols = message.split(' ');
  let totalPrice = pricePerWord * numberOfSymbols.length;
  return totalPrice;
}

//  Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
console.log('%cTask12', 'color: green; font-weight: bold;');
console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
); // повертає "Mango hurries to the train"
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // повертає "Mango"
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // повертає "top_picks_for_you"

function makeStringFromArray(array, delimiter) {
  let string;

  return (string = array.join(delimiter));
}

//  Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
console.log('%cTask13', 'color: green; font-weight: bold;');
console.log(slugify('Arrays for begginers')); //  повертає "arrays-for-begginers"
console.log(slugify('English for developer')); // повертає "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); //  повертає "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); //  повертає "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
  let slug = title.toLowerCase().split(' ').join('-');
  return slug;
}

//  Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

//  firstTwoEls - масив із перших двох елементів
//  nonExtremeEls - масив з усіх елементів, крім першого та останнього
//  lastThreeEls - масив із трьох останніх елементів
//  Оголошена змінна fruits
console.log('%cTask14', 'color: green; font-weight: bold;');

fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(fruits.length - 3);

console.log(fruits); //  - це масив ["apple", "plum", "pear", "orange", "banana"]
//  Оголошена змінна firstTwoEls
console.log(firstTwoEls); //  - це масив ["apple", "plum"]
//  Оголошена змінна nonExtremeEls
console.log(nonExtremeEls); //  - це масив ["plum", "pear", "orange"]
//  Оголошена змінна lastThreeEls
console.log(lastThreeEls); //  - це масив ["pear", "orange", "banana"]
//  Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

//  Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

//  Оголошена змінна oldClients
console.log('%cTask15', 'color: green; font-weight: bold;');
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(oldClients); //  - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
//  Оголошена змінна newClients
console.log(newClients); //  - це масив ["Peach", "Houston"]
//  Оголошена змінна allClients
console.log(allClients); //  - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
//  Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

//  Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

function makeArray(firstArray, secondArray, maxLength) {
  // let allClients=firstArray.concat(secondArray);
  // let newArrey = allClients.splice(0,maxLength)
  // return newArrey
  return [...firstArray, ...secondArray].splice(0, maxLength);
}

console.log('%cTask16', 'color: green; font-weight: bold;');
// Оголошена функція makeArray(firstArray, secondArray, maxLength)
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); //  повертає ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); //  повертає ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // повертає ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); //  повертає ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); //  повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

//  Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7
console.log('%cTask17', 'color: green; font-weight: bold;');

let start = 3;
let end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

//  Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
console.log('%cTask18', 'color: green; font-weight: bold;');
console.log(calculateTotal(1)); //  повертає 1
console.log(calculateTotal(3)); //  повертає 6
console.log(calculateTotal(7)); //  повертає 28
console.log(calculateTotal(18)); //  повертає 171
console.log(calculateTotal(24)); //  повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення
function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
}

//  Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

//  Оголошена змінна fruits
//  Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
//  Оголошена змінна i - лічильник циклу
//  Початкове значення змінної i дорівнює 0
//  Умова циклу приводиться до true доти, доки i менше за 4
//  На кожній ітерації значення змінної i збільшується на одиницю
//  В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
//  В тілі циклу for використовується виведення у консоль змінної fruit

console.log('%cTask19', 'color: green; font-weight: bold;');
fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(fruit);
}

//  Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
console.log('%cTask20', 'color: green; font-weight: bold;');
console.log(calculateTotalPrice([12, 85, 37, 4])); //  повертає 138
console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //  повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення
function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}

//  Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
console.log('%cTask21', 'color: green; font-weight: bold;');

function findLongestWord(string) {
  const wordsArray = string.split(' ');
  let maxWord = '';

  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];

    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //  повертає jumped
console.log(findLongestWord('Google do a roll')); //  повертає Google
console.log(findLongestWord('May the force be with you')); // повертає force

// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
//  Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.
// Оголошена функція createArrayOfNumbers(min, max)

console.log('%cTask22', 'color: green; font-weight: bold;');

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    let number = i;
    numbers.push(number);
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3)); //  повертає [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); //  повертає [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); //  повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

//  Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
console.log('%cTask23', 'color: green; font-weight: bold;');
function filterArray(numbers, value) {
  const arrayLargerNumber = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];

    if (number > value) {
      arrayLargerNumber.push(number);
    }
  }

  return arrayLargerNumber;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); //  повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //  повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //  повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); //  повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //  повертає [24, 41, 76]
//  Виклик функції filterArray з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
console.log('%cTask24', 'color: green; font-weight: bold;');
console.log(checkFruit('plum')); // повертає true
console.log(checkFruit('mandarin')); // повертає false
console.log(checkFruit('pear')); //повертає true
console.log(checkFruit('Pear')); //повертає false
console.log(checkFruit('apple')); // повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit);
}

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// Оголошена функція getCommonElements(array1, array2)
console.log('%cTask25', 'color: green; font-weight: bold;');
// function getCommonElements(array1, array2) {
//   const uniqueNumbersArray = [];
//   for (let index = 0; index < array1.length; index++) {
//     const element1 = array1[index];
//     for (let j = 0; j < array2.length; j++) {
//       const element2 = array2[j];
//       if (element2 === element1) {
//         uniqueNumbersArray.push(element2);
//       }
//     }
//   }

//   return uniqueNumbersArray;
// }
function getCommonElements(array1, array2) {
  const uniqueNumbersArray = [];
  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (array2.includes(element)) {
      uniqueNumbersArray.push(element);
    }
  }
  return uniqueNumbersArray;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
console.log('%cTask26', 'color: green; font-weight: bold;');

function calculateTotalPrice1(order) {
  let total = 0;
  for (const element of order) {
    total += element;
  }
  return total;
}
console.log(calculateTotalPrice1([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice1([164, 48, 291])); //повертає 503
console.log(calculateTotalPrice1([412, 371, 94, 63, 176])); // повертає 1116
console.log(calculateTotalPrice1([])); // повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.
// Оголошена функція filterArray(numbers, value)
console.log('%cTask27', 'color: green; font-weight: bold;');
function filterArray1(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}
console.log(filterArray1([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray1([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray1([1, 2, 3, 4, 5], 5)); //повертає []
console.log(filterArray1([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
console.log(filterArray1([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

console.log('%cTask28', 'color: green; font-weight: bold;');

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// Оголошена змінна a
console.log(a); // - це число 0
// Оголошена змінна b
console.log(b); //- це число 1
// Оголошена змінна c
console.log(c); //- це число 3
// Оголошена змінна d
console.log(d); // - це число 5
// Оголошена змінна e
console.log(e); // - це число 2

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

console.log('%cTask29', 'color: green; font-weight: bold;');
function getEvenNumbers(start, end) {
  const evenNumbersArray = [];
  for (let index = start; index <= end; index++) {
    if (index % 2 === 0) {
      evenNumbersArray.push(index);
    }
  }
  return evenNumbersArray;
}
// Оголошена функція getEvenNumbers(start, end)
console.log(getEvenNumbers(2, 5)); // повертає [2, 4]
console.log(getEvenNumbers(3, 11)); // повертає [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // повертає [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // повертає [8]
console.log(getEvenNumbers(7, 7)); // повертає []

// Виклик функції getEvenNumbers з випадковими start і end повертає правильний масив

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.
// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу
console.log('%cTask30', 'color: green; font-weight: bold;');
const start1 = 6;
const end1 = 27;
let number1;
for (let i = start1; i < end1; i += 1) {
  if (i % 5 === 0) {
    console.log((number1 = i));
    break;
  }
}

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
console.log('%cTask31', 'color: green; font-weight: bold;');
function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) return i;
  }
}
console.log(findNumber(2, 6, 5)); //повертає 5
console.log(findNumber(8, 17, 3)); //повертає 9
console.log(findNumber(6, 9, 4)); // повертає 8
console.log(findNumber(16, 35, 7)); // повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

console.log('%cTask32', 'color: green; font-weight: bold;');

function includes(array, value) {
  for (const iterator of array) {
    if (iterator === value) return true;
  }
  return false;
}
// Оголошена функція includes(array, value)
console.log(includes([1, 2, 3, 4, 5], 3)); //повертає true
console.log(includes([1, 2, 3, 4, 5], 17)); // повертає false
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
); // повертає true
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
); //повертає false
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); //повертає true
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); //повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes
