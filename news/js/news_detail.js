document.addEventListener('DOMContentLoaded', function () {
    const newsItem = JSON.parse(localStorage.getItem('currentNews'));

    if (newsItem) {
        document.getElementById('newsTitle').textContent = newsItem.title;
        document.getElementById('newsSummary').textContent = newsItem.summary;
        

        const newsImage = document.getElementById('newsImage');
        newsImage.innerHTML = `<img src="${newsItem.image}" alt="${newsItem.title}">`;
    } else {
        document.querySelector('.news-detail-container').innerHTML = '<p>Notícia não encontrada.</p>';
    }
});
