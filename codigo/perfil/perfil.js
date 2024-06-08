document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  const userGreeting = document.getElementById("userGreeting");
  const logoutButton = document.getElementById("logoutButton");

  if (!user) {
    // Exibe uma mensagem de erro se o usuário não estiver logado
    displayMessage("Você precisa estar logado para editar seu perfil.", true);
    // Desabilita o formulário para evitar edição
    document.getElementById("form-perfil").style.display = "none";
    // Exibe os botões de login e cadastro
    userGreeting.innerHTML = `
        <div class="retangulo-cadastro">
          <a href="../login/login.html">Login</a>
        </div>
        <div class="retangulo-cadastro">
          <a href="../cadastro/cadastro.html">Cadastre-se</a>
        </div>
      `;
  } else {
    // Preenche os campos do formulário com os dados do usuário logado
    document.getElementById("inputNome").value = user.nome;
    document.getElementById("loginEmail").value = user.email;
    document.getElementById("loginSenha").value = ""; // Não preencher a senha por segurança

    // Exibe a saudação personalizada
    userGreeting.innerHTML = `
        <div class="retangulo-cadastro retangulo-cadastro-off">
          <span style="color: var(--gelo);">Olá, ${user.nome}</span>
        </div>
      `;

    // Listener para o botão de logout
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("usuarioLogado");
      location.href = "../login/login.html";
    });

    document.getElementById("btnUpdate").addEventListener("click", (event) => {
      event.preventDefault();
      verificarSenhaAtualEAtualizar(user);
    });
  }
});

function verificarSenhaAtualEAtualizar(user) {
  const nome = document.getElementById("inputNome").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const novaSenha = document.getElementById("loginSenha").value.trim();
  const senha = document.getElementById("currentSenha").value.trim();

  if (!nome || !email || !novaSenha || !senha) {
    displayMessage("Por favor, preencha todos os campos.", true);
    return;
  }

  if (senha !== user.senha) {
    displayMessage("Senha atual incorreta. Tente novamente.", true);
    return;
  }

  const usuarioAtualizado = {
    nome: nome,
    email: email,
    senha: novaSenha,
  };

  fetch(`${apiUrl}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuarioAtualizado),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao atualizar usuário no servidor");
      }
      return response.json();
    })
    .then((data) => {
      displayMessage("Dados atualizados com sucesso!", false);
      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({ ...user, ...usuarioAtualizado })
      );
      // Recarregar a página após um pequeno atraso para exibir a mensagem de sucesso
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
    .catch((error) => {
      console.error("Erro ao atualizar usuário:", error);
      displayMessage("Erro ao atualizar usuário.", true);
    });
}

function displayMessage(mensagem, isError = true) {
  const msg = document.getElementById("msg");
  msg.innerHTML =
    '<div class="' +
    (isError ? "alert-error" : "alert-success") +
    '">' +
    mensagem +
    "</div>";
}
