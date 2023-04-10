import { cart } from "./cart";


const ItemCounter = document.querySelector(".cart__counter");

export const showCounter = () => {
    if (cart.length > 0) {
        ItemCounter.classList.remove("hidden")
    } else {
        ItemCounter.classList.add("hidden")
    }
}


export const updateCounter = () => {
    ItemCounter.innerHTML = cart.length;
}