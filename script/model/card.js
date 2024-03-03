export class Card {
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
