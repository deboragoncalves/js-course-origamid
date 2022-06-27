const listMenu = document.querySelector('#list-navbar');
const buttonMenuMobile = document.querySelector('[data-menu-mobile="button"]');

const active = 'active';

const showMenuMobile = () => {
    listMenu.classList.toggle(active);
};

const menuMobile = () => {
    buttonMenuMobile.addEventListener('click', showMenuMobile);
};

export default menuMobile;
