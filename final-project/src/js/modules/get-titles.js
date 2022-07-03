import ShowTitles from './show-titles.js';

// Recebe os dados do json via fetch, fazendo um forEach para exibir os valores dos titulos
async function getTitles() {
    try {
        // Await: espera execução para prosseguir
        // Utilizar function com async await
        const responseTitles = await fetch('../data/titlesApi.json');
        const responseTitlesJson = await responseTitles.json();

        const showTitles = new ShowTitles('#titles-men', '#titles-women');

        responseTitlesJson.forEach((title) => {
            showTitles.initShowTitles(title);
        });
    } catch (error) {
        console.log(error);
    }
}

export default getTitles;
