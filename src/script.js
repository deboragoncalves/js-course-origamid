window.onload = () => {
    addLinksMenu();
    addAltImg();
};

const addLinksMenu = () => {
  // Adicionar classe em cada li e selecionar todas com querySelectorAll, retornando uma nodeList

  let listMenu = document.querySelectorAll(".nav-link");

  listMenu.forEach((item, index) => {
    if (item.hasAttribute("href")) {
      return;
    }

    let textMenu = item.innerHTML;

    if (textMenu) {
      textMenu = textMenu.toUpperCase();

        if (textMenu.includes("SUPERLIGA")) {
            item.setAttribute("href", "#superliga");
        } else if (textMenu.includes("DÚVIDAS")) {
            item.setAttribute("href", "#faq");
        } else if (textMenu.includes("CONTATO")) {
            item.setAttribute("href", "#contact");
        }
    }
  });

};

const addAltImg = () => {
    let images = document.querySelectorAll("img");

    images.forEach(image => {
        if (image.hasAttribute("alt")) {
            return;
        }

        let srcAttribute = image.getAttribute("src");

        if (srcAttribute) {
            srcAttribute = srcAttribute.toUpperCase();

            if (srcAttribute.includes("MAPA")) {
                image.setAttribute("alt", "Mapa com a localização da Confederação Brasileira de Vôlei")
            } else if (srcAttribute.includes("SUPERLIGA")) {
                image.setAttribute("alt", "Ginásio de vôlei");
            }
        }
    })
    
}
