//script do conteúdo dos cards e dos cards do carrossel

document.addEventListener("DOMContentLoaded", function () {
    const cardData = {
        "cardnocarrossel": [
            { "id": 1, "foto": "https://img.freepik.com/fotos-premium/maca-vermelha-em-fundo-branco_253984-5689.jpg", "nome": "Maçã 🍎", "informacoes": "Conheça os benefícios da Maça na sua Dieta!." },
            { "id": 2, "foto": "https://img.freepik.com/fotos-premium/banana-no-fundo-branco_88281-24.jpg", "nome": "Banana 🍌", "informacoes": "Conheça os benefícios da Banana na sua Dieta!." },
            { "id": 3, "foto": "https://img.freepik.com/fotos-premium/fruta-laranja-e-fatia-isoladas-em-fundo-branco-com-tracado-de-recorte_106885-3368.jpg", "nome": "Laranja 🍊", "informacoes": "Conheça os benefícios da Laranja na sua Dieta!." },
            { "id": 4, "foto": "https://img.freepik.com/fotos-premium/cenouras-e-fatias-cortadas-de-cenoura-isoladas-em-fundo-branco_264757-214.jpg", "nome": "Cenoura 🥕", "informacoes": "Conheça os benefícios da Cenoura na sua Dieta!." },
            { "id": 5, "foto": "https://img.freepik.com/fotos-premium/abobrinha-verde-fresca-isolada-no-fundo-branco_62856-4909.jpg", "nome": "Abobrinha 🥒", "informacoes": "Conheça os benefícios da Abobrinha na sua Dieta!." },
            { "id": 6, "foto": "https://img.freepik.com/fotos-premium/varios-tuberculos-de-batata-jovem-encontram-se-sobre-um-fundo-branco-as-batatas-sao-cortadas-em-pedacos-isolado_414617-662.jpg", "nome": "Batata 🥔", "informacoes": "Conheça os benefícios da Batata na sua Dieta!." },
            { "id": 7, "foto": "https://img.freepik.com/fotos-premium/brocolis-isolado-em-um-fundo-branco_120872-31309.jpg", "nome": "Brócolis 🥦", "informacoes": "Conheça os benefícios do Brócolis na sua Dieta!." },
            { "id": 8, "foto": "https://img.freepik.com/fotos-premium/pimentao-colorido-isolado-no-fundo-branco_696838-1401.jpg", "nome": "Pimentão 🌶️", "informacoes": "Conheça os benefícios do Pimentão na sua Dieta!." },
            { "id": 9, "foto": "https://img.freepik.com/fotos-premium/um-monte-de-espinafre-em-um-fundo-branco_901003-47391.jpg", "nome": "Espinafre 🥬", "informacoes": "Conheça os benefícios do Espinafre na sua Dieta!." },
            { "id": 10, "foto": "https://img.freepik.com/fotos-premium/alface-de-carvalho-verde-sobre-fundo-branco_319514-3347.jpg", "nome": "Alface 🥬", "informacoes": "Conheça os benefícios do Alface na sua Dieta!." },
            { "id": 11, "foto": "https://img.freepik.com/fotos-premium/um-monte-de-couve-em-um-fundo-branco_265515-9347.jpg", "nome": "Couve 🥬", "informacoes": "Conheça os benefícios da Couve na sua Dieta!." },
            { "id": 12, "foto": "https://img.freepik.com/fotos-premium/rucula-isolada-no-fundo-branco-um-monte-de-rucula-foto-de-alta-qualidade_311158-7342.jpg", "nome": "Rúcula 🥬", "informacoes": "Conheça os benefícios da Rúcula na sua Dieta!." }
        ]
    };

    const carousel = document.getElementById('carousel');

    cardData.cardnocarrossel.forEach(card => {
        const cardElement = document.createElement('li');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <div class="card-imagem">
                <div class="img"><img src="${card.foto}" alt="${card.nome}" draggable="false"></div>
            </div>
            <div class="card-content">
                <h2>${card.nome}</h2>
                <p class="text">${card.informacoes}</p>
            </div>
            <div class="container-botao">
                <button class="botao">
                    <h2>Saiba Mais</h2>
                </button>
            </div>
        `;

        carousel.appendChild(cardElement);
    });

    setCardPerView();

    window.addEventListener("resize", setCardPerView);
});