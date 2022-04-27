const dropdownMenuAbout = () => {
    let menuAbout = document.querySelector("[data-menu-dropdown='about']");

    if (menuAbout) {
        let eventsShowMenu = ['click', 'touchstart'];

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
        dropdownMenuAbout.classList.toggle("active");
    }
}

export default dropdownMenuAbout;