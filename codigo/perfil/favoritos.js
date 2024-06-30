document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  const userGreeting = document.getElementById("userGreeting");
  const logoutButton = document.getElementById("logoutButton");

  if (!user) {
    displayMessage("Você precisa estar logado para ver seus favoritos.", true);
    userGreeting.innerHTML = `
        <div class="retangulo-cadastro">
          <a href="../login/login.html">Login</a>
        </div>
        <div class="retangulo-cadastro">
          <a href="../cadastro/cadastro.html">Cadastre-se</a>
        </div>
      `;
    return;
  } else {
    userGreeting.innerHTML = `
        <div class="retangulo-cadastro retangulo-cadastro-off">
          <span style="color: var(--gelo); cursor: pointer;" id="nomeUsuario">Olá, ${user.nome}</span>
        </div>
      `;

    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("usuarioLogado");
      location.href = "../login/login.html";
    });

    document.getElementById("nomeUsuario").addEventListener("click", () => {
      window.location.href = "perfil.html";
    });

    carregarFavoritos(user.id);
  }
});

function displayMessage(mensagem, isError = true) {
  const msg = document.getElementById("msg");
  msg.innerHTML =
    '<div class="' +
    (isError ? "alert-error" : "alert-success") +
    '">' +
    mensagem +
    "</div>";
}

function carregarFavoritos(userId) {
  fetch(`${apiUrl}/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const favoritos = user.favoritos || [];
      const container = document.getElementById("cardsContainer");

      if (favoritos.length === 0) {
        displayMessage("Você ainda não tem nenhuma receita favorita.", false);
        return;
      }

      favoritos.forEach((receitaId) => {
        fetch(`http://localhost:3000/receitas/${receitaId}`)
          .then((response) => response.json())
          .then((receita) => {
            const card = document.createElement("div");
            card.classList.add("card-perfil");

            const link = document.createElement("a");
            link.href = `receita-view.html?id=${receita.id}`;
            link.style.textDecoration = "none";
            link.style.color = "inherit";

            const contextoLike = document.createElement("div");
            contextoLike.classList.add("contexto-like");

            const titulo = document.createElement("h3");
            titulo.textContent = receita.nome;

            const botaoCoracao = document.createElement("button");
            botaoCoracao.classList.add("botao-coracao");
            botaoCoracao.innerHTML = `<i class="fas fa-heart"></i>`;
            botaoCoracao.addEventListener("click", (event) => {
              event.stopPropagation();
              event.preventDefault();
              toggleHeart(botaoCoracao, receita.id);
            });

            contextoLike.appendChild(titulo);
            contextoLike.appendChild(botaoCoracao);

            const descricao = document.createElement("p");
            descricao.textContent =
              receita["modo-de-preparo"].split(" ").slice(0, 20).join(" ") +
              "...";

            link.appendChild(contextoLike);
            link.appendChild(descricao);
            card.appendChild(link);
            container.appendChild(card);
          })
          .catch((error) => {
            console.error("Erro ao carregar receita:", error);
            displayMessage("Erro ao carregar receita.", true);
          });
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar favoritos:", error);
      displayMessage("Erro ao carregar favoritos.", true);
    });
}

function toggleHeart(button, receitaId) {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!user) {
    displayMessage("Você precisa estar logado para curtir receitas.", true);
    return;
  }

  const heartIcon = button.querySelector("i");
  const isLiked = heartIcon.classList.toggle("fas");

  heartIcon.style.color = isLiked ? "var(--vermelho)" : "var(--vermelho)";

  if (isLiked) {
    user.favoritos.push(receitaId);
  } else {
    user.favoritos = user.favoritos.filter((id) => id !== receitaId);
  }

  const userDataToUpdate = {
    favoritos: user.favoritos,
  };

  fetch(`${apiUrl}/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDataToUpdate),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({ ...user, ...userDataToUpdate })
      );
    })
    .catch((error) => {
      console.error("Erro ao atualizar favoritos:", error);
      displayMessage("Erro ao atualizar favoritos.", true);
    });
}
