import { list, state } from "./pagination";

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form__input");
let cards = document.querySelectorAll(".products__card");

export const filterItems = () => {
//   let page = state.page - 1;
//   let start = page * state.perPage;
//   let end = start + state.perPage;

  input.addEventListener("keyup", (e) => {
    let searchValue = input.value.trim().toLowerCase();

    // console.log(searchValue)

    cards.forEach((card) => {
      const filteredCard = card.innerText
        .trim().toLowerCase()
        .includes(searchValue.trim().toLowerCase());

        console.log(filteredCard)

      if (!filteredCard) {
        card.classList.add("hidden");
      } else {
        card.classList.remove("hidden");
      }
    });
  });

//   list.update();
};

filterItems();