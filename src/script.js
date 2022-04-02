window.onload = () => {
    addLinksMenu();
    addAltImg();
    showCompetitions();
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
            }
        }
    })
    
}

const showCompetitions = () => {
    let listNamesCompetitions = document.querySelectorAll(".list-competitions li");

    // Ao clicar na li, adicionar classe ativo
    listNamesCompetitions.forEach((nameCompetition, index) => {
        nameCompetition.addEventListener('click', () => {
            addClassActive(index);
        });
    });

    // Primeiro elemento do item, ao carregar a página exibe a sua descrição, iniciando com a classe ativo
    let listDescriptionsCompetitions = document.querySelectorAll(".list-descriptions li");
    listDescriptionsCompetitions[0].classList.add("active");
};

const addClassActive = index => {
    let listDescriptionsCompetitions = document.querySelectorAll(".list-descriptions li");

    // Remover as classes ativo de todos os itens
    listDescriptionsCompetitions.forEach(description => {
        description.classList.remove("active");
    });

    listDescriptionsCompetitions[index].classList.add("active");
}