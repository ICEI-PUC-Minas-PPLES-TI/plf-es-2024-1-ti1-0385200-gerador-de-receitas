function carregarDados() {
    fetch('https://aa0fd77b-bfc6-4e88-a582-a1dee8c04021-00-24ttvyq7gkjor.spock.replit.dev/receitas_recomendadas')
        .then(response => response.json())
        .then(data => exibirDetalhes(data))
        .catch(error => console.error('Erro ao carregar os dados:', error));
}
function exibirDetalhes(data) {
    const primeiraReceita = data.receitas_recomendadas[0];
    document.getElementById("imagem").src = primeiraReceita.imagem;
    document.getElementById("nome").textContent = primeiraReceita.nome;
    document.getElementById("descricao").textContent = primeiraReceita.descricao;
}
document.addEventListener('DOMContentLoaded', carregarDados);