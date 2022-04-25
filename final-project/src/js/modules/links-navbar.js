const addLinksMenu = () => {
    // Adicionar classe em cada li e selecionar todas com querySelectorAll, retornando uma nodeList

    let listMenu = document.querySelectorAll(".nav-link");

    listMenu.forEach(item => {
        if (item.hasAttribute("href")) {
            return;
        }

        let textMenu = item.innerHTML;

        if (textMenu) {
            textMenu = textMenu.toUpperCase();

            if (textMenu.includes("COMPETIÇÕES")) {
                item.setAttribute("href", "#competitions");
            } else if (textMenu.includes("DÚVIDAS")) {
                item.setAttribute("href", "#faq");
            } else if (textMenu.includes("CONTATO")) {
                item.setAttribute("href", "#contact");
            }
        }
    });

};

export default addLinksMenu;