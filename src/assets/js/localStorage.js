import { products } from './products' 

const getLocalStorageItem = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
const setLocalStorageItem = localStorage.setItem("products", products);