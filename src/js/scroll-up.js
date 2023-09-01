const scrollUpButton = document.querySelector('.scroll-up');

if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
  scrollUpButton.classList.remove('is-hidden');
}

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
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

window.addEventListener('scroll', scrollFunction);
scrollUpButton.addEventListener('click', topFunction);
