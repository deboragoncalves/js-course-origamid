class AddLinksMenu {
    constructor(linksMenu) {
        // .link-menu
        this.listMenu = document.querySelectorAll(linksMenu);
    }

    // Para cada link no menu (tag a), seta o atribut href caso não exista,
    // direcionando com as áreas do site que possuem o id referente
    initAddLinksMenu = () => {
        if (!this.listMenu) return;

        this.listMenu.forEach((item) => {
            if (item.hasAttribute('href')) {
                return;
            }

            let textMenu = item.innerHTML;

            if (textMenu) {
                textMenu = textMenu.toUpperCase();

                if (textMenu.includes('COMPETIÇÕES')) {
                    item.setAttribute('href', '#competitions');
                } else if (textMenu.includes('DÚVIDAS')) {
                    item.setAttribute('href', '#faq');
                } else if (textMenu.includes('CONTATO')) {
                    item.setAttribute('href', '#contact');
                }
            }
        });

        return this;
    };
}

export default AddLinksMenu;
