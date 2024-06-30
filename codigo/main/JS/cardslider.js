document.addEventListener("DOMContentLoaded", function () {
    const cardData = {
        "cardnocarrossel": [
            { "id": 1, "foto": "https://img.freepik.com/fotos-premium/maca-vermelha-em-fundo-branco_253984-5689.jpg", "nome": "Maçã 🍎", "informacoes": "Conheça os benefícios da Maça na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-da-maca-para-a-saude/" },
            { "id": 2, "foto": "https://img.freepik.com/fotos-premium/banana-no-fundo-branco_88281-24.jpg", "nome": "Banana 🍌", "informacoes": "Conheça os benefícios da Banana na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-da-banana/" },
            { "id": 3, "foto": "https://img.freepik.com/fotos-premium/fruta-laranja-e-fatia-isoladas-em-fundo-branco-com-tracado-de-recorte_106885-3368.jpg", "nome": "Laranja 🍊", "informacoes": "Conheça os benefícios da Laranja na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-da-laranja/" },
            { "id": 4, "foto": "https://img.freepik.com/fotos-premium/cenouras-e-fatias-cortadas-de-cenoura-isoladas-em-fundo-branco_264757-214.jpg", "nome": "Cenoura 🥕", "informacoes": "Conheça os benefícios da Cenoura na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-da-cenoura/" },
            { "id": 5, "foto": "https://img.freepik.com/fotos-premium/abobrinha-verde-fresca-isolada-no-fundo-branco_62856-4909.jpg", "nome": "Abobrinha 🥒", "informacoes": "Conheça os benefícios da Abobrinha na sua Dieta!.","link":"https://www.tuasaude.com/abobrinha/" },
            { "id": 6, "foto": "https://img.freepik.com/fotos-premium/varios-tuberculos-de-batata-jovem-encontram-se-sobre-um-fundo-branco-as-batatas-sao-cortadas-em-pedacos-isolado_414617-662.jpg", "nome": "Batata 🥔", "informacoes": "Conheça os benefícios da Batata na sua Dieta!.","link":"https://www.tuasaude.com/batata/" },
            { "id": 7, "foto": "https://img.freepik.com/fotos-premium/brocolis-isolado-em-um-fundo-branco_120872-31309.jpg", "nome": "Brócolis 🥦", "informacoes": "Conheça os benefícios do Brócolis na sua Dieta!.","link":"https://www.tuasaude.com/7-boas-razoes-para-comer-brocolis/" },
            { "id": 8, "foto": "https://img.freepik.com/fotos-premium/pimentao-colorido-isolado-no-fundo-branco_696838-1401.jpg", "nome": "Pimentão 🌶️", "informacoes": "Conheça os benefícios do Pimentão na sua Dieta!.","link":"https://www.tuasaude.com/pimentao/" },
            { "id": 9, "foto": "https://img.freepik.com/fotos-premium/um-monte-de-espinafre-em-um-fundo-branco_901003-47391.jpg", "nome": "Espinafre 🥬", "informacoes": "Conheça os benefícios do Espinafre na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-do-espinafre/" },
            { "id": 10, "foto": "https://img.freepik.com/fotos-premium/alface-de-carvalho-verde-sobre-fundo-branco_319514-3347.jpg", "nome": "Alface 🥬", "informacoes": "Conheça os benefícios do Alface na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-da-alface/" },
            { "id": 11, "foto": "https://img.freepik.com/fotos-premium/um-monte-de-couve-em-um-fundo-branco_265515-9347.jpg", "nome": "Couve 🥬", "informacoes": "Conheça os benefícios da Couve na sua Dieta!.","link":"https://www.tuasaude.com/couve/" },
            { "id": 12, "foto": "https://img.freepik.com/fotos-premium/rucula-isolada-no-fundo-branco-um-monte-de-rucula-foto-de-alta-qualidade_311158-7342.jpg", "nome": "Rúcula 🥬", "informacoes": "Conheça os benefícios da Rúcula na sua Dieta!.","link":"https://www.tuasaude.com/beneficios-da-rucula/" }
        ]
    };
    const wrapper = document.querySelector(".wrappergeracao");
    const carousel = document.querySelector(".carouselgeracao");
    const arrowBtns = document.querySelectorAll(".wrappergeracao i");
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    let cardPerView;

    const setCardPerView = () => {
        cardPerView = Math.round(carousel.offsetWidth / carousel.querySelector(".cardgeracao").offsetWidth);
        cloneCards();
    };

    const cloneCards = () => {
        const carouselChildren = [...carousel.children];
        carousel.innerHTML = ''; 
        carouselChildren.forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML); 
        });
        carouselChildren.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML); 
        });
        carouselChildren.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML); 
        });
        carousel.classList.add("no-transitiongeracao");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transitiongeracao");
    };

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const firstCardWidth = carousel.querySelector(".cardgeracao").offsetWidth;
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth * cardPerView : firstCardWidth * cardPerView;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragginggeracao");
        startX = e.pageX || e.touches[0].pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return; 
        const x = e.pageX || e.touches[0].pageX;
        carousel.scrollLeft = startScrollLeft - (x - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragginggeracao");
    };

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transitiongeracao");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transitiongeracao");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transitiongeracao");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transitiongeracao");
        }
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += carousel.querySelector(".cardgeracao").offsetWidth, 2500);
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);

    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    cardData.cardnocarrossel.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('cardgeracao');
        cardElement.innerHTML = `
            <div class="card-imagemgeracao">
                <div class="img"><img src="${card.foto}" alt="${card.nome}" draggable="false"></div>
            </div>
            <div class="card-contentgeracao">
                <h2>${card.nome}</h2>
                <p class="textgeracao">${card.informacoes}</p>
            </div>
            <div class="container-botaogeracao">
                <a href="${card.link}" class="botaogeracao">
                    <h2>Saiba Mais</h2>
                </a>
            </div>
        `;
        carousel.appendChild(cardElement);
    });
    setCardPerView();
    window.addEventListener("resize", setCardPerView);
});