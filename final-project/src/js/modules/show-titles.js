class ShowTitles {
    constructor(sectionMen, sectionWomen) {
        // #titles-men
        this.sectionTitlesMen = document.querySelector(sectionMen);
        // #titles-women
        this.sectionTitlesWomen = document.querySelector(sectionWomen);
    }

    // Adicionar na section de acordo com a categoria
    addSectionsMenWomen = (category, containerTitle) => {
        category === 'MEN' ? this.sectionTitlesMen.appendChild(containerTitle) : this.sectionTitlesWomen.appendChild(containerTitle);
    };

    // Setar nomes competições
    setNameCompetition = (nameCompetition, elementNameCompetition) => {
        nameCompetition === 'VNL' ? elementNameCompetition.innerHTML = 'Liga das Nações: '
            : nameCompetition === 'OLYMPICS' ? elementNameCompetition.innerHTML = 'Olimpíadas: '
            : elementNameCompetition.innerHTML = 'Campeonato Mundial: ';

        return elementNameCompetition;
    };

    // Recebe como parâmetro a quantidade de titulos e cria a section com os titulos,
    // fazendo a contagem
    initShowTitles = (title) => {
        const titles = title.goldenMedals;
        if (!titles || titles === 0) return;

        const nameCompetition = title.competition.toUpperCase();
        const containerTitle = document.createElement('section');
        containerTitle.classList.add('container-title');

        let elementNameCompetition = document.createElement('p');
        elementNameCompetition.classList.add('name-competition');

        elementNameCompetition = this.setNameCompetition(nameCompetition, elementNameCompetition);

        const elementTitles = document.createElement('p');
        elementTitles.classList.add('titles');

        let initTitles = 0;

        // Exibir títulos com setInterval, repetições da função a cada X ms
        const countTitles = setInterval(() => {
            initTitles += 1;
            elementTitles.innerText = initTitles;

            // Clear interval pára a contagem
            initTitles === titles ? clearInterval(countTitles) : null;
        }, 150);

        containerTitle.appendChild(elementNameCompetition);
        containerTitle.appendChild(elementTitles);

        const category = title.category.toUpperCase();
        this.addSectionsMenWomen(category, containerTitle);
    };
}

export default ShowTitles;
