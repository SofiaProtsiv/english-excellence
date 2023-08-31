const sections = document.querySelectorAll('section');

const lasyLoad = targets => {
  const options = {
    rootMargin: '100px',
    threshold: 0.2,
  };

  const onEntry = (entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {

      if (isIntersecting) {
        target.classList.add('appear');
        observer.unobserve(target);
      }
    });
  };

  const sectionsObserver = new IntersectionObserver(onEntry, options);

  targets.forEach(target => sectionsObserver.observe(target));
};

lasyLoad(sections);