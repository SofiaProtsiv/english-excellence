import { team, icons } from '../assets/db';

/* Team markup */
const swiperWrapper = document.querySelector('.team__cards-wrapper');

function addTeam() {
  if (!swiperWrapper) return;

  const { iconGithub, iconEmail, iconLinkedin } = icons;

  team.forEach(({ name, role, desc, photo, github, email, linkedin }) => {

    const template = `
    <div class="team__cards__card-container">
      <div class="card">
        <span class="bg"></span>
        <span class="more"></span>
        <figure class="photo"><img src="${photo}"></figure>
        <article class="text">
          <p class="name">${name}</p>
          <p class="role">${role}</p> 
          <p class="desc">${desc}</p> 
        </article>
        <div class="social">
          <span class="pointer"></span>
          <div class="icons">
            <a class="icon" href="${github}" target="_blank" data-index="0"><img src="${iconGithub}"></a>
            <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iconEmail}"></a>
            <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iconLinkedin}"></a>
          </div>
        </div>
      </div>
    </div>`;

    swiperWrapper.insertAdjacentHTML('beforeend', template);
    document.querySelector(".team__cards__card-container").classList.add("show-more")
  });

};

addTeam();

/* Show More */

const btnShow = document.querySelectorAll('.more');

btnShow.forEach(function (el) {
  if (!el) return
  el.addEventListener('click', showMore);
});

function showMore(event) {
  const openCard = document.querySelector(".team__cards__card-container.show-more")

  const card = event.target.closest(".team__cards__card-container");

  if (!card) return

  if (card.classList.contains('show-more')) {
    card.classList.remove('show-more');
  } else {
    card.classList.add('show-more')
  }

  if (openCard) {
    openCard.classList.remove('show-more');
  }
}


/* Social Hover */
const icon = document.querySelectorAll('.icon');

icon.forEach(function (el) {
  if (!el) return
  el.addEventListener("mouseenter", followCursor);
});

function followCursor(event) {
  const pointer = event.currentTarget.closest(".team__cards__card-container").querySelector('.pointer'),
    index = event.currentTarget.dataset.index,
    sizeIcon = (60 * index) + 25;

  pointer.style.transform = `translateX(${sizeIcon}px)`;
}
