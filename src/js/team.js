import { team, icons } from '../assets/team/db';

/* Team markup */
const swiperWrapper = document.querySelector('.swiper-wrapper');

function addTeam() {
  if (!swiperWrapper) return;

  const { iconGithub, iconEmail, iconLinkedin } = icons;

  team.forEach(({ name, role, desc, photo, github, email, linkedin }) => {

    const template = `
    <div class="swiper-slide">
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
    document.querySelector(".swiper-slide").classList.add("show-more")
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
  const openCard = document.querySelector(".swiper-slide.show-more")

  const card = event.target.closest(".swiper-slide");

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
  const pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
    index = event.currentTarget.dataset.index,
    sizeIcon = (60 * index) + 25;

  pointer.style.transform = `translateX(${sizeIcon}px)`;
}
