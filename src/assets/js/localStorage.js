import { products } from './products' 

export const getLocalStorageItem = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

export const setLocalStorageItem = () => {
    localStorage.setItem("products", JSON.stringify(products));
}    