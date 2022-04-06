// Exercício 1: Criar uma função construtora Pessoa, contendo nome, sobrenome e idade

function Pessoa(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Exercício 2: Criar um método no protótipo que retorne o nome completo da pessoa

Pessoa.prototype.fullName = (firstName, lastName) => {
    if (!firstName || !lastName) return;

    let fullName = `${firstName} ${lastName}`;

    let textFullName = document.querySelector("#fullName");
    textFullName.innerHTML = fullName;
    
    return fullName;
}

let firstName = "Débora";
let lastName = "Gonçalves";

const Debora = new Pessoa(firstName, lastName, 22);
Debora.fullName(firstName, lastName);

// Objeto que instancia a função construtora tem acesso aos métodos/propriedades do protótipo

// Exercício 3: Listar os métodos acessados por dados criados com NodeList, HTMLConnection, Document
console.log("Métodos - NodeList: ");
console.log(Object.getOwnPropertyNames(NodeList.prototype));

console.log("Métodos - HTML Collection: ");
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

console.log("Métodos - Document: ");
console.log(Object.getOwnPropertyNames(Document.prototype));

// document.querySelector, document.querySelectorAll - retornam uma NodeList
// document.getElementsByClassName - retornam uma HTMLCollection

// propriedade prototype retorna todos os métodos e propriedades de um tipo de dado
// o método getOwnPropertyNames retorna somente os nomes desses métodos/props

/* Exercício 4: Listar os construtores dos dados abaixo:

const li = document.querySelector("li");
li;
li.click;
li.innerHTML;
li.value;
li.hidden;
li.offsetLeft;
li.click();
*/

// Construtor: nomeVariavel.constructor

const li = document.querySelector("li");
let textConstructorLi = document.querySelector("#constructor-li");
textConstructorLi.innerHTML = li.constructor;

let click = li.click;
let textClickConstrutor = document.querySelector("#constructor-click");
textClickConstrutor.innerHTML = click.constructor;

// InnerHTML retorna uma string (construtor de string)
let text = li.innerHTML;
let textConstructor = document.querySelector("#constructor-text");
textConstructor.innerHTML = text.constructor;

let valueLi = li.value;
let textValueConstructor = document.querySelector("#constructor-li-value");
textValueConstructor.innerHTML = valueLi.constructor;

// Propriedade hidden retorna true ou false (construtor boolean)
let hiddenLi = li.hidden;
let textHiddenConstructor = document.querySelector("#constructor-li-hidden");
textHiddenConstructor.innerHTML = hiddenLi.constructor;

let offsetLi = li.offsetLeft;
let textOffsetConstructor = document.querySelector("#constructor-li-offset");
textOffsetConstructor.innerHTML = offsetLi.constructor;

let clickLi = li.click();
// a variável clickLi retorna undefined

/* Exercício 5: Qual o construtor do dado abaixo:
li.hidden.constructor.name */

// Propriedade name retorna uma string

let stringConstructor = li.hidden.constructor.name.constructor;
let textStringConstructor = document.querySelector("#string-constructor");
textStringConstructor.innerHTML = stringConstructor;
