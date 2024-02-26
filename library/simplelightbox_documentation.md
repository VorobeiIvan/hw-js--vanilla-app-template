Документація SimpleLightbox доступна [тут](https://simplelightbox.com/).

Документація

Інсталяція

Для встановлення SimpleLightbox ви можете виконати наступне:

//YARN

yarn add simplelightbox

//Bower

bower install simplelightbox

//NPM

npm install simplelightbox

Просто включіть simplelight-box.css та simple-lightbox.js на вашу сторінку та
використовуйте:

Використання Самостійний плагін

При використанні самостійної варіанту(simple-lightbox(.min).js)

var lightbox = new SimpleLightbox('.gallery a', { /_ параметри _/ });

При використанні самостійної варіанту (simple-lightbox(.min).js)

var lightbox = $('.gallery a').simpleLightbox({ /_ параметри _/ });

З Webpack/Browserify/Parcel тощо...

Виберіть файл модуля, який ви хочете імпортувати або вимагати.

Модуль з трансформацією Babel

import SimpleLightbox from "simplelightbox";

Простий ES-модуль без Babel

import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

Розмітка

Для типового налаштування вам просто потрібні посилання, які вказують на
зображення.

<div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Красиве зображення"/></a>
</div>

Маркери всередині тегів A можуть бути будь-якими. У цьому прикладі вони є
мініатюрами великих зображень. Заголовок за замовчуванням використовується для
відображення підпису. Для повного прикладу просто подивіться у папку з
демонстрацією.

### JavaScript Параметри:

### JavaScript Параметри:

| Властивість     | Значення за замовчуванням | Тип      | Опис                                                                          |
| --------------- | ------------------------- | -------- | ----------------------------------------------------------------------------- |
| sourceAttr      | href                      | string   | атрибут, використовуваний для великих зображень                               |
| overlay         | true                      | bool     | показувати чи ні належку                                                      |
| overlayOpacity  | 0.7                       | float    | прозорість належки                                                            |
| spinner         | true                      | bool     | показувати чи ні спіннер                                                      |
| nav             | true                      | bool     | показувати чи ні стрілки навігації                                            |
| navText         | ['←','→']                 | array    | текст або html для стрілок навігації                                          |
| captions        | true                      | bool     | показувати чи ні підписи, якщо вони доступні                                  |
| captionSelector | 'img'                     | string   | встановлює елемент, де знаходиться підпис.                                    |
|                 |                           | або      | Встановіть його на "self" для самого тегу A або                               |
|                 |                           | function | використовуйте зворотний виклик , який повертає елемент                       |
| captionType     | 'attr'                    | string   | як отримати підпис. Ви можете вибрати між attr, data або text                 |
| captionsData    | title                     | string   | отримати підпис із заданого атрибута                                          |
| captionPosition | 'bottom'                  | string   | положення підпису. Варіанти: top, bottom або зовнішній (зауважте, що          |
|                 |                           |          | зовнішній може бути за межами видимого області відображення!)                 |
| captionDelay    | 0                         | int      | додати затримку перед відображенням підпису (в мс)                            |
| captionClass    | ''                        | string   | додає додатковий клас(и) до sl-caption use space або кому для додавання       |
|                 |                           |          | декількох класів.                                                             |
| close           | true                      | bool     | показувати чи ні кнопку закриття                                              |
| closeText       | '×'                       | string   | текст або html для кнопки закриття                                            |
| swipeClose      | true                      | bool     | закриття галереї за допомогою змаху вгору або вниз                            |
| showCounter     | true                      | bool     | показувати поточний індекс зображення чи ні                                   |
| fileExt         | 'png/jpg/jpeg/gif'        | regexp   | список розширень файлів, з якими працює плагін, або false для                 |
|                 |                           | або      | відключення перевірки                                                         |
|                 |                           | false    |                                                                               |
| animationSpeed  | 250                       | int      | тривалість анімації переміщення зображення (в мс)                             |
| animationSlide  | true                      | bool     | чи слайдити нові фото, чи ні, відключіть для зникаючого ефекту                |
| preloading      | true                      | bool     | дозволяє попереднє завантаження наступних та попередніх зображень             |
| enableKeyboard  | true                      | bool     | дозволяє клавіатурну навігацію стрілками та закриває за допомогою клавіші ESC |
| loop            | true                      | bool     | дозволяє перегортання зображень                                               |
| rel             | false                     | mixed    | групувати зображення за атрибутом rel посилання з тим самим селектором        |
| docClose        | true                      | bool     | закриття світлової коробки при натисканні ззовні                              |
| swipeTolerance  | 50                        | int      | на скільки пікселів потрібно змахнути, перш ніж зображення зміниться          |
| className       | 'simple-lightbox'         | string   | додає клас до обгортки світлової коробки                                      |
| widthRatio      | 0.8                       | float    | Співвідношення ширини зображення до ширини екрану                             |
| heightRatio     | 0.9                       | float    | Співвідношення висоти зображення до висоти екрану                             |

### Події:

| Назва                          | Опис                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| show.simplelightbox            | Ця подія спрацьовує перед відкриттям світлової коробки                                             |
| shown.simplelightbox           | Ця подія спрацьовує після відкриття світлової коробки                                              |
| close.simplelightbox           | Ця подія спрацьовує перед закриттям світлової коробки                                              |
| closed.simplelightbox          | Ця подія спрацьовує після закриття світлової коробки                                               |
| change.simplelightbox          | Ця подія спрацьовує перед зміною зображення                                                        |
| changed.simplelightbox         | Ця подія спрацьовує після зміни зображення                                                         |
| next.simplelightbox            | Ця подія спрацьовує перед переходом до наступного зображення                                       |
| nextDone.simplelightbox        | Ця подія спрацьовує після переходу до наступного зображення                                        |
| prev.simplelightbox            | Ця подія спрацьовує перед переходом до попереднього зображення                                     |
| prevDone.simplelightbox        | Ця подія спрацьовує після переходу до попереднього зображення                                      |
| nextImageLoaded.simplelightbox | Ця подія спрацьовує після завантаження наступного зображення (якщо передзавантаження активоване)   |
| prevImageLoaded.simplelightbox | Ця подія спрацьовує після завантаження попереднього зображення (якщо передзавантаження активоване) |
| error.simplelightbox           | Ця подія спрацьовує при помилці завантаження зображення                                            |

### Приклади:

```javascript
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  // зробити щось...
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // корисна інформація
});

// майже те саме з jQuery
let gallery = $('.gallery a').simpleLightbox();
gallery.on('show.simplelightbox', function () {
  // зробити щось...
});
```

Публічні методи: Назва Опис

open Відкриває світлову коробку з вказаним елементом

close Закриває поточно відкриту світлову коробку

next Переходить до наступного зображення

prev Переходить до попереднього зображення

destroy Знищує екземпляр світлової коробки

refresh Знищує та повторно ініціалізує світлову коробку, необхідно для
Ajax-викликів або після маніпуляцій з DOM

Приклад:

var gallery = $('.gallery a').simpleLightbox();

gallery.next(); // Наступне зображення

Кілька світлових коробок на одній сторінці: Ви можете мати кілька світлових
коробок на одній сторінці, якщо ви надаєте їм різні селектори. Ось невеликий
приклад:

var lightbox1 = $('.lighbox-1 a').simpleLightbox();

var lightbox2 = $('.lighbox-2 a').simpleLightbox();

Налаштування: Ви можете налаштувати Simplelightbox, змінивши стиль у
simplelightbox.css.

Якщо ви використовуєте SASS, ви можете налаштувати Simplelightbox з наступними
змінними:

$sl-font-family: Arial, Baskerville, monospace;

$sl-overlay-background: #fff;

$sl-navigation-color: #000;

$sl-caption-color: #fff;

$sl-caption-background: #000;

$sl-counter-fontsize: 1rem;

$sl-caption-fontsize: 1rem;

$sl-close-fontsize: 3rem;

$sl-breakpoint-medium: 35.5em; // 568px, коли 1rem == 16px

$sl-breakpoint-large: 50em; // 800px, коли 1rem == 16px

$sl-arrow-fontsize-small: 2rem;

$sl-arrow-fontsize-medium: 3rem;

$sl-arrow-fontsize-large: 3rem;

$sl-img-border-small: 0 none;

$sl-img-border-medium: 0 none;

$sl-img-border-large: 0 none;

$sl-iframe-border-small: 0 none;

$sl-iframe-border-medium: 0 none;

$sl-iframe-border-large: 0 none;

$add-vendor-prefixes: true !default;
