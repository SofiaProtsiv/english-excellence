function onSubmit(event) {
  event.preventDefault();
}

function onFocus(event) {
  event.target.value
    ? (event.target.style.background = 'green')
    : (event.target.style.background = 'red');
}

function onBlur(event) {
  event.target.value
    ? (event.target.style.background = 'green')
    : (event.target.style.background = 'red');
}

document.querySelector('form').addEventListener('submit', onSubmit);
[...document.querySelector('.leave-section-form').elements].forEach(el => {
  console.log(el);
  if (el.name) {
    el.addEventListener('input', onFocus);
    el.addEventListener('focus', onFocus);
    el.addEventListener('blur', onBlur);
  }
});
