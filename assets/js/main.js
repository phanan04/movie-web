// Hàm hiển thị modal đăng nhập
function showLoginModal() {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

// Hàm hiển thị modal đăng ký
function showRegisterModal() {
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.show();
}

// Hàm hiển thị modal list
function showListModal() {
    const listModal = new bootstrap.Modal(document.getElementById('listModal'));
    listModal.show();
}

// Xử lý navbar khi cuộn
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Movie Banner Slider
const movieContents = document.querySelectorAll(".movie-content");
const dots = document.querySelectorAll(".movie-dots .dot");
let currentSlide = 0;

function showSlide(index) {
  movieContents.forEach((content) => content.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  movieContents[index].classList.add("active");
  dots[index].classList.add("active");
}

// Click on dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % movieContents.length;
  showSlide(currentSlide);
}, 5000);

// Swiper initialization
document.querySelectorAll('.movie-poster-slider').forEach((section, index) => {
  const swiper = new Swiper(section.querySelector('.mySwiper'), {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: section.querySelector('.swiper-button-next'),
      prevEl: section.querySelector('.swiper-button-prev'),
    },
  });
});