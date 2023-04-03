import { productsJson } from "./data";
import { getLocalStorageItem } from "./localStorage";

export let products = productsJson;
let filteredItems = [];
let cart = [];
let liked = [];

const addItemToCart = (newItem) => {
  cart.push(newItem);
};

const removeItemToCart = (item) => {
  const itemToRemove = cart.filter((cartItem) => item.id === cartItem.id);
  const indexOfItemToRemove = cart.indexOf(itemToRemove);
  return indexOfItemToRemove !== -1 ? cart.splice(indexOfItemToRemove, 1) : "";
};

const loadItems = () => {
  const ul = document.querySelector(".products__list");
  ul.innerHTML = "";
  const newHtml = products.map(itemsToHtml);
  ul.innerHTML = newHtml;
};

const itemsToHtml = (products) => {
  return `
    <li class="products__card">
        <div class="products__card__first-column">
        <div class="products__card__first-column__header">
            <p>5 stars <b>(5)</b></p>
            <svg
            width="64"
            height="64"
            class="trash"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            ></path>
            </svg>
        </div>
        <div class="products__card__first-column__container__content">
            <div class="products__card__first-column__thumbnail"> 
            <img
                width="128"
                src="https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_gg.jpg"
                alt=""
            />
            </div>
            <div class="products__card__first-column__content">
            <h2>Placa de Video</h2>
            <div>
                <p>R$ 5000</p>
                <p>A vista no Boleto</p>
            </div>
            </div>
        </div>
        </div>
        <div class="products__card__second-column">
        <button>
            <img src="" alt="" />
            Comprar
        </button>
        </div>
  </li>
    `;
};

loadItems();
