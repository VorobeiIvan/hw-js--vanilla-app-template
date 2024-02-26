// 1. Модуль 1 - Змінні та типи. Розгалуження. Цикли
// _______________________________________________________________________________
// _______________________________________________________________________________

// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:

// назва - рядок "Droid";
// ціна за штуку - число 2000.
// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 2000

// Change code below this line

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

let productName = 'Droid';
let pricePerItem = 2000;

console.log('Task1');

console.log('productName =', productName);
console.log('pricePerItem =', pricePerItem);

// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// Змінна pricePerItem оголошена за допомогою let
// При оголошенні змінної pricePerItem присвоєно значення — число 2000
// Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
// Змінна productName оголошена за допомогою let
// При оголошенні змінної productName присвоєно значення — рядок "Droid"
// Змінній productName присвоєно нове значення — рядок "Repair droid"
// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line

console.log('Task2');

pricePerItem += 1500;
productName = 'Repair droid';
console.log('pricePerItem =', pricePerItem);
console.log('productName =', productName);

// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.
// Оголошена змінна topSpeed
// Значення змінної topSpeed - це число 160
// Оголошена змінна distance
// Значення змінної distance - це число 617.54
// Оголошена змінна login
// Значення змінної login - це рядок "mango935"
// Оголошена змінна isOnline
// Значення змінної isOnline - це буль true
// Оголошена змінна isAdmin
// Значення змінної isAdmin - це буль false

console.log('Task3');

let onSpeed = 160;
let distance = 617.54;
let login = ' mango935';
let isOnline = true;
let isAdmin = false;

console.log('onSpeed =', onSpeed);
console.log('distance=', distance);
console.log('login=', login);
console.log('isOnline=', isOnline);
console.log('isAdmin=', isAdmin);

// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 3500
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 4
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 14000
// Використаний оператор *
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem;

console.log('Task4');
let orderedQuantity = 4;
let totalPrice = pricePerItem * orderedQuantity;
console.log('totalPrice=', totalPrice);

// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної price - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

console.log('Task5');
productName = 'Droid';
let message = `You picked ${productName}, price per item is ${pricePerItem}.`;
console.log(message);

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 6
// Оголошена змінна pricePerDroid
// Значення змінної pricePerDroid - це число 800
// Оголошена змінна deliveryFee
// Значення змінної deliveryFee - це число 50
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 4850
// Оголошена змінна message
// Значення змінної message - це рядок "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

console.log('Task6');
let pricePerDroid = 800;
orderedQuantity = 6;
let deliveryFee = 50;
totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);

// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// Очікується оголошення функції
// Функції присвоєно ім'я sayHi
// В тілі функції sayHi є console.log("Hello, this is my first function!")
// Після оголошення є виклик функції sayHi

console.log('Task7');

function sayHi() {
  console.log('Hello,this is my first function!');
}
sayHi();

// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// Оголошена функція add(a, b, c)
// Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
// Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
// Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"
// Change code below this line
// function add() {
//   console.log();
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

console.log('Task8');

function add(a, b, c) {
  const total = a + b + c;
  console.log('total= ', total);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// Оголошена функція add(a, b, c)
// У функції add є оператор return
// Виклик addSum(15, 27, 10) повертає 52
// Виклик addSum(10, 20, 30) повертає 60
// Виклик addSum(5, 10, 15) повертає 30
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// function addSum(a, b, c) {
//   // Change code below this line

//   // Change code above this line
// }

// addSum(2, 5, 8); // 15

// console.log(addSum(15, 27, 10));
// console.log(addSum(10, 20, 30));
// console.log(addSum(5, 10, 15));

console.log('Task9');
let total = 0;
function addSum(a, b, c) {
  return (total = a + b + c);
}

console.log('total=', addSum(2, 5, 8)); // 15
console.log('total=', addSum(15, 27, 10));
console.log('total=', addSum(10, 20, 30));
console.log('total=', addSum(5, 10, 15));

// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// Увага
// Зверни увагу на те, що в коді відсутній виклик функції makeMessage. З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. Результат наших перевірок ти побачиш у блоці Результати під редактором коду.

// Оголошена функція makeMessage(name, price)
// Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = ;
//   // Change code above this line
//   return message;
// };

console.log('Task10');

let name = '';
let price = '';
function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));

// Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = ;

//   // Change code above this line
//   return totalPrice;
// };

console.log('Task11');

orderedQuantity = 0;
pricePerItem = 0;
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}

console.log('totalPrice', calculateTotalPrice(5, 100));
console.log('totalPrice', calculateTotalPrice(8, 60));
console.log('totalPrice', calculateTotalPrice(3, 400));
console.log('totalPrice', calculateTotalPrice(1, 3500));
console.log('totalPrice', calculateTotalPrice(12, 70));

// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

console.log('Task12');
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price`;
  return message;
}
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// Оголошена функція isAdult(age)
// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true
// function isAdult(age) {
//   // Change code below this line
//   const passed = ;

//   // Change code above this line
//   return passed;
// }

console.log('Task13');

let age = 0;
function isAdult(age) {
  const passed = age >= 18 ? true : false;
  return passed;
}

console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

// Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// Оголошена функція isValidPassword(password)
// У виразі перевірки паролів використаний оператор ===
// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
// Виклик isValidPassword("jqueryismyjam") повертає true
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = ;

//   // Change code above this line
//   return isMatch;
// }

console.log('Task14');
let password = '';
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD ? true : false;

  return isMatch;
}
console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('kiwirul3z'));
console.log(isValidPassword('jqueryismyjam'));

// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".
// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// function checkAge(age) {
//   let message;

//   if () { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

console.log('Task15');

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".
// Оголошена функція checkStorage(available, ordered).
// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

console.log('Task16');

function checkStorage(available, ordered) {
  let message;
  if (ordered > available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

// Значення змінної a дорівнює 7
// Використаний оператор +=
// Значення змінної b дорівнює 6
// Використаний оператор -=
// Значення змінної c дорівнює 45
// Використаний оператор *=
// Значення змінної d дорівнює 2
// Використаний оператор /=

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

console.log('Task17');
let a = 5;
let b = 10;
let c = 15;
let d = 20;

console.log('a=', (a += 2));
console.log('b=', (b -= 4));
console.log('c=', (c *= 3));
console.log('d=', (d /= 10));

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
// Оголошена функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
// Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"
// Виклик makeTransaction(5000, 10, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(2000, 8, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(500, 10, 5000) повертає "You ordered 10 droids, you have 0 credits left"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

console.log('Task18');
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  if (customerCredits >= totalPrice) {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  } else {
    message = 'Insufficient funds!';
  }
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

// Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if () { // Change this line
//     message =  'Canceled by user!';
//   } else if () { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

console.log('Task19');

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(70, 0)повертає "There are no products in the order!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(150, 0) повертає "There are no products in the order!"
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

console.log('Task20');

function checkStorage1(available, ordered) {
  let message;
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (available < ordered) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  return message;
}
console.log(checkStorage1(100, 50)); // повертає "The order is accepted, our manager will contact you"
console.log(checkStorage1(100, 130)); //  повертає "Your order is too large, there are not enough items in stock!"
console.log(checkStorage1(70, 0)); // повертає "There are no products in the order!"
console.log(checkStorage1(200, 20)); //  повертає "The order is accepted, our manager will contact you"
console.log(checkStorage1(200, 250)); //  повертає "Your order is too large, there are not enough items in stock!"
console.log(checkStorage1(150, 0)); //  повертає "There are no products in the order!"

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

// Оголошена функція isNumberInRange(start, end, number)
// У виразі перевірки використаний оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

// function isNumberInRange(start, end, number) {
//   const isInRange = ; // Change this line

//   return isInRange;
// }

console.log('Task21');

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;

  return isInRange;
}
console.log(isNumberInRange(10, 30, 17)); //повертає true
console.log(isNumberInRange(10, 30, 5)); // повертає false
console.log(isNumberInRange(20, 50, 24)); // повертає true
console.log(isNumberInRange(20, 50, 76)); //повертає false

// Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

// Оголошена функція checkIfCanAccessContent(subType)
// У виразі перевірки використаний оператор ||
// Виклик checkIfCanAccessContent("pro") повертає true
// Виклик checkIfCanAccessContent("starter") повертає false
// Виклик checkIfCanAccessContent("vip") повертає true
// Виклик checkIfCanAccessContent("free") повертає false

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = ; // Change this line

//   return canAccessContent;
// }

console.log('Task22');
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent('pro')); // повертає true
console.log(checkIfCanAccessContent('starter')); // повертає false
console.log(checkIfCanAccessContent('vip')); //повертає true
console.log(checkIfCanAccessContent('free')); // повертає false

// Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

// Оголошена функція isNumberNotInRange(start, end, number)
// У виразі використаний оператор !
// Виклик isNumberNotInRange(10, 30, 17) повертає false
// Виклик isNumberNotInRange(10, 30, 5) повертає true
// Виклик isNumberNotInRange(20, 50, 24) повертає false
// Виклик isNumberNotInRange(20, 50, 76) повертає true
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = ; // Change this line

//   return isNotInRange;
// }

console.log('Task23');
console.log(isNumberNotInRange(10, 30, 17)); // повертає false
console.log(isNumberNotInRange(10, 30, 5)); // повертає true
console.log(isNumberNotInRange(20, 50, 24)); // повертає false
console.log(isNumberNotInRange(20, 50, 76)); // повертає true

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}

// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// Оголошена функція getDiscount(totalSpent)
// Виклик getDiscount(137000) повертає 0.1
// Виклик getDiscount(46900) повертає 0.05
// Виклик getDiscount(8250) повертає 0.02
// Виклик getDiscount(1300) повертає 0
// Виклик getDiscount(5000) повертає 0.02
// Виклик getDiscount(20000) повертає 0.05
// Виклик getDiscount(50000) повертає 0.1

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   // Change code above this line
//   return discount;
// }

console.log('Task24');
console.log(getDiscount(137000)); // повертає 0.1
console.log(getDiscount(46900)); //повертає 0.05
console.log(getDiscount(8250)); // повертає 0.02
console.log(getDiscount(1300)); // повертає 0
console.log(getDiscount(5000)); // повертає 0.02
console.log(getDiscount(20000)); // повертає 0.05
console.log(getDiscount(50000)); // повертає 0.1

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }

  return discount;
}

// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// Оголошена функція checkStorage(available, ordered).
// Використаний тернарний оператор.
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }

console.log('Task25');

console.log(checkStorage3(100, 50)); // повертає "The order is accepted, our manager will contact you"
console.log(checkStorage3(100, 130)); // повертає "Not enough goods in stock!"
console.log(checkStorage3(200, 20)); // повертає "The order is accepted, our manager will contact you"
console.log(checkStorage3(200, 150)); // повертає "The order is accepted, our manager will contact you"
console.log(checkStorage3(150, 180)); // повертає "Not enough goods in stock!"

function checkStorage3(available, ordered) {
  let message;
  ordered > available
    ? (message = 'Not enough goods in stock!')
    : (message = 'The order is accepted, our manager will contact you');
  return message;
}

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".
// Оголошена функція checkPassword(password)
// Використаний тернарний оператор
// Виклик checkPassword("jqueryismyjam") повертає "Access is allowed"
// Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
// Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

console.log('Task26');

console.log(checkPassword1('jqueryismyjam')); // повертає "Access is allowed"
console.log(checkPassword1('angul4r1sl1f3')); // повертає "Access denied, wrong password!"
console.log(checkPassword1('r3actsux')); // повертає "Access denied, wrong password!"

function checkPassword1(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  password === ADMIN_PASSWORD
    ? (message = 'Access is allowed')
    : (message = 'Access denied, wrong password!');
  return message;
}

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

// Оголошена функція getSubscriptionPrice(type)
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch () { // Change this line
//     case : // Change this line
//       price = ; // Change this line
//       break;

//     case : // Change this line
//       price = ; // Change this line
//       break;

//     case : // Change this line
//       price = ; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

console.log('Task27');
function getSubscriptionPrice(type) {
  let price;
  switch (type) {
    case 'starter':
      price = 0;
      break;

    case 'professional':
      price = 20;
      break;

    case 'organization':
      price = 50;
      break;
  }
  return price;
}
console.log(getSubscriptionPrice('professional')); // повертає число 20
console.log(getSubscriptionPrice('organization')); // повертає число 50
console.log(getSubscriptionPrice('starter')); // повертає число 0

// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

console.log('Task28');

console.log(checkPasswordN('mangohackzor')); // повертає "Access denied, wrong password!"
console.log(checkPasswordN(null)); // повертає "Canceled by user!"
console.log(checkPasswordN('polyhax')); // повертає "Access denied, wrong password!"
console.log(checkPasswordN('jqueryismyjam')); // повертає "Welcome!"

function checkPasswordN(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }
  return message;
}

// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// Оголошена функція getShippingCost(country)
// В тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

console.log('Task29');
console.log(getShippingCost('Australia')); // повертає "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // повертає "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // повертає "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // повертає "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // повертає "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); //повертає "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let message;
  let price;
  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  return message;
}

// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// Оголошена функція getNameLength(name)
// Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
// Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
// Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
// Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"

// function getNameLength(name) {
//   const message = `Name ${} is ${} characters long`; // Change this line

//   return message;
// }

console.log('Task30');

console.log(getNameLength('Poly')); // повертає "Name Poly is 4 characters long"
console.log(getNameLength('Harambe')); // повертає "Name Harambe is 6 characters long"
console.log(getNameLength('Billy')); // повертає "Name Billy is 5 characters long"
console.log(getNameLength('Joe')); // повертає "Name Joe is 3 characters long"

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// // Change code above this line

console.log('Task31');
const courseTopic = 'JavaScript essentials';
const courseTopicLength = courseTopic.length;
console.log('courseTopicLength =', courseTopicLength);
const firstElement = courseTopic[0];
console.log('firstElement =', firstElement);
const lastElement = courseTopic[courseTopicLength - 1];
console.log('lastElement =', lastElement);

// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

// function getSubstring(string, length) {
//   const substring = ; // Change this line

//   return substring;
// }

console.log('Task32');

console.log('substring=', getSubstring('Hello world', 3)); // повертає "Hel"
console.log('substring=', getSubstring('Hello world', 6)); // повертає "Hello"
console.log('substring=', getSubstring('Hello world', 8)); // повертає "Hello wo"
console.log('substring=', getSubstring('Hello world', 11)); // повертає "Hello world"
console.log('substring=', getSubstring('Hello world', 0)); // повертає ""

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.
// Доповни код функції таким чином, що якщо довжина рядка:
// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.
// Оголошена функція formatMessage(message, maxLength)
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   /// Change code above this line
//   return result;
// }

console.log('Task33');
console.log(formatMessage('Curabitur ligula sapien', 16)); // повертає "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // повертає "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // повертає "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // повертає "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //повертає "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // повертає "Nunc sed turpis a felis in nunc fringilla"

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + '...';
  }
  return result;
}

// Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"

// function normalizeInput(input) {
//   const normalizedInput = ; // Change this line

//   return normalizedInput;
// }

console.log('Task34');

console.log(normalizeInput('Hello world')); // повертає "hello world"
console.log(normalizeInput("This ISN'T SpaM")); // повертає "this isn't spam"
console.log(normalizeInput('Big SALE')); // повертає "big sale"

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// Оголошена функція checkForName(fullname, name).
// Виклик функції checkForName("Egor Kolbasov", "Egor") повертає true
// Виклик функції checkForName("Egor Kolbasov", "egor") повертає false
// Виклик функції checkForName("Egor Kolbasov", "egOr") повертає false
// Виклик функції checkForName("Egor Kolbasov", "Zhenya") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Vadim") повертає true
// Виклик функції checkForName("Vadim Nekrasov", "vadim") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Dima") повертає false
// function checkForName(fullName, name) {
//   const result = ; // Change this line
//    return result;
//  }

console.log('Task35');
console.log(checkForName('Egor Kolbasov', 'Egor')); // повертає true
console.log(checkForName('Egor Kolbasov', 'egor')); // повертає false
console.log(checkForName('Egor Kolbasov', 'egOr')); //повертає false
console.log(checkForName('Egor Kolbasov', 'Zhenya')); // повертає false
console.log(checkForName('Vadim Nekrasov', 'Vadim')); // повертає true
console.log(checkForName('Vadim Nekrasov', 'vadim')); // повертає false
console.log(checkForName('Vadim Nekrasov', 'Dima')); // повертає false

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true

// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   // Change code above this line
//   return result;
// }

console.log('Task36');

console.log(checkForSpam('Latest technology news')); // повертає false
console.log(checkForSpam('JavaScript weekly newsletter')); //повертає false
console.log(checkForSpam('Get best sale offers now!')); // повертає true
console.log(checkForSpam('Amazing SalE, only tonight!')); //повертає true
console.log(checkForSpam('Trust me, this is not a spam message')); // повертає true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // повертає true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // повертає true

function checkForSpam(message) {
  let result =
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale');
  return result;
}
