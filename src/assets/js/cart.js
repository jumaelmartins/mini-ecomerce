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
