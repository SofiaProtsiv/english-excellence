(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeLink: document.querySelectorAll('[data-modal-close-link ]'),
    bodyAddClass: document.querySelector('body'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  refs.closeLink.forEach(link => {
    link.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.bodyAddClass.classList.toggle('is-hidden');
    refs.modal.classList.toggle('is-hidden');
  }
})();
