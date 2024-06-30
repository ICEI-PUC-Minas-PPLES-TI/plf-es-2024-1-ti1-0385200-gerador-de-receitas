document.addEventListener('DOMContentLoaded', function () {
    let allNews = JSON.parse(localStorage.getItem('newsData') || '[]');
    let currentIndex = 0;
    const newsPerPage = 3;

    function renderNews(news, append = false) {
        const newsContainer = document.querySelector('.news-container');
        if (!append) {
            newsContainer.innerHTML = ''; 
        }
    
        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.setAttribute('data-date', item.date);
    
            const newsImage = document.createElement('div');
            newsImage.classList.add('noticia-imagem');
            newsImage.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
    
            const newsInfo = document.createElement('div');
            newsInfo.classList.add('news-info');
            newsInfo.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.summary}</p>
                <p class="data-publicacao">Data de Publicação: ${new Date(item.date).toLocaleDateString('pt-BR')}</p>
            `;
    
            newsItem.appendChild(newsImage);
            newsItem.appendChild(newsInfo);
    
            newsContainer.appendChild(newsItem);
    
            const divider = document.createElement('div');
            divider.className = 'news-divider';
            newsContainer.appendChild(divider);
        });
    }


    function submitForm(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const summary = document.getElementById('summary').value;
        const publicationDate = document.getElementById('date').value;
        const imageUrl = document.getElementById('image').value;

        const currentDate = new Date();

        const newsItem = {
            title: title,
            summary: summary,
            date: currentDate,
            image: imageUrl 
        };

        allNews.push(newsItem);
        localStorage.setItem('newsData', JSON.stringify(allNews));
        alert('Notícia cadastrada com sucesso!');
        document.getElementById('newsForm').reset();
        renderNews(allNews, true);
    }
    document.getElementById('btnCadastrar').addEventListener('click', submitForm);
    renderNews(allNews);
});
