let cart = [];

const addItemToCart = (id, title, thumbnail, price) => {

    const item = {
        id: id,
        title: title,
        thumb: thumbnail,
        price: price
    }

  cart.push(item);
};

const removeItemToCart = (item) => {
  const itemToRemove = cart.filter((cartItem) => item.id === cartItem.id);
  const indexOfItemToRemove = cart.indexOf(itemToRemove);
  return indexOfItemToRemove !== -1 ? cart.splice(indexOfItemToRemove, 1) : "";
};


document.addEventListener("click", e => {
    console.log(e.target.innerText)
    if (e.target.innerText === " Comprar") {
        const li = e.target.closest("li");
        const title = li.querySelector("h2");
        const id = li.id;
        const thumbnail = li.querySelector("img");
        const price = li.querySelector(".price");
        addItemToCart(parseInt(id), title.textContent, thumbnail.src, parseFloat(price.firstElementChild.textContent));
        console.log(cart);

        window.location.href = '/pages/product.html'
    } 
})
