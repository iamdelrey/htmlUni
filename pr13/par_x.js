document.addEventListener("DOMContentLoaded", function () {
  const parallaxContainer = document.querySelector(".parallax-container");
  const parallaxBackground = document.querySelector(".parallax-background");

  window.addEventListener("scroll", function () {
    // Вычисляем значение прокрутки страницы
    const scrollValue = window.scrollY;

    // Применяем трансформацию для создания эффекта параллакса
    parallaxBackground.style.transform = `translateY(-${scrollValue * 0.4}px)`;
  });
});
