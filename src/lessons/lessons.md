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
  webpack.js.org
  **\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***

- npm i - y
- npm webpack webpack-cli -- save-dev
- mkdir src
- cd src
- touch index.html
- touch index.js
- touch webpack.config.js

<!-- webpack.config.js -->

<!--
const path = require ('path');

const  HtmlWebpackPlugin = require ('html-webpack-plugin')
module.exports = {
entry:' ./src/index.js',
output:{
  path:path.resolve(__dirname,'dist'),
  filename:'my-first-webpack.bundle.js',
  },
module:{
rules:[
    {
      test:/\.css$/i,
      use:['style-loader','css-loader'],
    },
    {
      test:/\.js$/i,
      exclude: /node_modules/,
      use:["babel-loader"],
    }

  ]
},
plugins:[nwe HtmlWebpackPlugin({template:"src/index.html"}) ],
  devServer:{
    port: 4444,
    open:true,
    stats: 'errors-only',
  },
}; -->

<!--
package.json
 "scripts":{
 "start": "webpack --mode=development",
 "dev": "webpack-dev-server --mode=development",  (npm run dev)
 "prod": "webpack-dev-server -- mode=production, (npm run prod)

 } -->

- npm ran dev
- webpack --node=development
- npm i webpack-dev-server --save-dev
- npm i --save-dev css-loader
- npm i --save-dev style-loader
- npm i --save-dev babel-loader @babel/core

<!-- babel.config.json -->
<!-- {
  "presets":["@babel/preset-env"]
  } -->

- npm i @babel/preset-env --save-dev

<!-- плагіни -->

- npm i --save-dev html-webpack-plugin

<!-- див документацію -->

- налаштування min css плагіна

**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
JSON
**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***

JSON.stringify(user) - з об'єкту робить рядок JSON.parse(user) - з рядка робить
об'єкт

const user ={ name: "Mango", age:2, };

console.log (JSON.stringify(user));

const saveUserData ="{"name":"Mango","age":2}"

console.log (JSON.parse(saveUserData));

**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
LocalStorage
**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***

можна зберігати (темиб мови )

LocalStorage - читає тільки рядки. якщо потрібно зберегти асив чи об'єкт -
JSON.stringify({ name: "Mango", age:2, })

- localStorage.setItem("ключ","значення") - запис ключа
  тазначення(створенння/перевизначення)
- localStorage.getItem("ключ") - читання значення

- console.log (localStorage);
- localStorage.setItem("my-data", " qwertyu")
- const saveData = localStorage.getItem("my-data"); // рядок
- const parsedData = JSON.parse(saveData) // об'єкт

**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
SessionStorage
**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\***
можна зберігати ( збереження корзини )

<!--
import throttle from 'lodash.throttle'
const STORAGE_KEY ='STORAGE_KEY'

const refs ={
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
}

refs.form.addEventListener ('submit', onFormSubmit);
refs.textarea.addEventListener ('input', throttle(onTextareaInput,500));
populateTextarea();

function onFormSubmit(e){
   e.preventDefault();

   console.log( "Відправляємо форму");
   e.currentTarget.reset();
   localStorage.removeItem('STORAGE_KEY')
}
function onTextareaInput (e) {
  const message =e.target.value;
  localStorage.setItem('STORAGE_KEY',message)
}
function populateTextarea (){
  const saveMessage =localStorage.getItem('STORAGE_KEY')
}
-->

- npm i lodash.throttle
