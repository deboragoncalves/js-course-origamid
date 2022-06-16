// Exercício 01: Extraia o backgroundColor, color e margin do btn

/* 

- com element.style consigo setar o estilo e retornar depois,
mas não consigo pegar o estilo do elemento quando é definido pelo HTML

- com objeto window.getComputedStyle, passando o elemento como parâmetro, retorna um
objeto com todos os estilos definidos pelo browser

- retornam os valores padrões do browser e aqueles estilos setados pelo usuário

*/

const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

// Usar destructuring
const { backgroundColor: backgroundButton, color: colorButton, margin: marginButton } = btnStyles;

console.log("Exercício 01: ");
console.log(`Background - Botão: ${backgroundButton}`);
console.log(`Color - Botão: ${colorButton}`);
console.log(`Margin - Botão: ${marginButton}`);

// Exercício 02: Troque os valores das variáveis abaixo

let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

console.log("Exercício 02: ");
console.log("Início: ");
console.log("Ativo: " + cursoAtivo);
console.log("Inativo: " + cursoInativo);

// Usando destructuring
// Criar array com as variáveis e depois trocar a ordem dos elementos

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log("Trocando valores das variáveis: ");
console.log("Ativo: " + cursoAtivo);
console.log("Inativo: " + cursoInativo);


/* Resposta 02 - Exercício 02: Criar variável temp com valor Javascript

let temp = "JavaScript";
cursoAtivo = cursoInativo;
cursoInativo = temp;

console.log("Trocando valores das variáveis: ");
console.log("Ativo: " + cursoAtivo);
console.log("Inativo: " + cursoInativo); */

// Exercício 03:  Corrija o erro abaixo

const cachorro = {
 nome: 'Bob',
 raca: 'Labrador',
 cor: 'Amarelo'
}

/* Explicação: ao renomear a variável, tendo um nome diferente da chave do objeto cachorro,
entre as chaves, deve primeiro ter o nome da chave, seguido por :, e o novo nome;

Nesse caso está errado porque está invertido (novoNome: chaveObjetoCachorro)

const {bobCor: cor} = cachorro;
*/

// Correção
const { cor: corBob } = cachorro;
console.log(`Exercício 03 - Cor cachorro: ${corBob}`);
