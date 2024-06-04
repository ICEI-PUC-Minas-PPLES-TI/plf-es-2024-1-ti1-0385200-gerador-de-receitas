//script da página de visualização da receita 1 do card 1 - Macarrão ao Pesto

//dados do JSON

function carregarDados() {
    fetch('https://334971b8-7aa5-4ea6-98b5-1c1553c7282b-00-2hk8otob7jgkw.spock.replit.dev/detalhereceitasmp')
        .then(response => response.json())
        .then(data => exibirDados(data))
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

//dados na página

function exibirDados(detalhereceitasmpData) {
    document.getElementById("imagemMacarrãoPesto").src = detalhereceitasmpData[0].foto;
    document.getElementById("nomeMacarrãoPesto").textContent = detalhereceitasmpData[0].nome;
    document.getElementById("informacoesMacarrãoPesto").textContent = detalhereceitasmpData[0].informacoes;
    document.getElementById("ingredientesMacarrãoPesto").textContent = detalhereceitasmpData[0].ingredientes.join('\n');
    document.getElementById("preparoMacarrãoPesto").textContent = detalhereceitasmpData[0].preparo.join('\n');
    document.getElementById("dicasMacarrãoPesto").textContent = detalhereceitasmpData[0].dicas.join('\n');
    document.getElementById("tempopreparoMacarrãoPesto").textContent = detalhereceitasmpData[0].tempopreparo;
    document.getElementById("porcoesMacarrãoPesto").textContent = detalhereceitasmpData[0].porcoes;
    document.getElementById("valornutricionalMacarrãoPesto").textContent = detalhereceitasmpData[0].valornutricional.join('\n');
    document.getElementById("dificuldadeMacarrãoPesto").textContent = detalhereceitasmpData[0].dificuldade;
    document.getElementById("recadoMacarrãoPesto").textContent = detalhereceitasmpData[0].recado;
}

document.addEventListener('DOMContentLoaded', carregarDados);


