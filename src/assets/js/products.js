import { productsJson } from "./data";
import { getLocalStorageItem } from "./localStorage";

export let products = productsJson;
let filteredItems = [];
let liked = [];

const loadItems = () => {
  const ul = document.querySelector(".products__list");

  if (ul) {
    ul.innerHTML = "";
    const newHtml = products.map(itemsToHtml);
    ul.innerHTML = newHtml;
  }
};

const itemsToHtml = (products) => {
  return `
    <li id="${products.id}" class="products__card">
        <div class="products__card__first-column">
        <div class="products__card__first-column__header">
            <p>${products.stars} stars <b>(${products.reviews.total})</b></p>
            <svg
            width="64"
            height="64"
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
                src="${products.thumbnail}"
                alt=""
            />
            </div>
            <div class="products__card__first-column__content">
            <h2>${products.title}</h2>
            <div>
                <p class="price">R$ <b>${products.price}</b></p>
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
