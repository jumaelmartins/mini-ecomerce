import { addItemToCart, cart } from "./cart";
import { showCounter, updateCounter } from "./counter";
import { toggleMenu } from "./menu";

document.addEventListener("click", (e) => {
  if (e.target.innerText === " Comprar") {
    const li = e.target.closest("li");
    const title = li.querySelector("h2");
    const id = parseInt(li.id);
    const thumbnail = li.querySelector("img");
    const price = li.querySelector(".price");
    const productExists = cart.filter((product) => product.id === id);

    if (productExists.length > 0) {
      console.log("item já está no carrinho");
      return;
    } else {
      console.log("item adicionado ao carrinho");
      addItemToCart(
        id,
        title.textContent,
        thumbnail.src,
        parseFloat(price.firstElementChild.textContent)
      );
    }
    showCounter();
    updateCounter();
  }

  if (e.target.classList.contains("menu")) {
    console.log(true)
    toggleMenu();
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// window.location.href = '/pages/product.html'
