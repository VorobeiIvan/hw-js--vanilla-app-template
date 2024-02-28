// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const el = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const feedbackStorageKey = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
const savedFormData = JSON.parse(localStorage.getItem(feedbackStorageKey));

if (savedFormData) {
  el.input.value = savedFormData.email;
  el.textarea.value = savedFormData.message;
}

el.form.addEventListener('input', throttle(onInput), 500);
el.form.addEventListener('submit', onSubmitForm);

function onInput() {
  formData.email = el.input.value;
  formData.message = el.textarea.value;

  localStorage.setItem(feedbackStorageKey, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  el.input.value = '';
  el.textarea.value = '';

  console.log('savedFormData', savedFormData);

  localStorage.removeItem(feedbackStorageKey);

  el.form.removeEventListener('input', onInput);
  el.form.removeEventListener('submit', onSubmitForm);
}
