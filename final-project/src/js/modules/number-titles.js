const numberTitles = () => {
    titlesMen();
    titlesWomen();
}

// Fazer a contagem de titulos ao iniciar a página, usando setInterval - repetição das funções a cada X segundos
// ClearInterval - pára a contagem
const titlesMen = () => {
    let menWorldChamp = document.querySelector("[data-titles-men='world']");
    let menVnl = document.querySelector("[data-titles-men='vnl']");

    let titlesMenWorld = 0;

    let countTitlesMenWorld = setInterval(() => {
        titlesMenWorld++;
        menWorldChamp.innerText = titlesMenWorld;

        titlesMenWorld == 3 ? clearInterval(countTitlesMenWorld) : null;
    }, 10);

    let titlesMenVnl = 0;

    let countTitlesMenVnl = setInterval(() => {
        titlesMenVnl++;
        menVnl.innerText = titlesMenVnl;

        titlesMenVnl == 10 ? clearInterval(countTitlesMenVnl) : null;
    }, 100);
}

const titlesWomen = () => {
    let womenOlympics = document.querySelector("[data-titles-women='olympics']");
    let womenVnl = document.querySelector("[data-titles-women='vnl']");

    let titlesWomenOlympics = 0;

    let countTitlesWomenOly = setInterval(() => {
        titlesWomenOlympics++;
        womenOlympics.innerText = titlesWomenOlympics;

        titlesWomenOlympics == 2 ? clearInterval(countTitlesWomenOly) : null;
    }, 10);

    let titlesWomenVnl = 0;

    let countTitlesWomenVnl = setInterval(() => {
        titlesWomenVnl++;
        womenVnl.innerText = titlesWomenVnl;

        titlesWomenVnl == 12 ? clearInterval(countTitlesWomenVnl) : null;
    }, 100);
}

export default numberTitles;