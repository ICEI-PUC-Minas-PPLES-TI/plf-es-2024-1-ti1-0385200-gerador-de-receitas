document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  const userGreeting = document.getElementById("userGreeting");
  const logoutButton = document.getElementById("logoutButton");

  if (!user) {
    // Exibe uma mensagem de erro se o usuário não estiver logado
    displayMessage("Você precisa estar logado para editar seu perfil.", true);
    // Exibe os botões de login e cadastro
    if (userGreeting) {
      userGreeting.innerHTML = `
          <div class="retangulo-cadastro">
            <a href="../login/login.html">Login</a>
          </div>
          <div class="retangulo-cadastro">
            <a href="../cadastro/cadastro.html">Cadastre-se</a>
          </div>
        `;
    }
  } else {
    // Exibe a saudação personalizada
    if (userGreeting) {
      userGreeting.innerHTML = `
          <div class="retangulo-cadastro retangulo-cadastro-off">
            <span style="color: var(--gelo); cursor: pointer;" id="nomeUsuario">Olá, ${user.nome}</span>
          </div>
        `;
    }

    // Listener para o botão de logout
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        location.href = "../main/index.html";
      });
    }

    document.getElementById("btnUpdate")?.addEventListener("click", (event) => {
      event.preventDefault();
      verificarSenhaAtualEAtualizar(user);
    });

    document.getElementById("nomeUsuario")?.addEventListener("click", () => {
      window.location.href = "../main/index.html";
    });
  }
});

function verificarSenhaAtualEAtualizar(user) {
  const nome = document.getElementById("inputNome").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const novaSenha = document.getElementById("loginSenha").value.trim();
  const senhaAtual = document.getElementById("currentSenha").value.trim();

  if (!nome || !email || !novaSenha || !senhaAtual) {
    displayMessage("Por favor, preencha todos os campos.", true);
    return;
  }

  // Verifica a senha atual do usuário no servidor
  fetch(`${apiUrl}?id=${user.id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao obter dados do usuário.");
      }
      return response.json();
    })
    .then((users) => {
      if (users.length === 0) {
        throw new Error("Usuário não encontrado.");
      }

      const data = users[0];
      console.log("Dados do usuário obtidos:", data);

      if (senhaAtual !== data.senha) {
        throw new Error("Senha atual incorreta. Tente novamente.");
      }

      const usuarioAtualizado = {
        nome: nome,
        email: email,
        senha: novaSenha,
        historico: data.historico,
        favoritos: data.favoritos,
        id: user.id,
      };

      return fetch(`${apiUrl}/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioAtualizado),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao atualizar usuário no servidor.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Usuário atualizado com sucesso:", data);
      displayMessage("Dados atualizados com sucesso!", false);
      localStorage.setItem("usuarioLogado", JSON.stringify(data));
      // Recarregar a página após um pequeno atraso para exibir a mensagem de sucesso
      setTimeout(() => {
        location.reload();
      }, 7000); // 7 segundos
    })
    .catch((error) => {
      console.error("Erro ao atualizar usuário:", error);
      displayMessage(error.message, true);
    });
}

function displayMessage(mensagem, isError = true) {
  const msg = document.getElementById("msg");
  if (msg) {
    msg.innerHTML =
      '<div class="' +
      (isError ? "alert-error" : "alert-success") +
      '">' +
      mensagem +
      "</div>";
    // Adiciona uma classe para exibir a mensagem
    msg.classList.add("show");
    // Remove a classe após 7 segundos para ocultar a mensagem
    setTimeout(() => {
      msg.classList.remove("show");
    }, 7000); // 7 segundos
  }
}
