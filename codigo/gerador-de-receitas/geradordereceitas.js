async function buscarReceita() {
    const carboidrato = document.getElementById('carboidrato').value.toLowerCase();
    const proteina = document.getElementById('proteina').value.toLowerCase();
    const vegetal = document.getElementById('vegetal').value.toLowerCase();
  
    const url = '../../db/db.json';
  
    try {
        const response = await fetch(url);
        const data = await response.json();
  
        // Verificar o tipo de dado retornado
        console.log('Tipo de dado retornado:', typeof data);
  
        // Verificar se a chave "receitas" existe no objeto retornado
        if (!data.receitas || !Array.isArray(data.receitas)) {
            throw new Error('O JSON retornado não contém a chave "receitas" ou "receitas" não é um array.');
        }
  
        // Acessar o array de receitas
        const receitas = data.receitas;
  
        console.log('Receitas:', receitas);
  
        // Encontrar a receita que corresponde aos ingredientes selecionados
        const receitaEncontrada = receitas.find(receita => {
            return receita.carboidrato.toLowerCase() === carboidrato &&
                   receita.proteina.toLowerCase() === proteina &&
                   receita.vegetal.toLowerCase() === vegetal;
        });
  
        console.log('Receita encontrada:', receitaEncontrada);
  
        if (receitaEncontrada) {
            localStorage.setItem('receita', JSON.stringify(receitaEncontrada));
  
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <h3>${receitaEncontrada.nome}</h3>
                <div>
                    <button onclick="irParaReceita()" class="btn-ver-receita">Ver Receita</button>
                </div>
            `;
        } else {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `<p>Nenhuma receita encontrada com os ingredientes selecionados.</p>`;
        }
    } catch (error) {
        console.error('Erro ao buscar receita:', error);
    }
  }
  
  function irParaReceita() {
    window.location.href = '../perfil/receita-view.html';
  }
  