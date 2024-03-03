import { Card } from "./card.js";

export class Carousel {
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
