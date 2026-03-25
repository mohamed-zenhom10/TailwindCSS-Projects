const navBarBtn = document.querySelector(".toggler");
const mobileNavbar = document.querySelector(".mobile");

navBarBtn.onclick = () => {
  mobileNavbar.classList.toggle("-translate-x-[150%]");
  mobileNavbar.classList.toggle("opacity-0");
};

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
});
