document.addEventListener("DOMContentLoaded", function () {
    const newsList = [
        { image: "../images/produtos/foto5-azul.png", description: "Regata azul", value: 19.99 },
        { image: "../images/produtos/foto5-rosa.png", description: "Regata rosa", value: 19.99 },
        { image: "../images/produtos/foto5-verde.png", description: "Regata verde", value: 19.99 },
        { image: "../images/produtos/foto4-verde.png", description: "Jaqueta de inverno", value: 159.99 },
        { image: "../images/produtos/foto8-verde.png", description: "Camiseta", value: 59.99 },
        { image: "../images/produtos/foto9-rosa.png", description: "Camisa junina", value: 49.99 },
        { image: "../images/produtos/foto10-rosa.png", description: "Camisa manga longa", value: 69.99 },
    ];

    class Card {
        constructor(item) {
            this.element = document.createElement("div");
            this.element.className = "card";

            this.createImage(item.image, item.description);
            this.createDescription(item.description);
            this.createProductValue(item.value);
        }

        createImage(src, alt) {
            const image = document.createElement("img");
            image.src = src;
            image.alt = alt;
            image.className = "cardImage";
            this.element.appendChild(image);
        }

        createDescription(text) {
            const description = document.createElement("p");
            description.className = "productDescription";
            description.textContent = text;
            this.element.appendChild(description);
        }

        createProductValue(value) {
            const productValue = document.createElement("p");
            productValue.className = "productValue";
            productValue.textContent = `R$ ${value.toFixed(2)}`;
            this.element.appendChild(productValue);
        }

        getElement() {
            return this.element;
        }
    }

    class Carousel {
        constructor(containerId, items, currentIndex = 0) {
            this.container = document.getElementById(containerId);
            this.items = items;
            this.currentIndex = currentIndex;
            this.totalItems = items.length;

            this.transitionDuration = 1000;

            this.init();
        }

        init() {
            this.updateCarousel();
        }

        updateCarousel() {
            const cards = this.container.querySelectorAll(".card");
            const clonedCards = Array.from(cards);

            clonedCards.forEach((card) => {
                card.style.transition = `transform ${this.transitionDuration}ms ease-in-out`;
                card.style.transform = "translateX(-100%)";
            });

            setTimeout(() => {
                clonedCards.forEach((card) => this.container.removeChild(card));

                for (let i = this.currentIndex; i < this.currentIndex + this.totalItems; i++) {
                    const index = i % this.totalItems;
                    const card = new Card(this.items[index]);
                    this.container.appendChild(card.getElement());
                }

                setTimeout(() => {
                    clonedCards.forEach((card) => {
                        card.style.transition = "none";
                        card.style.transform = "translateX(0)";
                    });
                }, 0);
            }, this.transitionDuration);
        }

        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.totalItems;
            this.updateCarousel();
        }

        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
            this.updateCarousel();
        }
    }

    const newsCarousel = new Carousel("newsSlide", newsList);

    const nextButton = document.getElementById("nextNewsButton");
    const prevButton = document.getElementById("prevNewsButton");

    nextButton.addEventListener("click", () => newsCarousel.nextSlide());
    prevButton.addEventListener("click", () => newsCarousel.prevSlide());

    const nextSellerButton = document.getElementById("nextSellerButton");
    const prevSellerButton = document.getElementById("prevSellerButton");

    const sellerCarousel = new Carousel("sellerSlide", newsList);
    nextSellerButton.addEventListener("click", () => sellerCarousel.nextSlide());
    prevSellerButton.addEventListener("click", () => sellerCarousel.prevSlide());
});
