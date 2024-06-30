document.addEventListener('DOMContentLoaded', function () {
    // Recuperar a notícia selecionada do localStorage
    const newsItem = JSON.parse(localStorage.getItem('currentNews'));

    if (newsItem) {
        // Selecionar os elementos na página HTML onde queremos exibir os detalhes da notícia
        const newsImageElement = document.getElementById('newsImage');
        const newsTitleElement = document.getElementById('newsTitle');
        const newsSummaryElement = document.getElementById('newsSummary');

        // Atualizar os elementos com os dados da notícia recuperada do localStorage
        newsTitleElement.textContent = newsItem.title;
        newsSummaryElement.textContent = newsItem.summary;
        newsImageElement.innerHTML = `<img src="${newsItem.image}" alt="${newsItem.title}">`;
    } else {
        console.error('Notícia não encontrada no localStorage.');
    }
});