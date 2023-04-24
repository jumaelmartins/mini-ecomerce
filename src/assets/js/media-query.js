// Define a consulta de mídia
const query = window.matchMedia("(min-width: 768px)");

// Função que será executada quando a consulta de mídia for correspondida
function handleMediaQuery(query) {
  const auth = document.querySelector(".auth");
  const chatIcon = document.querySelector(".icons__chat");
  const menuIcon = document.querySelector(".menu");
  const nav = document.querySelector(".header__nav__content");
  const heartIcon = document.querySelector(".icons__heart");

  if (query.matches) {
    // Código para o breakpoint acima de 768px

    heartIcon.classList.remove("hidden");
    nav.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    chatIcon.classList.remove("hidden");
    auth.classList.remove("hidden");
  } else {
    // Código para o breakpoint abaixo de 768px

    heartIcon.classList.add("hidden");
    nav.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    chatIcon.classList.add("hidden");
    auth.classList.add("hidden");
  }
}

// Executa a função uma vez no início
handleMediaQuery(query);

// Adiciona um listener para a consulta de mídia
query.addEventListener("change", handleMediaQuery);
