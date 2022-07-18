// API Bitcoin https://blockchain.info/ticker
// Chave sell

async function getBitconValue() {
    const URL_BITCOIN = 'https://blockchain.info/ticker';

    const responseBitcoin = await fetch(URL_BITCOIN);
    const responseBitcoinJson = await responseBitcoin.json();
    const bitcoinValueBRL = responseBitcoinJson.BRL.sell;
    return bitcoinValueBRL;
}

async function createContentWatchGames() {
    const bitcoinValueBRL = await getBitconValue();

    // Exibir preço ficticio assinatura em bitcoin
    // toFixed - casas decimais
    let priceWatchGames = 5000 / bitcoinValueBRL;
    priceWatchGames = priceWatchGames.toFixed(4);

    const sectionWachGames = document.querySelector('#watch-games');
    const titleWatchGames = document.createElement('h5');
    titleWatchGames.innerHTML = 'Quer assistir a todos os jogos da Superliga?';

    const linkWatchGames = document.createElement('a');

    linkWatchGames.innerHTML = 'Assine o Canal Vôlei Brasil ';
    linkWatchGames.setAttribute('href', 'https://canalvoleibrasil.cbv.com.br/');
    linkWatchGames.setAttribute('target', '_blank');

    const textWatchGames = document.createElement('span');
    textWatchGames.innerHTML = `e pague apenas ${priceWatchGames} bitcoin por toda a temporada! `;

    sectionWachGames.appendChild(titleWatchGames);
    sectionWachGames.appendChild(linkWatchGames);
    sectionWachGames.appendChild(textWatchGames);

    const imageChannel = document.createElement('img');
    imageChannel.setAttribute('src', 'assets/images/canal volei brasil.jpg');
    imageChannel.setAttribute('alt', 'Comentaristas Canal Vôlei Brasil');
    imageChannel.setAttribute('width', '500');
    imageChannel.setAttribute('height', '300');

    sectionWachGames.appendChild(imageChannel);
}

const watchGames = () => {
    createContentWatchGames();
};

export default watchGames;
