// Exercício 01: Reescreva a função utilizando valores iniciais de parâmetros com ES6

/* Explicação - duas formas de passar valores default para um parâmetro de função:

- 1a: utilizando uma expressão. caso valor seja undefined/null, vai ser atribuido o valor default

background = background || 'blue';

- 2a: surgiu com o ES6. ao declarar a função, atribui-se um valor default através do =

const novaFuncao(primeiroArgumento = 01) {}

*/
function createButton(background = "blue", color = "red") {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}

const redButton = createButton();
console.log("Exercício 01 - Botão criado com cor vermelha e backgrond azul como valores padrões: ");
console.log(redButton);

// Exercício 02: Utilize o método push para inserir as frutas ao final de comidas.

const frutas = ['Banana', 'Uva', 'Morango'];
let comidas = ['Pizza', 'Batata'];

// Spread
console.log("Exercício 02 - Utilizar spread, unindo arrays frutas e comidas: ");
console.log("Início: ");
console.log(`Frutas: ${frutas}`);
console.log(`Comidas: ${comidas}`);

comidas = [...comidas, ...frutas];
console.log("Array Comidas após spread: ");
console.log(comidas);

// ou usando push com comidas.push(...frutas);