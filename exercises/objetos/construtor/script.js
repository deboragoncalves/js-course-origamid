// Exercício 01: Transforme o objeto abaixo em uma Construtor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

// Construtor - não funciona com arrow function
function Pessoa(nome, idade) {
  this.nome = nome,
    this.idade = idade,
    this.andar = () => {
      console.log(`${nome} andou`);
    };
};

// Exercício 2: Crie 3 pessoas: João (20 anos), Maria (25 anos), Bruno (15 anos)
const joao = new Pessoa("João", 20);
joao.andar();

const maria = new Pessoa("Maria", 25);
maria.andar();

const bruno = new Pessoa("João", 15);
bruno.andar();

// Exercício 3: Criar uma Construtor Function (Dom) para manipulação de listas
// de elementos do Dom. Deve conter as seguintes propriedades e métodos:

// elements, retorna uma NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClasse(classe), remove a classe de todos os elementos

function Dom(elements) {

  // Elements retorna a lista de elementos, usando querySelector
  this.elements = document.querySelectorAll(elements);
  this.addClass = (nameClass) => this.elements.forEach(element => element.classList.add(nameClass));
  this.removeClass = (nameClass) => this.elements.forEach(element => element.classList.remove(nameClass));
}

const ul = new Dom("ul");
ul.addClass("ativo");

const li = new Dom("li");
li.removeClass("ativo");

