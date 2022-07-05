class MenuMobile {
    constructor(listNavbar, iconMenuMobile) {
        // #list-navbar
        this.listMenu = document.querySelector(listNavbar);
        // [data-menu-mobile="button"]
        this.buttonMenuMobile = document.querySelector(iconMenuMobile);
        this.active = 'active';
    }

    // Exibe ou esconde o botão
    showMenuMobile = () => {
        if (!this.listMenu || !this.active) return;

        this.listMenu.classList.toggle(this.active);
    };

    // Adiciona o evento de click ao ícone do menu
    initMenuMobile = () => {
        if (!this.buttonMenuMobile) return;

        this.buttonMenuMobile.addEventListener('click', this.showMenuMobile);
        return this;
    };
}

export default MenuMobile;
