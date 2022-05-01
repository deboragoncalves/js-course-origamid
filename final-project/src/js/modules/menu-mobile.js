import clickOutsideElement from './click-outside-element.js';

let listMenu = document.querySelector("#list-navbar");
let buttonMenuMobile = document.querySelector("[data-menu-mobile='button']");

const active = "active";

const showMenuMobile = () => {
    listMenu.classList.toggle(active);
}

const menuMobile = () => {
    buttonMenuMobile.addEventListener("click", showMenuMobile);
}

export default menuMobile;