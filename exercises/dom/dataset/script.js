/* Exercício 01: Adicione um atributo data-anime="show-down" e data-anime="show-right" a todos as section's
com descricão dos animais. */

let sectionAnimals = document.querySelectorAll(".animals");
let arraySectionAnimals = Array.from(sectionAnimals);

const addDataAnime = arraySectionAnimals => {
    if (arraySectionAnimals) {
        arraySectionAnimals.forEach(section => {
            section.dataset.dataAnime = "show-down";
            let datasetSection = section.dataset;
            console.log("Dataset Section Animal: ");
            console.log(datasetSection);
            return datasetSection;
        });
    }
}

console.log("Exercício 01: ");
addDataAnime(arraySectionAnimals);

/* Exercício 02: Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section
assim que a mesma aparecer na tela (animacao tab) */

// Adicionar classe com o nome = o valor do dataset data-anime

const addClassShowDown = arraySectionAnimals => {
    if (arraySectionAnimals) {
        arraySectionAnimals.forEach(section => {
            let valueDataAnime = section.dataset.dataAnime;
            section.classList.add(valueDataAnime);
            console.log("Classes Section: ");
            console.log(section.classList);
            return section.classList;
        });
    }
}

console.log("Exercício 02: ");
addClassShowDown(arraySectionAnimals);