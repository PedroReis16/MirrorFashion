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

    function criarCard(imageSrc, altText, text, value) {
        var card = document.createElement("div");
        card.className = "card";
        var image = document.createElement("img");
        image.src = imageSrc;
        image.alt = altText;
        image.className = "cardImage";
        card.appendChild(image);
        var description = document.createElement("p");
        description.className = "productDescription";
        description.textContent = text;
        card.appendChild(description);
        var productValue = document.createElement("p");
        productValue.className = "productValue";
        productValue.textContent = `R$ ${value}`;
        card.appendChild(productValue);

        var container = document.getElementById("newsSlide");
        container.appendChild(card);
    }

    newsList.forEach(element => {
        criarCard(element.image, "Descrição da imagem", element.description, element.value);
    });

    let currentIndex = 0;
    const carouselContent = document.getElementById("newsSlide");
    const totalItems = document.querySelectorAll(".card").length;

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % totalItems;

        if (nextIndex !== 0 || currentIndex !== totalItems - 1) {
            // Se não estiver no último item, execute a transição
            const firstCard = carouselContent.firstElementChild;
            carouselContent.removeChild(firstCard);

            const newCard = document.createElement("div");
            newCard.className = "card";
            const newImage = document.createElement("img");
            newImage.src = newsList[nextIndex].image;
            newImage.alt = "Descrição da imagem";
            newImage.className = "cardImage";
            newCard.appendChild(newImage);
            carouselContent.appendChild(newCard);

            currentIndex = nextIndex;
        }
    }

    function prevSlide() {
        const prevIndex = (currentIndex + totalItems - 1) % totalItems;

        if (prevIndex !== totalItems - 1 || currentIndex !== 0) {
            // Se não estiver no primeiro item, execute a transição
            const lastCard = carouselContent.lastElementChild;
            carouselContent.removeChild(lastCard);

            const newCard = document.createElement("div");
            newCard.className = "card";
            const newImage = document.createElement("img");
            newImage.src = newsList[prevIndex].image;
            newImage.alt = "Descrição da imagem";
            newImage.className = "cardImage";
            newCard.appendChild(newImage);
            carouselContent.insertBefore(newCard, carouselContent.firstChild);

            currentIndex = prevIndex;
        }
    }

    const nextButton = document.getElementById("nextNewsButton");
    const prevButton = document.getElementById("prevNewsButton");

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});
