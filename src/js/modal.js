(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeLink: document.querySelectorAll('[data-modal-close-link ]'),
    bodyAddClass: document.querySelector('body'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeLink.forEach(link => {
    link.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyAddClass.classList.toggle('is-hidden');
  }
})();
