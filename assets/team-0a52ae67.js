(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="/english-excellence/assets/github-a18733d4.svg",h="/english-excellence/assets/email-cb9a9d62.svg",u="/english-excellence/assets/linkedin-610df138.svg",g={iconGithub:p,iconEmail:h,iconLinkedin:u},f=[{name:"Sofia Protsiv",role:"Team Lead",desc:"",photo:"https://media.licdn.com/dms/image/D4E03AQE_Z4Xl70cDeQ/profile-displayphoto-shrink_800_800/0/1685733885856?e=1698883200&v=beta&t=IcGGYD8hWiGgOt9YJBSX0Pade5AeNs5v0VmKbFkWN9M",email:"mailto:prochivsofia@gmail.com",linkedin:"https://www.linkedin.com/in/sofia-protsiv-9743a6201/",github:"https://github.com/SofiaProtsiv"},{name:"Nikita Zeleniak",role:"Scrum Master",desc:"",photo:"https://media.licdn.com/dms/image/D4E03AQG0pLfD4J57Jw/profile-displayphoto-shrink_800_800/0/1667354680523?e=1698883200&v=beta&t=q-VJ8M2zvxQBYO4R6qWC4vm3h0WQuUPRxNZ-2jcSr0I",email:"mailto:Zelenyaknikita0927@gmail.com",linkedin:"https://www.linkedin.com/in/zeleniak-nikita/",github:"https://github.com/NikitaZelenyak"},{name:"Mykhailo Startsev",role:"Front-End Developer",desc:"",photo:"https://media.licdn.com/dms/image/D4D03AQHZo3aCYNjgQQ/profile-displayphoto-shrink_800_800/0/1684445040350?e=1698883200&v=beta&t=ZOPyCVLmdCPd4vMTTtbhlldoWAtjZYh5XTrjO1M_j5o",email:"mailto:rafaelavlucas@gmail.com",linkedin:"https://www.linkedin.com/in/m-startsev/",github:"https://github.com/MStartsev"},{name:"Ilya Bond",role:"Front-End Developer",desc:"",photo:"https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png",email:"mailto:rafaelavlucas@gmail.com",linkedin:"https://www.linkedin.com/in/rafaelalucas/",github:"https://github.com/cod3provider"},{name:"Alex Smagin",role:"Front-End Developer",desc:"",photo:"https://media.licdn.com/dms/image/D5603AQGg65N4RXgMxQ/profile-displayphoto-shrink_800_800/0/1692364451767?e=1698883200&v=beta&t=MWYVTk1GsN_6kVmAQmQSHtJqaU9lFZjoJZNQn1XdGXw",email:"mailto:alexsmagin1@gmail.com",linkedin:"https://www.linkedin.com/in/alex-smagin29/",github:"https://github.com/Alexandrbig1"},{name:"Artur Didur",role:"Front-End Developer",desc:"",photo:"https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png",email:"mailto:didur.art@gmail.com",linkedin:"",github:"https://github.com/Art-of-D"},{name:"Yuriy Staynov",role:"Front-End Developer",desc:"",photo:"https://media.licdn.com/dms/image/D4E03AQF0qLJ7iEdJpA/profile-displayphoto-shrink_800_800/0/1665735413374?e=1698883200&v=beta&t=w8yUoDiFvDT94-FVWLXQcZRJa7CvLU4T1GgBqMXWiiw",email:"mailto:yuriystaynov@gmail.com",linkedin:"https://www.linkedin.com/in/yuriy-staynov-8a2832219/",github:"https://github.com/Yuriy-St"},{name:"Galamaga Yevgen",role:"Front-End Developer",desc:"Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",photo:"https://media.licdn.com/dms/image/C4D03AQFv6sUm8VeCiw/profile-displayphoto-shrink_800_800/0/1570531160080?e=1698883200&v=beta&t=HTW8G28O_gBc--Dj357Ap6CDHKeNKnQFPkrIeCgULQM",email:"mailto:evgeniygal@gmail.com",linkedin:"https://www.linkedin.com/in/yevgen-galamaga-964481187/",github:"https://github.com/EvgeniyGal"},{name:"Vladyslav Mykhalytsky",role:"Front-End Developer",desc:"",photo:"https://media.licdn.com/dms/image/D4D35AQF1SFXz7u_9wQ/profile-framedphoto-shrink_800_800/0/1680210901689?e=1693915200&v=beta&t=a4n1tSBYA75Dt6tB1Skua2Qgw6eetdSmThaqhTT6GFE",email:"mailto:vmykhali666@gmail.com",linkedin:"https://www.linkedin.com/in/vladyslav-mykhalytskyi-b42250185/",github:"https://github.com/vmykhali666"},{name:"Olga Lukianets",role:"Front-End Developer",desc:"",photo:"https://media.licdn.com/dms/image/C5603AQFlzNAWsC6csQ/profile-displayphoto-shrink_800_800/0/1631170030323?e=1698883200&v=beta&t=cH5wPmGJNwffX0tAzkm8SUcXBPN0XzFlvYFmIT3XK2U",email:"mailto:olgalukianets7@gmail.com",linkedin:"https://www.linkedin.com/in/olga-lukianets/",github:"https://github.com/Liasique"}],l=document.querySelector(".swiper-wrapper");function v(){if(!l)return;const{iconGithub:i,iconEmail:o,iconLinkedin:a}=g;f.forEach(({name:n,role:e,desc:t,photo:s,github:r,email:c,linkedin:m})=>{const d=`
    <div class="swiper-slide">
      <div class="card">
        <span class="bg"></span>
        <span class="more"></span>
        <figure class="photo"><img src="${s}"></figure>
        <article class="text">
          <p class="name">${n}</p>
          <p class="role">${e}</p> 
          <p class="desc">${t}</p> 
        </article>
        <div class="social">
          <span class="pointer"></span>
          <div class="icons">
            <a class="icon" href="${r}" target="_blank" data-index="0"><img src="${i}"></a>
            <a class="icon" href="${c}" target="_blank" data-index="1"><img src="${o}"></a>
            <a class="icon" href="${m}" target="_blank" data-index="2"><img src="${a}"></a>
          </div>
        </div>
      </div>
    </div>`;l.insertAdjacentHTML("beforeend",d),document.querySelector(".swiper-slide").classList.add("show-more")})}v();const k=document.querySelectorAll(".more");k.forEach(function(i){i&&i.addEventListener("click",w)});function w(i){const o=document.querySelector(".swiper-slide.show-more"),a=i.target.closest(".swiper-slide");a&&(a.classList.contains("show-more")?a.classList.remove("show-more"):a.classList.add("show-more"),o&&o.classList.remove("show-more"))}const y=document.querySelectorAll(".icon");y.forEach(function(i){i&&i.addEventListener("mouseenter",b)});function b(i){const o=i.currentTarget.closest(".swiper-slide").querySelector(".pointer"),a=i.currentTarget.dataset.index,n=60*a+25;o.style.transform=`translateX(${n}px)`}
