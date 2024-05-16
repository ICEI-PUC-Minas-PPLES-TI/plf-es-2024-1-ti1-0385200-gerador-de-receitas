// URL da API JSONServer - Substitua pela URL correta da sua API
const apiUrl =
  "https://32dd9aa6-c33f-4c38-b8bc-feeaa6f8e2e1-00-a8zd99e1pw34.kirk.replit.dev/usuarios";

function displayMessage(mensagem) {
  const msg = document.getElementById("msg");
  msg.innerHTML = '<div class="alert alert-warning">' + mensagem + "</div>";
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
