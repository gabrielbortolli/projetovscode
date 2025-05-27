let users = {};
let currentUser = null;
let isLoginMode = true;

function showAuthModal() { document.getElementById("auth-modal").classList.remove("hidden");
  updateAuthModal();
}

function updateAuthModal() {
  document.getElementById("auth-title").innerText = isLoginMode ? "Entrar" : "Criar Conta";
  document.getElementById("toggle-auth-mode").innerText = isLoginMode ? "Criar uma conta" : "Já tem conta? Entrar";
}

document.getElementById("toggle-auth-mode").onclick = () => {
  isLoginMode = !isLoginMode;
  updateAuthModal();
};

function submitAuth() {
  const username = document.getElementById("auth-username").value;
  const password = document.getElementById("auth-password").value;

  if (isLoginMode) {
    if (users[username] && users[username] === password) {
      currentUser = username;
      alert("Login realizado!");
      updateUserUI();
    } else {
      alert("Usuário ou senha incorretos.");
    }
  } else {
    if (users[username]) {
      alert("Usuário já existe.");
    } else {
      users[username] = password;
      currentUser = username;
      alert("Conta criada!");
      updateUserUI();
    }
  }

  document.getElementById("auth-modal").classList.add("hidden");
}

function updateUserUI() {
  const userInfo = document.getElementById("user-info");
  const loginBtn = document.getElementById("login-btn");

  if (currentUser) {
    userInfo.innerHTML = `Olá, ${currentUser} <button onclick="logout()" class="text-red-500 underline text-sm ml-2">Sair</button>`;
    userInfo.classList.remove("hidden");
    loginBtn.classList.add("hidden");
  } else {
    userInfo.classList.add("hidden");
    loginBtn.classList.remove("hidden");
  }
}

function logout() {
  currentUser = null;
  updateUserUI();
}