/* Exercício 01: Remova o erro

priceNumber('R$ 99,99');
const priceNumber = n => +n.replace('R$', '').replace(',',
'.'); 

*/

/*

Explicação - Exercício 01: Por ser uma function expression (declarada através da criação uma variável),
deve-se primeiro declarar a função e depois chamar.

Caso a opção seja por function declaration, pode chamar antes de declarar.

*/

// Resposta exercício 01, usando function declaration:

console.log("Exercício 01: ")
console.log(priceNumber('R$ 99,99'));
function priceNumber(n) {
    // Substituir o R$ por vazio e , por . - formato americano
    // + transformar string em number
    return +n.replace('R$', '').replace(',', '.');
}

// Exercício 02: Crie uma IIFE e isole o escopo de qualquer código JS.

/* Explicação - Exercício:
IIFE: função auto invocável, possuindo escopo local, ou seja, 
as variáveis declaradas dentro dela, são inacessíveis em qualquer outra parte do código.

Pode ser usada com arrow function

É uma expressão, deve iniciar e finalizar com ()

*/

(
    function fullName(firstName, lastName) {
        console.log("Exercício 02:");
        console.log(`Nome completo: ${firstName} ${lastName}`);
    }("Débora", "Silva")
)

// Exercício 03: Como podemos utilizar a função abaixo.

/* Resposta: Pode-se utilizar passando como parâmetro da função active, uma outra função 
que não tenha parâmetros. Assim que essa função for enviada como param, será chamada em seguida,
pois será o retorno da function active
*/

const active = callback => callback();

let firstName = "Débora";
let lastName = "Silva";

function fullName() {
    console.log("Exercício 03:");
    console.log(`Nome completo: ${firstName} ${lastName}`);
}

active(fullName);