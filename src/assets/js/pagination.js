import { filterItems } from "./filter";
import { products, itemsToHtml } from "./products";

let perPage = 8;

export const state = {
  page: 1,
  perPage,
  totalPage: Math.ceil(products.length / perPage),
  maxVisibleButtons: 5,
};

const hmtl = {
  get(element) {
    return document.querySelector(element);
  },
};

const controls = {
  next() {
    state.page++;

    const lastPage = state.page > state.totalPage;
    if (lastPage) {
      state.page--;
    }
  },
  prev() {
    state.page--;
    if (state.page < 1) {
      state.page++;
    }
  },
  goTo(page) {
    state.page = page;
    if (page < 1) {
      page = 1;
    }

    state.page = Number(page);

    if (page > state.totalPage) {
      state.page = state.totalPage;
    }
  },
  createListeners() {
    hmtl.get(".first-page").addEventListener("click", () => {
      controls.goTo(1);
      update();
    });
    hmtl.get(".last-page").addEventListener("click", () => {
      controls.goTo(state.totalPage);
      update();
    });
    hmtl.get(".next-button").addEventListener("click", () => {
      controls.next();
      update();
    });
    hmtl.get(".prev-button").addEventListener("click", () => {
      controls.prev();
      update();
    });
  },
};

const buttons = {
  create(number) {
    const button = document.createElement("button");
    button.innerHTML = number;

    const buttons = hmtl.get(".pages");
    buttons.appendChild(button);

    if (state.page === number) {
      button.classList.add("active");
    }

    button.classList.add("button");

    button.addEventListener("click", (e) => {
      controls.goTo(Number(e.target.innerText));
      update();
    });
  },
  update() {
    hmtl.get(".pages").innerHTML = "";
        const { maxLeft, maxRight } = buttons.calculateMaxVisible();

    for (let page = maxLeft; page <= maxRight; page++) {
      buttons.create(page);
    }
  },
  calculateMaxVisible() {
    const { maxVisibleButtons } = state;
    let maxLeft = state.page - Math.floor(maxVisibleButtons / 2);
    let maxRight = state.page + Math.floor(maxVisibleButtons / 2);
    const firstPage = document.querySelector(".first-page");
    const prevButton = document.querySelector(".prev-button");
    const lastPage = document.querySelector(".last-page");
    const nextButton = document.querySelector(".next-button");

    if (maxLeft) {
      firstPage.classList.add("hidden");
      prevButton.classList.add("hidden");
    } else {
      firstPage.classList.remove("hidden");
      prevButton.classList.remove("hidden");
    }

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if (maxRight > state.totalPage) {
      maxLeft = state.totalPage - (maxVisibleButtons - 1);
      maxRight = state.totalPage;

      if (maxLeft < 1) maxLeft = 1;
    }

    return { maxLeft, maxRight };
  },
};

export function update() {
  list.update();
  buttons.update();
}

export const list = {
  update() {
    const ul = document.querySelector(".products__list");
    let page = state.page - 1;
    let start = page * state.perPage;
    let end = start + state.perPage;

    

    let productsPage = products.slice(start, end);

    if (ul) {
      ul.innerHTML = "";
      const newHtml = productsPage.map(itemsToHtml).join("");
      ul.innerHTML = newHtml;
    }
  },
};

update();
controls.createListeners();
