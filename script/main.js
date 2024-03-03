document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".carouselSlide");

    let currentIndex = 0;
    const intervalTime = 3000; // Intervalo em milissegundos (5 segundos)

    function showSlide(index) {
        const totalSlides = document.querySelectorAll(".carouselSlide img").length;
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const translateValue = -currentIndex * 100 + "%";
        slideContainer.style.transform = "translateX(" + translateValue + ")";
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function startCarousel() {
        setInterval(nextSlide, intervalTime);
    }

    // Inicia o carrossel automaticamente
    startCarousel();
});