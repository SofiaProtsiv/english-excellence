const form = document.querySelector('.leave__form');

const fieldsToValidate = [
  {
    input: form.querySelector('input[type="text"]'),
    message: 'Name is required.',
  },
  {
    input: form.querySelector('input[type="email"]'),
    message: 'Email is required.',
  },
  {
    input: form.querySelector('input[type="tel"]'),
    message: 'Phone is required.',
  },
  {
    input: form.querySelector('.leave__textarea'),
    message: 'Comment is required.',
  },
];

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  input.classList.add('error');
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function hideError(input) {
  const errorElement = input.nextElementSibling;
  input.classList.remove('error');
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}

function validateForm() {
  let hasErrors = false;

  fieldsToValidate.forEach(({ input, message }) => {
    if (input.value.trim() === '') {
      showError(input, message);
      hasErrors = true;
    }
  });

  return !hasErrors;
}

function validateOnBlur(event) {
  switch (event.target.type) {
    case 'text':
    case 'tel':
    case 'email':
      if (event.target.value.trim() === '') {
        showError(event.target, 'This field is required.');
      }
      break;
    default:
      if (event.target.classList.contains('leave__textarea')) {
        if (event.target.value.trim() === '') {
          showError(event.target, 'This field is required.');
        }
      }
      break;
  }
}

function validateOnFocus(event) {
  switch (event.target.type) {
    case 'text':
    case 'tel':
    case 'email':
      hideError(event.target);
      break;
    default:
      if (event.target.classList.contains('leave__textarea')) {
        hideError(event.target);
      }
      break;
  }
}

function onSubmit(event) {
  event.preventDefault();

  const hasNoErrors = validateForm();
  if (!hasNoErrors) return;

  event.currentTarget.reset();
}

form.addEventListener('focus', validateOnFocus, true);
form.addEventListener('blur', validateOnBlur, true);
form.addEventListener('submit', onSubmit);
