import { getLocalStorageItem } from "./localStorage";

export let products = getLocalStorageItem;
let filteredItems = [];
let cart = [];

const addItemToCart = (newItem) => {
    cart.push(newItem);
}

const removeItemToCart = (item) => {
    const itemToRemove = cart.filter(cartItem => item.id === cartItem.id);
    const indexOfItemToRemove = cart.indexOf(itemToRemove);
    return indexOfItemToRemove !== -1 ? cart.splice(indexOfItemToRemove, 1) : "";
}





