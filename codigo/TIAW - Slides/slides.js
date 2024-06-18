//script do conteúdo do slide

document.addEventListener('DOMContentLoaded', function () {
    const carouselContent = document.querySelector('.carousel-content');

    const slidesData = {
        "slides": [
            {
                "id": 1,
                "foto": "cozinha.png",
                "nome": "Kitchen Companion: Seu Amigo na Cozinha!",
                "informacoes": "Bem-vindos ao site que vai salvar a sua fome!"
            },
            {
                "id": 2,
                "foto": "cozinha.png",
                "nome": "Venha conhecer o nosso time!",
                "informacoes": "Apresentamos aqui o nosso site e seus desenvolvedores."
            },
            {
                "id": 3,
                "foto": "cozinha.png",
                "nome": "Confira as últimas Notícias!",
                "informacoes": "Jornal dos Alimentos: tudo o que você precisa saber está aqui!"
            }
        ]
    };

    const createSlideElements = () => {
        slidesData.slides.forEach(slide => {

            const slideElement = document.createElement('div');
            slideElement.classList.add('carousel-imagem');

            const imagem = document.createElement('img');
            imagem.src = slide.foto;
            imagem.alt = slide.nome;

            const textos = document.createElement('div');
            textos.classList.add('carousel-textos');

            const titulo = document.createElement('h2');
            titulo.textContent = slide.nome;

            const informacoes = document.createElement('p');
            informacoes.textContent = slide.informacoes;

            textos.appendChild(titulo);
            textos.appendChild(informacoes);

            slideElement.appendChild(imagem);
            slideElement.appendChild(textos);

            carouselContent.appendChild(slideElement);
        });
    };

    createSlideElements();
});
