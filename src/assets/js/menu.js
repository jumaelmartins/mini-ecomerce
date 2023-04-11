


const menuButton = document.querySelector(".menu");

export const toggleMenu = () => {
    const auth = document.querySelector(".auth");
    const iconChat = document.querySelector(".icons__chat");
    const iconHeart = document.querySelector(".icons__heart");
    const nav = document.querySelector(".header__nav__content")

    auth.classList.toggle("hidden")
    iconChat.classList.toggle("hidden")
    iconHeart.classList.toggle("hidden")
    nav.classList.toggle("hidden")
}
