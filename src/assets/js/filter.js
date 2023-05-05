import { update } from "./pagination";
import { itemsToHtml, products } from "./products";

const input = document.querySelector(".search-form__input");

input.addEventListener("keyup", (e) => filterItems());

export const filterItems = () => {
    let searchValue = input.value.trim().toLowerCase();
    const filtered = products.filter(filteredItem => filteredItem.title.trim().toLowerCase().includes(searchValue))
    const ul = document.querySelector(".products__list");

    if (ul) {
        ul.innerHTML = "";
        const newHtml = filtered.map(itemsToHtml).join("");
        ul.innerHTML = newHtml;
      }
    return filtered;
};