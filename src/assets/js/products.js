import { productsJson } from "./data";
import { getLocalStorageItem } from "./localStorage";

export let products = productsJson;
let filteredItems = [];
let liked = [];

export const loadItems = () => {
  const ul = document.querySelector(".products__list");

  if (ul) {
    ul.innerHTML = "";
    const newHtml = products.map(itemsToHtml);
    ul.innerHTML = newHtml;
  }
};

const itemsToHtml = (product) => {
  return `
    <li id="${product.id}" class="products__card">
        <div class="products__card__first-column">
        <div class="products__card__first-column__header">
            <p>${product.stars} stars <b>(${product.reviews.total})</b></p>
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
                src="${product.thumbnail}"
                alt=""
            />
            </div>
            <div class="products__card__first-column__content">
            <h2>${product.title}</h2>
            <div>
                <p class="price">R$ <b>${product.price}</b></p>
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

export const filterProducts = (id) => {
  const selectProduct = products.filter((product) => product.id === id);
  return selectProduct;
};

export const produtsDetailToHtml = (product) => {
  return `
  <div class="modal__container">
    <div class="modal__content">
      <p>Item Adicionado ao Carrinho</p>
      <button>Ir Para o Carrinho</button>
      <button>Continuar Comprando</button>
    </div>
  </div>
  <div class="carousel">
        <div class="carousel-container">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div class="carousel-item first">
            <img src="https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_g.jpg" alt=""/>
          </div>

          <div class="carousel-item">
            <img src="https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244900_gg.jpg" alt=""/>
          </div>

          <div class="carousel-item">
            <img src="https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244903_gg.jpg" alt=""/>
          </div>

          <div class="carousel-item">
            <img src="https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244904_gg.jpg" alt=""/>
          </div>

          <div class="carousel-navigation">
            <div class="btn-auto1"></div>
            <div class="btn-auto2"></div>
            <div class="btn-auto3"></div>
            <div class="btn-auto4"></div>
          </div>

        </div>

        <div class="manual-navigation">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>

      </div>

      <div class="card">
          <div>
            ${"R$" + product.price}
          </div>
          <div>
            Comprar
          </div>
      </div>

<div class="products__informations">
      <h2>
        DESCRIÇÃO
      </h2>
      <ul>
        <li>
          <h3>${product.description.title}</h3>
        </li>
        <li>
          <h3>${product.description.topics[0].title}</h3>
          <p>${product.description.topics[0].content}</p>
        </li>
        <li>
          <h3>${product.description.topics[1].title}</h3>
          <p>${product.description.topics[1].content}</p>
        </li>
        <li>
          <h3>caracteristicas tecnicas</h3>
          <h3>${product.techinfo.topics[0].title}</h3>
          <p>marca: ${product.techinfo.topics[0].brand}</p>
          <p>modelo: ${product.techinfo.topics[0].model}</p>
        </li>
        <li>
          <h3>${product.techinfo.topics[1].title}</h3>
          <p>Motor Grafico: ${product.techinfo.topics[1].engine}</p>
          <p>Cuda Core: ${product.techinfo.topics[1].cudacore}</p>
        </li>
        <li>
          <h3>${product.techinfo.topics[2].title}</h3>
          <p>modo-overclock: ${product.techinfo.topics[2].ocmode}</p>
          <p>modo-gaming: ${product.techinfo.topics[2].gamingmode}</p>
        </li>

        <li>
          <p>peso: ${product.techinfo.topics[3].weigth}</p>
          <p>garantia: ${product.techinfo.topics[4].warranty} meses</p>
        </li>
      </ul>
    </div>
`;
};
