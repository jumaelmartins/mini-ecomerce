import { addItemToCart, cart } from "./cart";
import { showCounter, updateCounter } from "./counter";
import { toggleMenu } from "./menu";
import { filterProducts, loadItems, produtsDetailToHtml } from "./products";
let id = [];

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
    console.log(true);
    toggleMenu();
  }

  if (
    e.target.closest("li") &&
    e.target.innerText !== " Comprar" &&
    e.target.closest("li").classList.contains("products__card")
  ) {
    const title = document.createElement("h2");
    
    id = parseInt(e.target.closest("li").id);
    const productsHtml = document.querySelector(".products");
    const filteredProduct = filterProducts(id);
    const newHtml = filteredProduct.map(produtsDetailToHtml);
    title.innerText = filteredProduct[0].title;
    productsHtml.innerHTML = "";
    productsHtml.appendChild(title);
    productsHtml.innerHTML += newHtml;
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
