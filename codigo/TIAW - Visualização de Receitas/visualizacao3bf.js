//script da página de visualização da receita 3 do card 3 - Bolo de Framboesa

//dados do JSON

function carregarDados() {
    fetch('https://334971b8-7aa5-4ea6-98b5-1c1553c7282b-00-2hk8otob7jgkw.spock.replit.dev/detalhereceitasbf')
        .then(response => response.json())
        .then(data => exibirDados(data))
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

//dados na página

function exibirDados(detalhereceitasbfData) {
    document.getElementById("imagemBoloFramboesa").src = detalhereceitasbfData[0].foto;
    document.getElementById("nomeBoloFramboesa").textContent = detalhereceitasbfData[0].nome;
    document.getElementById("informacoesBoloFramboesa").textContent = detalhereceitasbfData[0].informacoes;
    document.getElementById("ingredientesBoloFramboesa").textContent = detalhereceitasbfData[0].ingredientes.join('\n');
    document.getElementById("preparoBoloFramboesa").textContent = detalhereceitasbfData[0].preparo.join('\n');
    document.getElementById("dicasBoloFramboesa").textContent = detalhereceitasbfData[0].dicas.join('\n');
    document.getElementById("tempopreparoBoloFramboesa").textContent = detalhereceitasbfData[0].tempopreparo;
    document.getElementById("porcoesBoloFramboesa").textContent = detalhereceitasbfData[0].porcoes;
    document.getElementById("valornutricionalBoloFramboesa").textContent = detalhereceitasbfData[0].valornutricional.join('\n');
    document.getElementById("dificuldadeBoloFramboesa").textContent = detalhereceitasbfData[0].dificuldade;
    document.getElementById("recadoBoloFramboesa").textContent = detalhereceitasbfData[0].recado;
}

document.addEventListener('DOMContentLoaded', carregarDados);