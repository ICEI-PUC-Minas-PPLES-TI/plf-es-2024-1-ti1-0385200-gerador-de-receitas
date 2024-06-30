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

function createUser(usuario, callback) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => response.json())
    .then((data) => {
      callback({ success: true, message: "Usuário cadastrado com sucesso!" });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar usuário via API JSONServer:", error);
      callback({ success: false, message: "Erro ao cadastrar usuário" });
    });
}

function readUsers(processaDados) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      processaDados(data);
    })
    .catch((error) => {
      console.error("Erro ao ler usuários via API JSONServer:", error);
      displayMessage("Erro ao ler usuários");
    });
}

function updateUser(id, usuario, callback) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => response.json())
    .then((data) => {
      callback({ success: true, message: "Usuário atualizado com sucesso!" });
    })
    .catch((error) => {
      console.error("Erro ao atualizar usuário via API JSONServer:", error);
      callback({ success: false, message: "Erro ao atualizar usuário" });
    });
}

function deleteUser(id, callback) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      callback({ success: true, message: "Usuário removido com sucesso!" });
    })
    .catch((error) => {
      console.error("Erro ao remover usuário via API JSONServer:", error);
      callback({ success: false, message: "Erro ao remover usuário" });
    });
}

function emailJaCadastrado(email, callback) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((usuarios) => {
      const usuarioExistente = usuarios.find(
        (usuario) => usuario.email === email
      );
      callback(usuarioExistente !== undefined);
    })
    .catch((error) => {
      console.error("Erro ao verificar e-mail via API JSONServer:", error);
      callback(false);
    });
}

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
      };

      // Envia os dados para o servidor
      createUser(usuario, function (response) {
        if (response.success) {
          displayMessage("Usuário cadastrado com sucesso!", false);
          document.getElementById("form-cadastro").reset();
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

document
  .getElementById("btnCadastrar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    cadastrarUsuario();
  });

const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);