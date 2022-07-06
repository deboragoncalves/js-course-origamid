import clickOutsideElement from './click-outside-element.js';

class DropdownMenu {
    constructor(dropdownMenuAbout, listMenuAbout) {
        // .dropdown-menu-about
        this.elementDropdownMenuAbout = document.querySelector(dropdownMenuAbout);
        // [data-menu-dropdown="about"]
        this.menuAbout = document.querySelector(listMenuAbout);

        this.classActive = 'active';
        this.eventClick = 'click';
        this.eventTouchStart = 'touchstart';
        this.eventsShowMenu = [];
    }

    // Se menu estiver aparecendo, esconde e vice-versa
    showMenuDropdown = (event) => {
        event.preventDefault();

        if (this.elementDropdownMenuAbout) {
            this.elementDropdownMenuAbout.classList.add(this.classActive);
        }

        if (!this.eventsShowMenu || this.eventsShowMenu.length === 0) {
            this.eventsShowMenu.push(this.eventClick);
            this.eventsShowMenu.push(this.eventTouchStart);
        }

        clickOutsideElement(this.elementDropdownMenuAbout, this.eventsShowMenu);
    };

    // Adiciona os eventos de touch e click no menu
    // Touchstart - acontece de forma instantânea, click - delay
    initDropdownMenu = () => {
        if (this.menuAbout) {
            this.eventsShowMenu = [this.eventClick, this.eventTouchStart];

            this.eventsShowMenu.forEach((eventShow) => {
                this.menuAbout.addEventListener(eventShow, this.showMenuDropdown);
            });
        }

        return this;
    };
}

export default DropdownMenu;
