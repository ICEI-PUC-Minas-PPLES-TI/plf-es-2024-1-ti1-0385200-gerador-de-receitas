//script do conteúdo dos cards

let data = {
    "cards": [
        {
            "id": 1,
            "foto": "https://img.freepik.com/fotos-gratis/delicioso-macarrao-pesto-no-prato_23-2150690771.jpg",
            "tagum": "Massa",
            "tagdois": "Vegano",
            "nome": "Macarrão ao Pesto",
            "informacoes": "Já experimentou essa receita de Macarrão ao Pesto? Confira!."
        },
        {
            "id": 2,
            "foto": "https://img.freepik.com/fotos-premium/churrasco-de-carne-bovina-costeleta-de-alcatra-em-um-prato-de-madeira-com-salada-de-legumes_89816-19798.jpg",
            "tagum": "Proteína",
            "tagdois": "Vegetais",
            "nome": "Carne com Legumes",
            "informacoes": "Já experimentou essa receita de Carne com Legumes? Confira!."
        },
        {
            "id": 3,
            "foto": "https://img.freepik.com/vetores-premium/close-de-bolo-de-framboesa-em-um-prato-na-mesa-de-madeira_858664-3763.jpg",
            "tagum": "Sobremesa",
            "tagdois": "Frutas",
            "nome": "Bolo de Framboesa",
            "informacoes": "Já experimentou essa receita de Bolo de Framboesa? Confira!."
        },
        {
            "id": 4,
            "foto": "https://img.freepik.com/fotos-gratis/vista-lateral-do-cafe-da-manha-com-tomates-de-alface-de-ovo-frito-na-fatia-de-pao-seco-no-prato-com-suco-de-laranja-em-pano-xadrez-em-fundo-de-madeira_141793-130278.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=ais",
            "tagum": "Carb",
            "tagdois": "Proteína",
            "nome": "Torradas com Ovo",
            "informacoes": "Já experimentou essa receita de Torradas com Ovo? Confira!."
        }
    ]
};

function carregarCards() {
    let cardPrincipal = document.querySelector('.card-principal');
    let cardsMenoresContainer = document.querySelector('.cards-menores');

    cardPrincipal.innerHTML = '';
    cardsMenoresContainer.innerHTML = '';

    let primeiroCard = data.cards[0];
    cardPrincipal.innerHTML = `
        <img src="${primeiroCard.foto}" alt="Imagem de ${primeiroCard.nome}" class="card-image">
        <div class="card-content">
            <div class="container-botao-um">
                <button class="botao-um"><h2>${primeiroCard.tagum}</h2></button>
                <button class="botao-um"><h2>${primeiroCard.tagdois}</h2></button>
            </div>
            <h2 class="card-title-um">${primeiroCard.nome}</h2>
            <p class="card-text-um">${primeiroCard.informacoes}</p>
            <button class="botao-coracao-um"><i class="far fa-heart"></i></button>
        </div>
    `;

    let botaoCoracaoPrincipal = cardPrincipal.querySelector('.botao-coracao-um');
    botaoCoracaoPrincipal.addEventListener('click', function () {
        toggleHeart(botaoCoracaoPrincipal);
    });

    for (let i = 1; i < data.cards.length; i++) {
        let card = data.cards[i];
        let cardMenor = document.createElement('div');
        cardMenor.classList.add('card', 'card-menor');
        cardMenor.innerHTML = `
            <img src="${card.foto}" alt="Imagem de ${card.nome}" class="card-img">
            <div class="card-content">
                <div class="container-botao-dois">
                    <button class="botao-dois"><h2>${card.tagum}</h2></button>
                    <button class="botao-dois"><h2>${card.tagdois}</h2></button>
                </div>
                <h2 class="card-title-dois">${card.nome}</h2>
                <p class="card-text-dois">${card.informacoes}</p>
                <button class="botao-coracao-dois"><i class="far fa-heart"></i></button>
            </div>
        `;
        cardsMenoresContainer.appendChild(cardMenor);

        let botaoCoracaoMenor = cardMenor.querySelector('.botao-coracao-dois');
        botaoCoracaoMenor.addEventListener('click', function () {
            toggleHeart(botaoCoracaoMenor);
        });
    }
}

function toggleHeart(botao) {
    botao.classList.toggle('liked');
    let heartIcon = botao.querySelector('i');
    heartIcon.classList.toggle('far');
    heartIcon.classList.toggle('fas');
}

document.addEventListener('DOMContentLoaded', function () {
    carregarCards();
});
