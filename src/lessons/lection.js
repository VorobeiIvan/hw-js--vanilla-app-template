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
