async function fetchReceitas() {
  const response = await fetch("http://localhost:3000/receitas");
  if (!response.ok) {
    throw new Error("Erro ao buscar receitas");
  }
  return response.json();
}

async function saveHistorico(usuarioId, receitaId) {
  const response = await fetch(`http://localhost:3000/usuarios/${usuarioId}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar usuário");
  }
  const usuario = await response.json();
  const historicoAtualizado = [...usuario.historico, receitaId];

  const updateResponse = await fetch(
    `http://localhost:3000/usuarios/${usuarioId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ historico: historicoAtualizado }),
    }
  );
  if (!updateResponse.ok) {
    throw new Error("Erro ao salvar histórico");
  }
}
