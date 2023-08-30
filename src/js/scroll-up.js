const scrollUpButton = document.querySelector('.scroll-up');

if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  scrollUpButton.classList.remove('is-hidden');
}

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollUpButton.classList.remove('is-hidden');
  } else {
    scrollUpButton.classList.add('is-hidden');
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', _.throttle(scrollFunction, 300));
scrollUpButton.addEventListener('click', topFunction);
