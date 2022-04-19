/*
Exercício 01: 
- Remova o primeiro valor do array comidas e coloque em uma variável
- Remova o último valor do array comidas e coloque em uma variável
- Adicione o item "Arroz" ao final do array
- Adicione os itens "Peixe" e "Batata" no inicio do array
*/

const foods = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const firstFood = foods => foods.shift();
const lastFood = foods => foods.pop();
const addRice = foods => foods.push("Arroz");
const addFishPotatoes = foods => foods.unshift("Peixe", "Batata");

const exercise01 = foods => {
    console.log("Exercício 1 - Comidas: ");
    console.log("Array inicial: " + foods)
    let firstItem = firstFood(foods);
    console.log("Primeiro item - Comidas: " + firstItem);

    const lastItem = lastFood(foods);
    console.log("Último item - Comidas: " + lastItem);

    addRice(foods);

    // Adicionar inicio - unshift - aceita mais de um parâmetro
    addFishPotatoes(foods);

    console.log("Array final: " + foods);
}

exercise01(foods);

/*
Exercício 2:
- Ordene o array em ordem alfabética
- Inverta a ordem dos estudantes
- Verifique se Joana faz parte dos estudantes
- Verifique se Juliana faz parte dos estudantes
*/

const students = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

const sortArray = students => students.sort();
const reverseArray = students => students.reverse();
const isJoanaStudent = students => students.includes("Joana");
const isJulianaStudent = students => students.includes("Juliana");

const exercise02 = students => {
    console.log("Exercício 2 - Estudantes: ");
    console.log("Array inicial: " + students);

    const sortingArray = sortArray(students);
    console.log("Ordenação: " + sortingArray);

    const reversingArray = reverseArray(students);
    console.log("Reverse: " + reversingArray);

    const joanaStudent = isJoanaStudent(students);
    console.log("Joana é uma estudante? " + joanaStudent);

    const julianaStudent = isJulianaStudent(students);
    console.log("Juliana é uma estudante? " + julianaStudent);
}

exercise02(students);

/* 
Exercício 03:
- Substitua section por ul e div com li, utilizando split e join
*/

let html = `
<section>
    <div>Sobre</div>
    <div>Produtos</div> 
    <div>Contatos</div>
</section>
`;

const replaceSectionDiv = html => {
    console.log("Exercício 3: ");
    console.log("HTML inicial: " + html);

    // Fazer split usando a string que quer substituir
    let arrayHtmlSection = html.split("section");

    // Join utilizando nova string
    let replaceSection = arrayHtmlSection.join("ul");

    let arrayHtmlDiv = replaceSection.split("div");
    let replaceDiv = arrayHtmlDiv.join("li");
    console.log("HTML final: " + replaceDiv);
}

replaceSectionDiv(html);

/* 
Exercício 04:
- Remova o último carro, mas antes de remover salve o array original em outra variável
*/

const cars = ['Ford', 'Fiat', 'VW', 'Honda'];

const removeLastItem = cars => {
    console.log("Exercício 04: ");

    // Se fizer originalCars = cars, vai apontar para o array e modificar o valor tb
    // Poderia fazer cars.slice() também
    let originalCars = Array.from(cars);
    console.log("Array original - Carros: " + originalCars);

    cars.pop();
    console.log("Array original - Carros: " + originalCars);
    console.log("Array modificado: " + cars);
}

removeLastItem(cars);