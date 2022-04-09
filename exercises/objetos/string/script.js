/* Exercício 01: Utilizando o foreach no array abaixo, some os valores da taxa
e os valores de recebimento. */

const transactions = [
    {
        descricao: "Taxa do Pão",
        valor: "R$ 39",
    },
    {
        descricao: "Taxa do Mercado",
        valor: "R$ 129",
    },
    {
        descricao: "Recebimento de Cliente",
        valor: "R$ 99",
    },
    {
        descricao: "Taxa do Banco",
        valor: "R$ 129",
    },
    {
        descricao: "Recebimento de Cliente",
        valor: "R$ 49",
    },
];

const totalTransactionsValue = (transactions) => {
    console.log("Exercício 01: ");

    let sumTaxValues = 0;
    let sumReceiptValues = 0;
    let totalTaxReceipt = 0;

    transactions.forEach((transaction) => {
        let transactionDescription = transaction.descricao.toUpperCase();
        let transactionValue = transaction.valor;

        if (transactionValue.length > 0) {
            transactionValue = transactionValue.replace("R$ ", "");
            transactionValue = parseFloat(transactionValue);

            // Posso usar o parseFloat ou +variavelString. + antes da string transforma para number

            console.log(
                `Valor da transação - ${transactionDescription}: R$ ${transactionValue}`
            );

            if (transactionDescription.startsWith("TAXA")) {
                sumTaxValues += transactionValue;
            } else if (transactionDescription.startsWith("RECEBIMENTO")) {
                sumReceiptValues += transactionValue;
            }
        }

    });

    totalTaxReceipt = sumReceiptValues + sumTaxValues;

    console.log("Total de taxas: R$ " + sumTaxValues);
    console.log("Total de recebimentos: R$ " + sumReceiptValues);
    console.log("Total de taxas e recebimentos: R$ " + totalTaxReceipt);
};

totalTransactionsValue(transactions);

// Exercício 02: Retorne um array com a lista abaixo

const transportations = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportations = transportations => {
    let arrayTransportations = transportations.split(";");
    console.log("Exercício 02: ");
    console.log(arrayTransportations);
    return arrayTransportations;
}

arrayTransportations(transportations);

// Exercício 03: Substitua todos os span's por a's

const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

const replaceHtmlText = (htmlText) => {
    console.log("Exercício 03: ");

    // 1 - Replace
    let htmlLinks = htmlText.replaceAll("span", "a");

    // 2 - Split, passando o valor que se quer substituir
    let arrayHtml = htmlText.split("span");
    // Join - unir todos os elementos da lista, adicionando X - argumento no final de cada item, 
    // retornando uma string
    let htmlLinks2 = arrayHtml.join("a");
    console.log(htmlLinks2);

    return htmlLinks2;
}

replaceHtmlText(html);

// Exercício 04: Retorne o último caractere da frase
const quote = "Melhor do ano!";

const lastCharacter = quote => {
    console.log("Exercício 04: ");
    let lastCharacter = quote[quote.length - 1];
    console.log(lastCharacter);
    return lastCharacter;

    // string.slice(-1);
}

lastCharacter(quote);

// Exercício 05: Retorne quantas taxas possuem no array abaixo
const arrayTransactions = ["Taxa do Banco", "    TAXA DO PÃO", "   taxa do mercado", "depósito bancário", "TARIFA especial"];

const totalTax = arrayTransactions => {
    console.log("Exercício 05");
    let countTax = 0;
    arrayTransactions.forEach(transaction => {

        let nameTransaction = transaction;
        if (nameTransaction.length > 0) {
            // Retirar os espaços do início e do fim
            nameTransaction = nameTransaction.trim();
            nameTransaction = nameTransaction.toUpperCase();

            if (nameTransaction.startsWith("TAXA")) {
                console.log("Nome da transação: " + nameTransaction);
                countTax++;
            }
        }
    });

    console.log("Total de Taxas: " + countTax);
}

totalTax(arrayTransactions);