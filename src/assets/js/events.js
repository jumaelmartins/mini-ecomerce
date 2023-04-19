import { addItemToCart, cart, productCartHtml } from "./cart";
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

  if (e.target.classList.contains("buy")) {
    const modal = document.querySelector(".modal__container")
    modal.classList.remove("hidden")
    console.log()
  }

  if (e.target.classList.contains("modal__button__cart")) {
    const modal = document.querySelector(".modal__container")
    modal.classList.add("hidden")
  }

  if (e.target.classList.contains("modal__button__shopping")) {
    const modal = document.querySelector(".modal__container")
    modal.classList.add("hidden")
  }

  if (e.target.classList.contains("icons__cart")) {
    const body = document.querySelector("body")
    body.innerHTML = ""
    body.innerHTML = productCartHtml();
    console.log("ok")
  }



});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
