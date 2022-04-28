import clickOutsideElement from "./click-outside-element.js";

const classActive = "active";
const eventClick = "click";
const eventTouchStart = "touchstart";
let eventsShowMenu;

const dropdownMenuAbout = () => {
    let menuAbout = document.querySelector("[data-menu-dropdown='about']");

    if (menuAbout) {
        eventsShowMenu = [eventClick, eventTouchStart];

        // Touchstart - acontece de forma instantânea, click - delay
        eventsShowMenu.forEach(eventShow => {
            menuAbout.addEventListener(eventShow, showMenuDropdown);
        })
    }
}

const showMenuDropdown = event => {
    event.preventDefault();
    let dropdownMenuAbout = document.querySelector(".dropdown-menu-about");

    if (dropdownMenuAbout) {
        // Toggle: remove se existir; se não houver, add
        dropdownMenuAbout.classList.toggle(classActive);
    }

    if (!eventsShowMenu || eventsShowMenu.length < 0) {
        eventsShowMenu.push(eventClick);
        eventsShowMenu.push(eventTouchStart);
    }

    clickOutsideElement(dropdownMenuAbout, eventsShowMenu);
}

export default dropdownMenuAbout;