// API Bitcoin https://blockchain.info/ticker
// Chave sell 

const watchGames = () => {
    createContentWatchGames();
}

async function createContentWatchGames() {
    let bitcoinValueBRL = await getBitconValue();
    console.log(bitcoinValueBRL)

    // Exibir preço ficticio assinatura em bitcoin
    // toFixed - casas decimais
    let priceWatchGames = 5000 / bitcoinValueBRL;
    priceWatchGames = priceWatchGames.toFixed(4);
    console.log(priceWatchGames);
    
    let sectionWachGames = document.querySelector("#watch-games");
    let titleWatchGames = document.createElement("h5");
    titleWatchGames.innerHTML = "Quer assistir a todos os jogos da Superliga?"

    let linkWatchGames = document.createElement("a");

    linkWatchGames.innerHTML = "Assine o Canal Vôlei Brasil ";
    linkWatchGames.setAttribute("href", "https://canalvoleibrasil.cbv.com.br/");
    linkWatchGames.setAttribute("target", "_blank");

    let textWatchGames = document.createElement("span");
    textWatchGames.innerHTML = `e pague apenas ${priceWatchGames} bitcoin por toda a temporada! `;

    sectionWachGames.appendChild(titleWatchGames);
    sectionWachGames.appendChild(linkWatchGames);
    sectionWachGames.appendChild(textWatchGames);
}

async function getBitconValue() {
    const URL_BITCOIN = "https://blockchain.info/ticker";

    let responseBitcoin = await fetch(URL_BITCOIN);
    let responseBitcoinJson = await responseBitcoin.json();
    let bitcoinValueBRL = responseBitcoinJson.BRL.sell;
    return bitcoinValueBRL;
}

export default watchGames;