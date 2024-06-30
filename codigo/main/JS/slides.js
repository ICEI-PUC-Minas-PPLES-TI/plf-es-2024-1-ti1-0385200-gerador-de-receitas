document.addEventListener('DOMContentLoaded', function () {
    const carouselContent = document.querySelector('.carousel-content');
    const carouselTitle = document.getElementById('carousel-title');
    const carouselDescription = document.getElementById('carousel-description');

    const slidesData = {
        "slides": [
            {
                "id": 2,
                "foto": "ASSETS/img/Rectangle 26.png",
                "nome": "Venha conhecer o nosso time!",
                "informacoes": "Apresentamos aqui o nosso site e seus desenvolvedores.",
                "link": "PAGES/sobre/aboutpage.html"
            },
            {
                "id": 3,
                "foto": "ASSETS/img/Rectangle29.png",
                "nome": "Confira as últimas Notícias!",
                "informacoes": "Jornal dos Alimentos: tudo o que você precisa saber está aqui!",
                "link": "PAGES/noticia/news.html"
            }
        ]
    };

    let currentSlideIndex = 0;

    const createSlideElements = () => {
        slidesData.slides.forEach((slide, index) => {

            const slideElement = document.createElement('div');
            slideElement.classList.add('carousel-imagem');

            const imagem = document.createElement('img');
            imagem.src = slide.foto;
            imagem.alt = slide.nome;

            if (slide.link) {
                imagem.addEventListener('click', () => {
                    window.location.href = slide.link;
                });
            }

            slideElement.appendChild(imagem);
            carouselContent.appendChild(slideElement);
        });
    };

    const updateTitleAndDescription = () => {
        const currentSlide = slidesData.slides[currentSlideIndex];
        carouselTitle.textContent = currentSlide.nome;
        carouselDescription.textContent = currentSlide.informacoes;
    };

    const moveSlide = (direction) => {
        currentSlideIndex = (currentSlideIndex + direction + slidesData.slides.length) % slidesData.slides.length;
        const offset = -currentSlideIndex * 100;
        carouselContent.style.transform = `translateX(${offset}%)`;
        updateTitleAndDescription();
    };

    document.getElementById('carousel-left').addEventListener('click', () => moveSlide(-1));
    document.getElementById('carousel-right').addEventListener('click', () => moveSlide(1));

    createSlideElements();
    updateTitleAndDescription();
});
