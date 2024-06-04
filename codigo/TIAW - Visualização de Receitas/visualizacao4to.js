//script da página de visualização da receita 4 do card 4 - Torradas com Ovo

//dados do JSON

function carregarDados() {
    fetch('https://334971b8-7aa5-4ea6-98b5-1c1553c7282b-00-2hk8otob7jgkw.spock.replit.dev/detalhereceitasto')
        .then(response => response.json())
        .then(data => exibirDados(data))
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

//dados na página

function exibirDados(detalhereceitastoData) {
    document.getElementById("imagemTorradasOvo").src = detalhereceitastoData[0].foto;
    document.getElementById("nomeTorradasOvo").textContent = detalhereceitastoData[0].nome;
    document.getElementById("informacoesTorradasOvo").textContent = detalhereceitastoData[0].informacoes;
    document.getElementById("ingredientesTorradasOvo").textContent = detalhereceitastoData[0].ingredientes.join('\n');
    document.getElementById("preparoTorradasOvo").textContent = detalhereceitastoData[0].preparo.join('\n');
    document.getElementById("dicasTorradasOvo").textContent = detalhereceitastoData[0].dicas.join('\n');
    document.getElementById("tempopreparoTorradasOvo").textContent = detalhereceitastoData[0].tempopreparo;
    document.getElementById("porcoesTorradasOvo").textContent = detalhereceitastoData[0].porcoes;
    document.getElementById("valornutricionalTorradasOvo").textContent = detalhereceitastoData[0].valornutricional.join('\n');
    document.getElementById("dificuldadeTorradasOvo").textContent = detalhereceitastoData[0].dificuldade;
    document.getElementById("recadoTorradasOvo").textContent = detalhereceitastoData[0].recado;
}

document.addEventListener('DOMContentLoaded', carregarDados);