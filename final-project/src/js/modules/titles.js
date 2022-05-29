const titles = () => {
    getTitles();
}

// Fazer a contagem de titulos ao iniciar a página, usando setInterval - repetição das funções a cada X segundos
// ClearInterval - pára a contagem
// Usar async await com try/catch - usar function e não arrow
// Await: espera execução para prosseguir 

async function getTitles() {
    try {
        const responseTitles = await fetch("../data/titlesApi.json");
        const responseTitlesJson = await responseTitles.json();

        responseTitlesJson.forEach(title => {
            showTitles(title);
        });
    } catch (error) {
        console.log(error);
    }
}

const showTitles = title => {

    let titles = title.goldenMedals;
    if (!titles || titles == 0) return;

    let nameCompetition = title.competition.toUpperCase();
    let containerTitle = document.createElement("section");
    containerTitle.classList.add("container-title");

    let elementNameCompetition = document.createElement("p");
    elementNameCompetition.classList.add("name-competition");

    elementNameCompetition = setNameCompetition(nameCompetition, elementNameCompetition);

    let elementTitles = document.createElement("p");
    elementTitles.classList.add("titles");

    let initTitles = 0;

    // Exibir títulos com setInterval
    let countTitles = setInterval(() => {
        initTitles++;
        elementTitles.innerText = initTitles;

        initTitles == titles ? clearInterval(countTitles) : null;
    }, 150);

    containerTitle.appendChild(elementNameCompetition);
    containerTitle.appendChild(elementTitles);

    let category = title.category.toUpperCase();
    addSectionsMenWomen(category, containerTitle);
}

const setNameCompetition = (nameCompetition, elementNameCompetition) => {
    // Nomes competições
    nameCompetition === "VNL" ? elementNameCompetition.innerHTML = "Liga das Nações: " :
        nameCompetition === "OLYMPICS" ? elementNameCompetition.innerHTML = "Olimpíadas: " :
            nameCompetition === "WORLDCHAMPIONSHIP" ? elementNameCompetition.innerHTML = "Campeonato Mundial: " : null;

    return elementNameCompetition;
}

const addSectionsMenWomen = (category, containerTitle) => {
    // Adicionar na section de acordo com a categoria
    let sectionTitlesMen = document.querySelector("#titles-men");
    let sectionTitlesWomen = document.querySelector("#titles-women");

    if (category === "MEN") {  
        sectionTitlesMen.appendChild(containerTitle);
    } else if (category === "WOMEN") {
        sectionTitlesWomen.appendChild(containerTitle);
    }
}

export default titles;