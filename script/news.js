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

    function criarCard(item) {
        var card = document.createElement("div");
        card.className = "card";
    
        var image = document.createElement("img");
        image.src = item.image;
        image.alt = item.description;
        image.className = "cardImage";
        card.appendChild(image);
    
        var description = document.createElement("p");
        description.className = "productDescription";
        description.textContent = item.description;
        card.appendChild(description);
    
        var productValue = document.createElement("p");
        productValue.className = "productValue";
        productValue.textContent = `R$ ${item.value.toFixed(2)}`;
        card.appendChild(productValue);
    
        return card;
    }
    
    function updateCarousel() {
        const cards = document.querySelectorAll(".card");
        const transitionDuration = 1000;
    
        cards.forEach(card => {
            card.style.transition = `transform ${transitionDuration}ms ease-in-out`;
            card.style.transform = "translateX(-100%)";
        });
    
        setTimeout(() => {
            cards.forEach(card => carouselContent.removeChild(card));
    
            for (let i = currentIndex; i < currentIndex + totalItems; i++) {
                const index = i % totalItems;
                const card = criarCard(newsList[index]);
                carouselContent.appendChild(card);
            }
    
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.transition = "none";
                    card.style.transform = "translateX(0)";
                });
            }, 0);
        }, transitionDuration);
    }
    
    let currentIndex = 0;
    const carouselContent = document.getElementById("newsSlide");
    const totalItems = newsList.length;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    const nextButton = document.getElementById("nextNewsButton");
    const prevButton = document.getElementById("prevNewsButton");
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Inicialização
    updateCarousel();
});
