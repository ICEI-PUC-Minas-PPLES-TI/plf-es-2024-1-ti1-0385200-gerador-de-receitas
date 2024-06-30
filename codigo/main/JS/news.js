document.addEventListener('DOMContentLoaded', function () {
    let allNews = [
        {
            "id": 1,
            "title": "Buscas por produtos veganos disparam em 50%",
            "summary": "Um recente levantamento revelou um aumento significativo nas buscas por produtos veganos, com um impressionante crescimento de 50% nos últimos seis meses. Especialistas atribuem essa tendência a uma maior conscientização sobre sustentabilidade e saúde entre os consumidores. De acordo com os dados coletados, alimentos como substitutos de carne, laticínios veganos e produtos de beleza cruelty-free lideraram as buscas. A preocupação com o bem-estar animal e os impactos ambientais da indústria alimentícia tradicional estão impulsionando essa mudança de hábitos. Empresas do setor estão respondendo à demanda crescente, expandindo suas linhas de produtos veganos e investindo em alternativas sustentáveis. Supermercados relatam prateleiras esvaziadas desses itens, refletindo a adesão massiva dos consumidores a um estilo de vida mais ético e saudável. À medida que a popularidade dos produtos veganos continua a crescer, espera-se que a indústria se adapte ainda mais para atender a essa demanda em expansão.",
            "date": "2023-01-12",
            "image": "../../ASSETS/img/Rectangle36.png",
            "link": "news_detail.html"
        },
        {
            "id": 2,
            "title": "Preço da carne bovina tem queda de 13%",
            "summary": "Produto ficou 13% mais em conta, segundo a inflação oficial. Mas os valores vêm caindo mais intensamente no campo do que nas prateleiras dos supermercados.",
            "date": "2023-02-02",
            "image": "../../ASSETS/img/Rectangle29.png",
            "link": "news_detail.html"
        },
        {
            "id": 3,
            "title": "Ovos: Um Super Alimento para a Saúde",
            "summary": "Os ovos são considerados um dos alimentos mais completos e nutritivos disponíveis para consumo humano. Rico em proteínas de alta qualidade, vitaminas, minerais e",
            "date": "2023-03-02",
            "image": "../../ASSETS/img/Rectangle30.png",
            "link": "news_detail.html"
        },
        {
            "id": 4,
            "title": "Entenda como insetos são usados para transformar restos de comida em ração e adubo para agropecuária",
            "summary": "Projeto foi um dos escolhidos de iniciativa vai percorrer 18 países em busca de exemplos de sustentabilidade.",
            "date": "2024-04-01",
            "image": "../../ASSETS/img/Rectangle31.png",
            "link": "news_detail.html"
        },
        {
            "id": 5,
            "title": "Pesquisadores desenvolvem robô capaz de provar comida e dar feedback",
            "summary": "Pesquisadores da Universidade de Cambridge estão desenvolvendo um robô que prova a comida.",
            "date": "2024-05-02",
            "image": "../../ASSETS/img/Rectangle32.png",
            "link": "news_detail.html"
        },
        {
            "id": 6,
            "title": "Festival Gastronômico ‘Sabores da Floresta’ marca comemorações do aniversário de Alta Floresta",
            "summary": "A sétima edição do 'Festival Gastronômico' de Alta Floresta será em comemoração ao aniversário do município que completa 48 anos no próximo",
            "date": "2024-06-01",
            "image": "../../ASSETS/img/Rectangle33.png",
            "link": "news_detail.html"
        },
        {
            "id": 7,
            "title": "Queda na locomoção e falhas no sistema imune: estudo mostra como agrotóxicos afetam abelhas nativas",
            "summary": "Insetos apresentam alterações podem levar ao enfraquecimento das colmeias, comprometendo polinização e a produção de alimentos..",
            "date": "2024-07-03",
            "image": "../../ASSETS/img/Rectangle34.png",
            "link": "news_detail.html"
        }
    ];

    let currentIndex = 0;
    const newsPerPage = 3;
    let sortedNews = allNews.slice();

    // Função para renderizar as notícias na página principal
    function renderNews(news, append = false) {
        const newsContainer = document.querySelector('.news-container');
        if (!append) {
            newsContainer.innerHTML = '';
        }

        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.setAttribute('data-id', item.id); // Adicionar atributo data-id com o ID da notícia

            const imageAnchor = document.createElement('a');
            imageAnchor.href = item.link;
            const newsImage = document.createElement('div');
            newsImage.classList.add('noticia-imagem');
            newsImage.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
            imageAnchor.appendChild(newsImage);

            const newsInfo = document.createElement('div');
            newsInfo.classList.add('news-info');
            newsInfo.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.summary}</p>
                <p class="data-publicacao">Data de Publicação: ${new Date(item.date).toLocaleDateString('pt-BR')}</p>
            `;

            newsItem.appendChild(imageAnchor);
            newsItem.appendChild(newsInfo);

            newsContainer.appendChild(newsItem);

            const divider = document.createElement('div');
            divider.className = 'news-divider';
            newsContainer.appendChild(divider);

            // Adicionar evento de clique para carregar detalhes da notícia ao clicar no item
            newsItem.addEventListener('click', function() {
                const newsId = parseInt(newsItem.getAttribute('data-id'));
                const selectedNews = allNews.find(news => news.id === newsId);
                if (selectedNews) {
                    // Armazenar a notícia selecionada no localStorage
                    localStorage.setItem('currentNews', JSON.stringify(selectedNews));
                    // Redirecionar para a página de detalhes da notícia
                    window.location.href = 'news_detail.html';
                }
            });
        });
    }

    // Renderizar as primeiras notícias ao carregar a página
    renderNews(allNews.slice(0, newsPerPage));
    currentIndex = newsPerPage;
    setupSort(allNews);

    function setupSort(news) {
        document.getElementById('sort-news').addEventListener('change', function() {
            const order = this.value;
            sortedNews = news.slice().sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return order === 'recent' ? dateB - dateA : dateA - dateB;
            });

            currentIndex = newsPerPage;
            renderNews(sortedNews.slice(0, newsPerPage));
            document.getElementById('btnCarregarMais').style.display = sortedNews.length > newsPerPage ? 'block' : 'none';

            const btnCarregarMais = document.getElementById('btnCarregarMais');
            btnCarregarMais.removeEventListener('click', loadMoreNews);
            btnCarregarMais.addEventListener('click', loadMoreNews);

            function loadMoreNews() {
                const nextNews = sortedNews.slice(currentIndex, currentIndex + newsPerPage);
                renderNews(nextNews, true);
                currentIndex += newsPerPage;
                if (currentIndex >= sortedNews.length) {
                    btnCarregarMais.style.display = 'none';
                }
            }
        });
    }
});