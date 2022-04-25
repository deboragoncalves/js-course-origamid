const showCompetitions = () => {
    const classActive = "active";

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
    const classActive = "active";

    let listDescriptionsCompetitions = document.querySelectorAll(".list-descriptions li");

    // Remover as classes ativo de todos os itens
    listDescriptionsCompetitions.forEach(description => {
        description.classList.remove(classActive);
    });

    listDescriptionsCompetitions[index].classList.add(classActive);
}

export default showCompetitions;