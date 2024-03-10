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

// Ліниве завантаження файлів;
// ____________________________________________________________________

// добавити loading="lazy" в HTML тег
{
  /* <img
    loading="lazy"
    src=""
    alt=""
    whidth="480"
    height="480"
/>  */
}

// Loading-lazy за допомогою JS та  CSS .(вішає клас, де буде відображено зображення)

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});
function onImageLoaded(e) {
  e.target.classList.add('loaded');
}

// _________

// бібліотека lazysizes
// _______________
// https://web.dev/articles/browser-level-image-lazy-loading

// <!-- Let's load this in-viewport image normally -->
// <img src="hero.jpg" alt="…">

// <!-- Let's lazy-load the rest of these images -->
// <img data-src="unicorn.jpg" alt="…" loading="lazy" class="lazyload">
// <img data-src="cats.jpg" alt="…" loading="lazy" class="lazyload">
// <img data-src="dogs.jpg" alt="…" loading="lazy" class="lazyload">

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===============================================================================================
