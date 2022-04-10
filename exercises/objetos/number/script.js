// Exercício 01: Retorne um número aleatório entre 1050 e 2000

// Fórmula: Math.floor(Math.random() * (max - min + 1)) + min;
// Math.floor - arredondar para baixo

const randomNumber = () => {
    console.log("Exercício 01: ");
    let minNumber = 1050;
    let maxNumber = 2000.
    let random = Math.round(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    console.log("Número aleatório: " + random);
    return random;
}

randomNumber();

// Exercício 02: Retorne o maior número da lista abaixo:
const numbers = "4, 5, 20, 8, 9";

// 01 - usando sort
const maxNumber = numbers => {
    if (numbers.length > 0) {

        // Array
        let arrayNumbers = numbers.split(", ");

        // Sort - do maior para o menor
        arrayNumbers.sort();

        let maxNumber = arrayNumbers[0];
        console.log("Exercício 02: ");
        console.log("Número maior: " + maxNumber);

        return maxNumber;
    }
}

// 02 - usando spread, espalha os itens do array
const maxNumber2 = numbers => {
    if (numbers.length > 0) {

        // Array
        let arrayNumbers = numbers.split(", ");

        // Spread: passa cada item do array como argumento para a função max: Math.max(arrayNumbers[0], arrayNumbers[1]...)
        let maxNumber = Math.max(...arrayNumbers);
        console.log("Exercício 02: ");
        console.log("Número maior: " + maxNumber);
        return maxNumber;
    }
}

maxNumber2(numbers);

/* Exercício 03: Crie uma função para limpar os preços e retornar os números com centavos arredondados
e depois retorne a soma total */

const prices = ["R$ 59,99", "R$ 100,222", "R$ 230  ", "r$  200"];

const totalPrices = prices => {
    if (prices.length > 0) {

        // Transformar para objeto array - foreach
        prices = Array.from(prices);
        console.log("Exercício 03: ");
        console.log("Preços: ");
        console.log(prices);
        let sumPrices = 0;

        prices.forEach(price => {
            let correctPrice = cleanPrice(price);
            console.log("Preço: R$ " + correctPrice);

            // Soma
            sumPrices += correctPrice;
        });

        // Formatar para BR
        sumPrices = sumPrices.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        console.log("Soma dos preços: " + sumPrices);
    }
}

const cleanPrice = price => {

    if (price) {
        // Retirar espaços e R$
        price = price.toString();
        price = price.trim();
        price = price.toUpperCase();
        price = price.replaceAll("R$", "");

        // Substituir vírgula por ponto
        price = price.replaceAll(",", ".");

        // Transformar pra float
        price = parseFloat(price);

        // Arredondar com toFixed(2), 2 casas
        price = price.toFixed(2);

        // Transformar em float novamente, toFixed() retorna string
        price = parseFloat(price);
        return price;
    }

}

totalPrices(prices);