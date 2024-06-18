//script que faz o botão de "carregar mais" funcionar

let loadMoreBtn = document.querySelector('.botao-carregar');

function carregarMaisCards() {
    let boxes = document.querySelectorAll('.cards-menores .card-menor:not(:nth-child(-n+3)):not(.exibido)');

    for (let i = 0; i < 3; i++) {
        if (boxes[i]) {
            boxes[i].classList.add('exibido');
        }}

    if (document.querySelectorAll('.cards-menores .card-menor:not(:nth-child(-n+3)):not(.exibido)').length === 0) {
        loadMoreBtn.style.display = 'none';
    }}

loadMoreBtn.addEventListener('click', carregarMaisCards);
