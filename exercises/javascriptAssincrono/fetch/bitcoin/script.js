/*
Exercício: 
Utilizando a API https://blockchain.info/ticker, retorne no DOM o valor de compra 
da bitcoin em reais. Atualize este valor a cada 30s.
*/

window.onload = () => {
    styleParagraphs();
    getBitconValue();
}

const styleParagraphs = () => {
    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(paragraph => {
        if (!paragraph) return;

        paragraph.style.margin = "10px";
        paragraph.style.textAlign = "center";
        paragraph.style.fontSize = "25px";
        paragraph.style.fontWeight = "bold";
    });
}

const getBitconValue = () => {
    let urlBitcon = "https://blockchain.info/ticker";
    fetch(urlBitcon)
        .then(response => response.json())
        .then(responseJson => {
            if (!responseJson || !responseJson.BRL || !responseJson.BRL.buy) return;
            let bitcoinValue = responseJson.BRL.buy;

            // Formatar
            bitcoinValue = Intl.NumberFormat('pt-br',
                { style: 'currency', currency: 'BRL' }
            ).format(bitcoinValue);

            let bitcoinValueText = document.querySelector("#bitcoinValue");
            bitcoinValueText.innerHTML = bitcoinValue;
        });
}

// atualizar a cada 30ms
setInterval(getBitconValue(), 30000);

