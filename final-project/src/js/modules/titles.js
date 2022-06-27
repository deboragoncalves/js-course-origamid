/* Fazer a contagem de titulos ao iniciar a página,
usando setInterval - repetição das funções a cada X segundos
- ClearInterval - pára a contagem
- Usar async await com try/catch - usar function e não arrow
- Await: espera execução para prosseguir */

const addSectionsMenWomen = (category, containerTitle) => {
    // Adicionar na section de acordo com a categoria
    const sectionTitlesMen = document.querySelector('#titles-men');
    const sectionTitlesWomen = document.querySelector('#titles-women');

    if (category === 'MEN') {
        sectionTitlesMen.appendChild(containerTitle);
    } else if (category === 'WOMEN') {
        sectionTitlesWomen.appendChild(containerTitle);
    }
};

const setNameCompetition = (nameCompetition, elementNameCompetition) => {
    // Nomes competições

    if (nameCompetition === 'VNL') {
        elementNameCompetition.innerHTML = 'Liga das Nações: ';
    } else if (nameCompetition === 'OLYMPICS') {
        elementNameCompetition.innerHTML = 'Olimpíadas: ';
    } else if (nameCompetition === 'WORLDCHAMPIONSHIP') {
        elementNameCompetition.innerHTML = 'Campeonato Mundial: ';
    }

    return elementNameCompetition;
};

const showTitles = (title) => {
    const titles = title.goldenMedals;
    if (!titles || titles === 0) return;

    const nameCompetition = title.competition.toUpperCase();
    const containerTitle = document.createElement('section');
    containerTitle.classList.add('container-title');

    let elementNameCompetition = document.createElement('p');
    elementNameCompetition.classList.add('name-competition');

    elementNameCompetition = setNameCompetition(nameCompetition, elementNameCompetition);

    const elementTitles = document.createElement('p');
    elementTitles.classList.add('titles');

    let initTitles = 0;

    // Exibir títulos com setInterval
    const countTitles = setInterval(() => {
        initTitles += 1;
        elementTitles.innerText = initTitles;

        initTitles === titles ? clearInterval(countTitles) : null;
    }, 150);

    containerTitle.appendChild(elementNameCompetition);
    containerTitle.appendChild(elementTitles);

    const category = title.category.toUpperCase();
    addSectionsMenWomen(category, containerTitle);
};

async function getTitles() {
    try {
        const responseTitles = await fetch('../data/titlesApi.json');
        const responseTitlesJson = await responseTitles.json();

        responseTitlesJson.forEach((title) => {
            showTitles(title);
        });
    } catch (error) {
        console.log(error);
    }
}

const titles = () => {
    getTitles();
};

export default titles;
