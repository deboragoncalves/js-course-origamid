window.onload = () => {
    addLinksMenu();
    addAltImg();
    showCompetitions();
    getQuestions();
};

const classActive = "active";

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
    let listDescriptionsCompetitions = document.querySelectorAll(".list-descriptions li");

    if (listNamesCompetitions.length <= 0 || listDescriptionsCompetitions.length <= 0) return;

    // Ao clicar na li, adicionar classe ativo
    listNamesCompetitions.forEach((nameCompetition, index) => {
        nameCompetition.addEventListener('click', () => {
            addClassActive(index);
        });
    });

    // Primeiro elemento do item, ao carregar a página exibe a sua descrição, iniciando com a classe ativo
    listDescriptionsCompetitions[0].classList.add(classActive);
};

const addClassActive = index => {
    let listDescriptionsCompetitions = document.querySelectorAll(".list-descriptions li");

    // Remover as classes ativo de todos os itens
    listDescriptionsCompetitions.forEach(description => {
        description.classList.remove(classActive);
    });

    listDescriptionsCompetitions[index].classList.add(classActive);
}

const getQuestions = () => {
    // Selecionar todas as perguntas - dt 
    let listQuestions = document.querySelectorAll(".list-questions dt");

    if (listQuestions.length <= 0) return;

    listQuestions.forEach(question => {
        question.addEventListener("click", showAnswer);
    });

    // Mostrar primeira resposta no onload
    let listAnswers = document.querySelectorAll(".list-questions dd");
    listAnswers[0].classList.add(classActive);
}

const showAnswer = event => {
    // Item clicado
    let questionClicked = event.currentTarget;
    let answer = questionClicked.nextElementSibling;
    answer.classList.toggle(classActive);
}

// TODO: Adicionar imagens às competições
// TODO: Responsivo - matchMedia