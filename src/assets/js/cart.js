export let cart = [];

export const addItemToCart = (id, title, thumbnail, price) => {
  const item = {
    id: id,
    title: title,
    thumb: thumbnail,
    price: price,
  };

  cart.push(item);
};

export const removeItemToCart = (item) => {
  const itemToRemove = cart.filter((cartItem) => item.id === cartItem.id);
  const indexOfItemToRemove = cart.indexOf(itemToRemove);
  return indexOfItemToRemove !== -1 ? cart.splice(indexOfItemToRemove, 1) : "";
};


export const productCartHtml = (product) => {
  return`
  <header class="header">
        <div class="header__content-cart">
            <a href="/">Voltar</a>
            <h1>JM</h1>
        </div>
    </header>

    <section class="adress__container">
        <h2>SELECIONE O ENDEREÇO</h2>
        <div class="adress__content">
            <form class="adress__form" action="post">
                <input type="search">
                <button>OK</button>
            </form>
            <a>Não lembro meu CEP</a>
            <p>Entregar em:</p>
            <p>...</p>
        </div>
    </section>

    <section class="products__cart__container">
        <h2>PRODUTO E FRETE</h2>
        <div>
            <button class="remove__btn">remover todos</button>
            <ul>
                <li class="cart__card">
                    <div class="cart__card__content">
                        <div>
                        <img width="128" src="https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_gg.jpg" alt="">
                        </div>
                        <div>
                            <h3>AMD</h3>
                            <p>Processador Ryzen</p>
                        </div>
                    </div>
                    <div>
                        <p>Com desconto x bla bla bla</p>
                    </div>
                    <div class="cart__card__price__container">
                        <div class="cart__card__price__content">
                            <p>Preço a Vista</p>
                            <p>1000 Reais</p>
                        </div>
                        <div class="cart__card__counter__container">
                            <p>Quant</p>
                            <div class="cart__card__counter__content">
                                <button> < </button>
                                <p>1</p>
                                <button> > </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>  

  `
}