import clickOutsideElement from './click-outside-element.js';

const classActive = 'active';
const eventClick = 'click';
const eventTouchStart = 'touchstart';
let eventsShowMenu;

const showMenuDropdown = (event) => {
    event.preventDefault();
    const elementDropdownMenuAbout = document.querySelector('.dropdown-menu-about');

    if (elementDropdownMenuAbout) {
        // Toggle: remove se existir; se não houver, add
        elementDropdownMenuAbout.classList.toggle(classActive);
    }

    if (!eventsShowMenu || eventsShowMenu.length < 0) {
        eventsShowMenu.push(eventClick);
        eventsShowMenu.push(eventTouchStart);
    }

    clickOutsideElement(elementDropdownMenuAbout, eventsShowMenu);
};

const dropdownMenuAbout = () => {
    const menuAbout = document.querySelector('[data-menu-dropdown="about"]');

    if (menuAbout) {
        eventsShowMenu = [eventClick, eventTouchStart];

        // Touchstart - acontece de forma instantânea, click - delay
        eventsShowMenu.forEach((eventShow) => {
            menuAbout.addEventListener(eventShow, showMenuDropdown);
        });
    }
};

export default dropdownMenuAbout;
