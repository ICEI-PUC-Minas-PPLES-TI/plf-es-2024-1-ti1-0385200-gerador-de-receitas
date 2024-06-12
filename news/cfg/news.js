document.addEventListener('DOMContentLoaded', function () {
    let allNews = JSON.parse(localStorage.getItem('newsData')) || [];
    let currentIndex = 0;
    const newsPerPage = 3;
    let sortedNews = allNews.slice();
    renderNews(allNews.slice(0, newsPerPage));
    setupPagination(sortedNews);
    setupSort(allNews);
    document.getElementById('btnCarregarMais').addEventListener('click', function () {
        const nextNews = sortedNews.slice(currentIndex, currentIndex + newsPerPage);
        renderNews(nextNews, true);
        currentIndex += newsPerPage;
        if (currentIndex >= sortedNews.length) {
            this.style.display = 'none';
        }
    });

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
            imageAnchor.href = "#";
            imageAnchor.addEventListener('click', function () {
                localStorage.setItem('currentNews', JSON.stringify(item));
                window.location.href = '../html/news_detail.html';
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

    function setupSort(news) {
        document.getElementById('sort-news').addEventListener('change', function () {
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
