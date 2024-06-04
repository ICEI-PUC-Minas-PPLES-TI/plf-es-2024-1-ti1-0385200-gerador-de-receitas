//script do coração na página de visualização da receita - faz o "click" funcionar, etc

let isLiked = false;

function toggleHeart(button) {
    isLiked = !isLiked;
    const heartIcon = button.querySelector('i');
    heartIcon.classList.toggle('fas');
    heartIcon.style.color = isLiked ? 'var(--vermelho)' : 'var(--vermelho)';
}
