// URL da API JSONServer - Substitua pela URL correta da sua API com '/usuarios' no final
const apiUrl = "http://localhost:3000/usuarios";

function toggleMenu() {
  const menu = document.getElementById("nav");
  if (menu) {
    menu.classList.toggle("active");
  }
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
  }
}

function loginUsuario(email, senha, callback) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((usuarios) => {
      const usuario = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );
      callback(usuario !== undefined, usuario);
    })
    .catch((error) => {
      console.error("Erro ao verificar login via API JSONServer:", error);
      callback(false);
    });
}

function handleLogin() {
  const emailInput = document.getElementById("loginEmail");
  const senhaInput = document.getElementById("loginSenha");

  if (!emailInput || !senhaInput) {
    displayMessage("Erro ao obter os elementos de entrada.", true);
    return;
  }

  let email = emailInput.value.trim();
  let senha = senhaInput.value.trim();

  if (!email || !senha) {
    displayMessage("Por favor, preencha todos os campos.", true);
    return;
  }

  loginUsuario(email, senha, (sucesso, usuario) => {
    if (sucesso) {
      displayMessage("Login bem-sucedido!", false);
      // Armazenar estado de login no localStorage
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      verificarEstadoLogin();
      // Limpar os campos de email e senha
      emailInput.value = "";
      senhaInput.value = "";
      window.location.href = "../main/index.html";
    } else {
      displayMessage("E-mail ou senha incorretos. Tente novamente.", true);
      // Limpar os campos de email e senha
      emailInput.value = "";
      senhaInput.value = "";
    }
  });
}

function handleLogoff() {
  // Remover estado de login do localStorage
  localStorage.removeItem("usuarioLogado");
  verificarEstadoLogin();
  displayMessage("Você saiu da sua conta.", false);
}

function verificarEstadoLogin() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const btnLoginHeader = document.getElementById("btnLoginHeader");
  const userHeader = document.getElementById("userHeader");

  if (!btnLoginHeader || !userHeader) {
    console.error("Elementos do cabeçalho não encontrados.");
    return;
  }

  if (usuarioLogado) {
    btnLoginHeader.textContent = "Logoff";
    btnLoginHeader.addEventListener("click", handleLogoff);
    userHeader.textContent =
      usuarioLogado.nome.length > 15
        ? usuarioLogado.nome.substring(0, 15) + "..."
        : usuarioLogado.nome;
    userHeader.href = "#";
    userHeader.addEventListener("click", () => {
      window.location.href = "../perfil/perfil.html"; // Atualize para o caminho correto do perfil
    });
  } else {
    btnLoginHeader.textContent = "Login";
    btnLoginHeader.removeEventListener("click", handleLogoff);
    userHeader.textContent = "Cadastre-se";
    userHeader.href = "../cadastro/cadastro.html";
  }
}

document
  .getElementById("btnLogin")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    handleLogin();
  });

// Atualizar o header ao carregar a página
document.addEventListener("DOMContentLoaded", verificarEstadoLogin);

const btnMobile = document.getElementById("btn-mobile");
btnMobile?.addEventListener("click", toggleMenu);
