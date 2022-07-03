class ShowCompetitions {
    constructor(competitions, descriptions) {
        // .list-competitions li
        this.listNamesCompetitions = document.querySelectorAll(competitions);
        // .list-descriptions li
        this.listDescriptionsCompetitions = document.querySelectorAll(descriptions);
    }

    addClassActive = (index) => {
        const classActive = 'active';

        // Remover as classes ativo de todos os itens
        this.listDescriptionsCompetitions.forEach((description) => {
            description.classList.remove(classActive);
        });

        // Adiciona a classe ativo no item clicado
        this.listDescriptionsCompetitions[index].classList.add(classActive);
    };

    initShowCompetitions = () => {
        const classActive = 'active';

        if (this.listNamesCompetitions.length <= 0
            || this.listDescriptionsCompetitions.length <= 0) return;

        // Ao clicar na li, adicionar classe ativo
        this.listNamesCompetitions.forEach((nameCompetition, index) => {
            nameCompetition.addEventListener('click', () => {
                this.addClassActive(index);
            });
        });

        /* Primeira descrição da competição é exibida ao carregar a página,
        iniciando com a classe ativo */
        this.listDescriptionsCompetitions[0].classList.add(classActive);

        return this;
    };
}

export default ShowCompetitions;
