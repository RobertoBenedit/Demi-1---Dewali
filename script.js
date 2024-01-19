let header = document.querySelector(".header");
let navbar = document.querySelector(".header .flex .navbar");
let MenuBtn = document.querySelector("#menu-btn");

MenuBtn.onclick = () => {
  navbar.classList.toggle("active");
  MenuBtn.classList.toggle("fa-times");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  MenuBtn.classList.remove("fa-times");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

let home = document.querySelector("#home");

home.onmousemove = (e) => {
  let homeImg = home.querySelector(".home-img");
  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;

  homeImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

home.onmouseleave = () => {
  let homeImg = home.querySelector(".home-img");

  homeImg.style.transform = `translateX(0px) translateY(0px)`;
};

let dataOffset = 24 * 60 * 60 * 1000 * 3; // el ultimo numero es el dia
let countDate = new Date().getTime() + dataOffset;

function countDown() {
  let now = new Date().getTime();
  let gap = now - countDate;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}

setInterval(() => {
  countDown();
}, 1000);

// se cambio:
// new Swiper por mi clase
// slidesPerView:
// spaceBetween:
// se agrego
// loop: true,
// GrabCursor: true,

var swiper = new Swiper(".products-slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // se borra: spaceBetween y se ajusta a Responsive
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// function loader() {
//   document.querySelector(".loader-container").classList.add("active");
// }

// function fadeOut() {
//   setInterval(loader, 3000);
// }
// window.onload = fadeOut();
