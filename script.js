const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  slide.style.transform = `translateX(-${index * 100}vw)`;

  currentIndex = index;
}

btnLeft.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

btnRight.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Inicializa o carrossel
showSlide(0);

// ...existing code...

// Auto-slide
let autoSlide = setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000); // Troca a cada 4 segundos

// Pausa o auto-slide ao passar o mouse
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseenter", () =>
  clearInterval(autoSlide)
);
carouselContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
});
