// Função para exibir mensagens na tela
function displayMessage(mensagem, isError = true) {
  const msg = document.getElementById("msg");
  msg.innerHTML =
    '<div class="' +
    (isError ? "alert-error" : "alert-success") +
    '">' +
    mensagem +
    "</div>";
}

// Função para verificar se o e-mail já está cadastrado
function emailJaCadastrado(email, callback) {
  fetch("http://localhost:3000/usuarios?email=" + encodeURIComponent(email))
    .then((response) => response.json())
    .then((data) => {
      callback(data.length > 0);
    })
    .catch((error) => {
      console.error("Erro ao verificar e-mail:", error);
      callback(false);
    });
}

// Função para cadastrar um novo usuário
function createUser(usuario, callback) {
  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => response.json())
    .then((data) => {
      callback({ success: true, data: data });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar usuário:", error);
      callback({ success: false, message: error.message });
    });
}

// Função principal para o cadastro do usuário
function cadastrarUsuario() {
  // Obtem os valores dos campos do formulário
  let nome = document.getElementById("inputNome").value.trim();
  let email = document.getElementById("inputEmail").value.trim();
  let senha = document.getElementById("inputSenha").value.trim();

  // Verifica se todos os campos estão preenchidos
  if (!nome || !email || !senha) {
    displayMessage("Por favor, preencha todos os campos.", true);
    return;
  }

  // Verifica se o e-mail já está cadastrado
  emailJaCadastrado(email, (jaCadastrado) => {
    if (jaCadastrado) {
      displayMessage(
        "E-mail já cadastrado. Por favor, use outro e-mail.",
        true
      );
    } else {
      // Cria um objeto com os dados do usuário
      let usuario = {
        nome: nome,
        email: email,
        senha: senha,
        historico: [],
        favoritos: [],
      };

      // Envia os dados para o servidor
      createUser(usuario, function (response) {
        if (response.success) {
          // Salva o estado de logado no localStorage
          localStorage.setItem(
            "usuarioLogado",
            JSON.stringify({ nome: usuario.nome, email: usuario.email })
          );
          displayMessage("Usuário cadastrado com sucesso!", false);
          document.getElementById("form-cadastro").reset();
          atualizarInterfaceUsuario();
          // Redireciona para a página de perfil
          window.location.href = "../main/index.html";
        } else {
          displayMessage(
            "Erro ao cadastrar usuário: " + response.message,
            true
          );
        }
      });
    }
  });
}

// Função para atualizar a interface do usuário logado
function atualizarInterfaceUsuario() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const usuarioNome = document.getElementById("usuarioNome");
  const logoff = document.getElementById("logoff");

  if (usuarioLogado) {
    usuarioNome.innerText = usuarioLogado.nome;
    usuarioNome.href = "javascript:void(0);";
    logoff.style.display = "block";
  } else {
    usuarioNome.innerText = "Login";
    usuarioNome.href = "../login/login.html";
    logoff.style.display = "none";
  }
}

// Função para deslogar o usuário
function logoffUsuario() {
  localStorage.removeItem("usuarioLogado");
  atualizarInterfaceUsuario();
}

// Adiciona o evento de clique ao botão de cadastro
document
  .getElementById("btnCadastrar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    cadastrarUsuario();
  });

// Atualiza a interface do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  atualizarInterfaceUsuario();
});
