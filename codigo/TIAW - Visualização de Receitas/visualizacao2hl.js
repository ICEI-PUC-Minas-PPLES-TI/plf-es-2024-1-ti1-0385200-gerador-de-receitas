//script da página de visualização da receita 2 do card 2 - Hambúrguer de Carne Bovina com Legumes

//dados do JSON

function carregarDados() {
    fetch('https://334971b8-7aa5-4ea6-98b5-1c1553c7282b-00-2hk8otob7jgkw.spock.replit.dev/detalhereceitashl')
        .then(response => response.json())
        .then(data => exibirDados(data))
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

//dados na página

function exibirDados(detalhereceitashlData) {
    document.getElementById("imagemHambúrguerLegumes").src = detalhereceitashlData[0].foto;
    document.getElementById("nomeHambúrguerLegumes").textContent = detalhereceitashlData[0].nome;
    document.getElementById("informacoesHambúrguerLegumes").textContent = detalhereceitashlData[0].informacoes;
    document.getElementById("ingredientesHambúrguerLegumes").textContent = detalhereceitashlData[0].ingredientes.join('\n');
    document.getElementById("preparoHambúrguerLegumes").textContent = detalhereceitashlData[0].preparo.join('\n');
    document.getElementById("dicasHambúrguerLegumes").textContent = detalhereceitashlData[0].dicas.join('\n');
    document.getElementById("tempopreparoHambúrguerLegumes").textContent = detalhereceitashlData[0].tempopreparo;
    document.getElementById("porcoesHambúrguerLegumes").textContent = detalhereceitashlData[0].porcoes;
    document.getElementById("valornutricionalHambúrguerLegumes").textContent = detalhereceitashlData[0].valornutricional.join('\n');
    document.getElementById("dificuldadeHambúrguerLegumes").textContent = detalhereceitashlData[0].dificuldade;
    document.getElementById("recadoHambúrguerLegumes").textContent = detalhereceitashlData[0].recado;
}

document.addEventListener('DOMContentLoaded', carregarDados);