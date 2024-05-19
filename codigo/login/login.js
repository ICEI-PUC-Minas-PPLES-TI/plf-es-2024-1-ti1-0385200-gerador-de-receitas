// URL da API JSONServer - Substitua pela URL correta da sua API
const apiUrl =
  "https://32dd9aa6-c33f-4c38-b8bc-feeaa6f8e2e1-00-a8zd99e1pw34.kirk.replit.dev/usuarios";

function toggleMenu() {
  const menu = document.getElementById("nav");
  menu.classList.toggle("active");
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
  let email = document.getElementById("loginEmail").value.trim();
  let senha = document.getElementById("loginSenha").value.trim();

  if (!email || !senha) {
    displayMessage("Por favor, preencha todos os campos.", true);
    return;
  }

  loginUsuario(email, senha, (sucesso, usuario) => {
    if (sucesso) {
      displayMessage("Login bem-sucedido!", false);
      // Armazenar estado de login no localStorage
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      atualizarHeader();
      // Limpar os campos de email e senha
      document.getElementById("loginEmail").value = "";
      document.getElementById("loginSenha").value = "";
    } else {
      displayMessage("E-mail ou senha incorretos. Tente novamente.", true);
      // Limpar os campos de email e senha
      document.getElementById("loginEmail").value = "";
      document.getElementById("loginSenha").value = "";
    }
  });
}

function handleLogoff() {
  // Remover estado de login do localStorage
  localStorage.removeItem("usuarioLogado");
  atualizarHeader();
  displayMessage("Você saiu da sua conta.", false);
}

function atualizarHeader() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const btnLoginHeader = document.getElementById("btnLoginHeader");
  const userHeader = document.getElementById("userHeader");

  if (usuarioLogado) {
    btnLoginHeader.textContent = "Logoff";
    btnLoginHeader.addEventListener("click", handleLogoff);
    userHeader.textContent =
      usuarioLogado.nome.length > 15
        ? usuarioLogado.nome.substring(0, 15) + "..."
        : usuarioLogado.nome;
    userHeader.href = "#";
  } else {
    btnLoginHeader.textContent = "Login";
    btnLoginHeader.removeEventListener("click", handleLogoff);
    userHeader.textContent = "Cadastre-se";
    userHeader.href = "../cadastro/cadastro.html";
  }
}

document.getElementById("btnLogin").addEventListener("click", function (event) {
  event.preventDefault();
  handleLogin();
});

// Atualizar o header ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarHeader);

const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);
