**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
// Ліниве завантаження файлів; //
**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***

// добавити loading="lazy" в HTML тег { /_ <img
    loading="lazy"
    src=""
    alt=""
    whidth="480"
    height="480"
/> _/ }

// Loading-lazy за допомогою JS та CSS .(вішає клас, де буде відображено
зображення)

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach(image => { image.addEventListener('load', onImageLoaded, {
once: true }); }); function onImageLoaded(e) { e.target.classList.add('loaded');
}

//
**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***

// бібліотека lazysizes // **\*\***\_\_\_**\*\*** //
https://web.dev/articles/browser-level-image-lazy-loading

// <!-- Let's load this in-viewport image normally --> //
<img src="hero.jpg" alt="…">

// <!-- Let's lazy-load the rest of these images --> //
<img data-src="unicorn.jpg" alt="…" loading="lazy" class="lazyload"> //
<img data-src="cats.jpg" alt="…" loading="lazy" class="lazyload"> //
<img data-src="dogs.jpg" alt="…" loading="lazy" class="lazyload">

if ('loading' in HTMLImageElement.prototype) { const images =
document.querySelectorAll('img[loading="lazy"]'); images.forEach(img => {
img.src = img.dataset.src; }); } else { // Dynamically import the LazySizes
library const script = document.createElement('script'); script.src =
'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
document.body.appendChild(script); }

**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
для терміналу
**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***

- шлях (pwd)
- список (ls) ls -l ls -la
- навігація (cd) cd .. cd ../..
- очищення (clear) або control+l
- створення файлу (touch)
- переміщення/перейменування (mv) що переміщуємо -> пробіл->куди переміщуємо
- видалення (rm)
- створення папки (mkdir)
- опис (man) man ls

- node node app.js
- npm i
- npm remove

  **\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
