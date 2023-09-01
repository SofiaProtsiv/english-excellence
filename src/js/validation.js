const form = document.querySelector('.leave__form');

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

if (form) {
  document.querySelector('.leave__form').addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();
  });

  // [...form.elements].forEach(el => {
  //   if (el.name) {
  //     el.addEventListener('input', onFocus);
  //     el.addEventListener('focus', onFocus);
  //     el.addEventListener('blur', onBlur);
  //   }
  // });
}
