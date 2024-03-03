import { Carousel } from "./model/product_carousel.js";

document.addEventListener("DOMContentLoaded", function () {
    const newsList = [
        { image: "/images/produtos/foto5-azul.png", description: "Regata azul", value: 19.99 },
        { image: "/images/produtos/foto5-rosa.png", description: "Regata rosa", value: 19.99 },
        { image: "/images/produtos/foto5-verde.png", description: "Regata verde", value: 19.99 },
        { image: "/images/produtos/foto4-verde.png", description: "Jaqueta de inverno", value: 159.99 },
        { image: "/images/produtos/foto8-verde.png", description: "Camiseta", value: 59.99 },
        { image: "/images/produtos/foto9-rosa.png", description: "Camisa junina", value: 49.99 },
        { image: "/images/produtos/foto10-rosa.png", description: "Camisa manga longa", value: 69.99 },
    ];

    const newsCarousel = new Carousel("newsSlide", newsList);

    const nextButton = document.getElementById("nextNewsButton");
    const prevButton = document.getElementById("prevNewsButton");

    nextButton.addEventListener("click", () => newsCarousel.nextSlide());
    prevButton.addEventListener("click", () => newsCarousel.prevSlide());

    const nextSellerButton = document.getElementById("nextSellerButton");
    const prevSellerButton = document.getElementById("prevSellerButton");

    const sellerCarousel = new Carousel("sellerSlide",newsList);
    nextSellerButton.addEventListener("click", () => sellerCarousel.nextSlide());
    prevSellerButton.addEventListener("click", () => sellerCarousel.prevSlide());
});
