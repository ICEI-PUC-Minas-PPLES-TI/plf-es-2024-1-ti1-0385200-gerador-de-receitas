document.addEventListener('DOMContentLoaded', function () {
    const allNews = JSON.parse(localStorage.getItem('newsData')) || [];
    const newsPerPage = 3;
    let currentIndex = 0;

    renderNews(allNews.slice(0, newsPerPage));
    setupPagination(allNews);

    function renderNews(news, append = false) {
        const newsContainer = document.querySelector('.news-container');
        if (!append) {
            newsContainer.innerHTML = '';
        }

        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.setAttribute('data-date', item.date);

            const imageAnchor = document.createElement('a');
            imageAnchor.href = '../cfg/news.html'; 
            imageAnchor.addEventListener('click', function () {
                localStorage.setItem('currentNews', JSON.stringify(item));
            });

            const newsImage = document.createElement('div');
            newsImage.classList.add('noticia-imagem');
            newsImage.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
            imageAnchor.appendChild(newsImage);

            const newsInfo = document.createElement('div');
            newsInfo.classList.add('news-info');
            newsInfo.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.summary}</p>
                <p class="data-publicacao">${new Date(item.date).toLocaleDateString('pt-BR')}</p>
            `;

            newsItem.appendChild(imageAnchor);
            newsItem.appendChild(newsInfo);

            newsContainer.appendChild(newsItem);

            const divider = document.createElement('div');
            divider.className = 'news-divider';
            newsContainer.appendChild(divider);
        });
    }

    function setupPagination(news) {
        const btnCarregarMais = document.getElementById('btnCarregarMais');

        btnCarregarMais.addEventListener('click', function () {
            const nextNews = news.slice(currentIndex, currentIndex + newsPerPage);
            renderNews(nextNews, true);
            currentIndex += newsPerPage;
            if (currentIndex >= news.length) {
                this.style.display = 'none';
            }
        });
    }
});
