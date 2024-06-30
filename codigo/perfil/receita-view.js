document.addEventListener('DOMContentLoaded', () => {
    const receitaSelecionada = JSON.parse(localStorage.getItem('receita'));
  
    if (receitaSelecionada) {
        document.getElementById('receitaTitulo').innerText = receitaSelecionada.nome;
        document.getElementById('modoPreparo').innerHTML = `
            <p><strong>Modo de Preparo:</strong></p>
            <p>${receitaSelecionada["modo-de-preparo"]}</p>
        `;
    } else {
        document.getElementById('msg').innerHTML = '<p>Nenhuma receita encontrada.</p>';
    }
  });
  