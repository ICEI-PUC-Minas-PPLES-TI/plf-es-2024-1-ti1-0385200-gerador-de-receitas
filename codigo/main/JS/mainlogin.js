document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));
  const userGreeting = document.getElementById("userGreeting");

  if (user) {
    userGreeting.innerHTML = `
        <div class="retangulo-cadastro retangulo-cadastro-off">
          <span style="color: var(--gelo); cursor: pointer;" id="nomeUsuario">Olá, ${user.nome}</span>
        </div>
        <div class="retangulo-cadastro retangulo-cadastro-off">
          <a href="#" id="logoutButton">Logout</a>
        </div>
      `;

    document.getElementById("nomeUsuario").addEventListener("click", () => {
      window.location.href = "../perfil/perfil.html";
    });

    document.getElementById("logoutButton").addEventListener("click", () => {
      localStorage.removeItem("usuarioLogado");
      location.href = "../login/login.html";
    });
  } else {
    userGreeting.innerHTML = `
        <div class="retangulo-cadastro retangulo-cadastro-off">
          <a href="../login/login.html">Login</a>
        </div>
        <div class="retangulo-cadastro retangulo-cadastro-off">
          <a href="../cadastro/cadastro.html">Cadastre-se</a>
        </div>
      `;
  }
});
