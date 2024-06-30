document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  const userGreeting = document.getElementById("userGreeting");
  const logoutButton = document.createElement("a");
  logoutButton.href = "#";
  logoutButton.innerText = "Logout";
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
  });

  if (user) {
    userGreeting.innerHTML = `<span>Olá, ${user.nome}</span>`;
    userGreeting.appendChild(logoutButton);
  } else {
    userGreeting.innerHTML = `
            <div class="retangulo-cadastro retangulo-cadastro-off">
                <a href="PAGES/sessao/login.html">Login</a>
            </div>
            <div class="retangulo-cadastro retangulo-cadastro-off">
                <a href="PAGES/sessao/cadastro.html">Cadastre-se</a>
            </div>
        `;
  }
});
