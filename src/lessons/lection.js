// ФІЛЬТРАЦІЯ;
// ____________________________________________________________________

const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'React' },
  { label: 'Node' },
  { label: 'MongoDB' },
  { label: 'Python' },
  { label: 'Express' },
  { label: 'Nginx' },
  { label: 'PHP' },
  { label: 'Django' },
  { label: 'Ruby' },
  { label: 'Rails' },
  { label: 'SASS' },
  { label: 'Bootstrap' },
  { label: 'ES6' },
  { label: 'Git' },
  { label: 'GitHub' },
  { label: 'Gulp' },
  { label: 'Webpack' },
  { label: 'NPM' },
  { label: 'Yarn' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

// refs.input.addEventListener('input', onFilterChange);
// refs.input.addEventListener('input', _.throttle(onFilterChange, 200)); // фільтер спрацює при введенні через 500мс

refs.input.addEventListener('input', _.debounce(onFilterChange, 200)); // фільтер спрацює після введення через 500мс

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter(item =>
    item.label.toLowerCase().includes(filter)
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}

// ____________________________________________________________________

// setTimeout (collback, time, arg1, arg2, ...argN) -виклик колбека через кількість мілісекунд

// setInterval( collback, time, arg1, arg2, ...argN) - виклик колбека кожні N мілісекунд

// clearTimeout(timerId) - відміна виклику колбека через кількість мілісекунд

// clearInterval(timerId) - відміна виклику колбека кожні N мілісекунд

// collback -що викликається
// time -час виклику колбека
// arg1, arg2, ...argN -аргументи колбека для його виклику
// timerId -ідентифікатор виклику колбека

// приклад:
// const timerId = setInterval(collback, 1000, arg1);
// const collback = function(arg1){ console.log(arg1); }
// const arg1 = 'Hello World';

// clearTimeout(timerId)

// ____________________________________________________________________

// Проміси
// resolve - виклик колбека при успішному завершенні
// reject - виклик колбека при помилці
const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFullfill) {
      resolve('проміс виконано успішно');
    } else {
      reject('проміс виконано з помилкою');
    }
  }, 2000);
});
console.log('promise', promise);

// promise.then(
//   result => {
//     console.log(`✅ ${resolve}`);
//   },
//   error => {
//     console.log(`❌ ${reject}`);
//   }
// );

promise.then(onFullfill, onReject); // якщо проміс виконується успішно, то викликається onFullfill, якщо помилка, то onReject

function onFullfill(result) {
  console.log(`✅ ${result}`);
}

function onReject(error) {
  console.log(`❌ ${error}`);
}
// результат виконання промісу є тільки в колбеках onFullfill і onReject

// ____________________________________________________________________

const p = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello');
  }, 1000);
});
p.then(result => console.log(result));
// Проміс повертає завжди інший проміс, що виконується після того, як він було виконано.
// результат виконання промісу є тільки в колбеках onFullfill і onReject

const prom = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello');
  }, 1000);
});
promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'));

// throw це  виклик помилки, якщо проміс виконується з помилкою

// then викликається, якщо проміс виконується успішно. Він викликається, якщо проміс виконується успішно
// catch ловить помилки, якщо проміс виконується з помилкою. Він викликається, якщо проміс виконується з помилкою

// finally виконується в кінці виконання промісу чи з помилкою чи проміс виконується успішно він викликається в любому випадку в кінці. Він викликається в кінці виконання промісу

// console.log(promise); видасть обєкт промісу в якому є властивість then та catch та finally. Буде мати ось такий вигляд в консолі  promise {then:ƒ, catch:ƒ, finally:ƒ}

// Промісифікація функцій
const makeOrder = dish => {
  const DELAY = 1000;
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    setTimeout(() => {
      if (passed) {
        resolve(`Ви приготували ${dish}`);
      } else {
        reject(`Ваше замовлення ${dish} відхилено,у нас недостатньо продуктів`);
      }
    }, DELAY);
  });
};

function onMakeOrderSuccess(result) {
  console.log(result);
}
function onMakeOrderError(error) {
  console.log(error);
}

makeOrder('Картопля').then(onMakeOrderSuccess).catch(onMakeOrderError);
makeOrder('Гриби').then(onMakeOrderSuccess).catch(onMakeOrderError);

// ------------------------------------------------------------------
// для синхронного виконання промісів можна використати метод resolve
const makeOrder1 = dish => {
  return promise.resolve(`ось ${dish} приготовлено`);
};

makeOrder1('Картопля').then(onMakeOrderSuccess);

// для синхронного виконання промісів можна використати метод reject
const makeOrder2 = dish => {
  return promise.reject(`ось ${dish} відхилено`);
};

makeOrder2('Картопля').then(onMakeOrderSuccess);
// ------------------------------------------------------------------

// Promise.all() - це метод Promise, який викликається, коли всі проміси виконані успішно. Повертає масив результатів виконання промісів

// Promise.race() - це метод Promise, який викликається, коли хоча б один проміс виконується з помилками або успішно. Повертає результат виконання промісу
