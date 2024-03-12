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



