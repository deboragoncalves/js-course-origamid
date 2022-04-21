/* Exercício 01: 
Retorne a soma total de caracteres dos parágrafos utilizando reduce */

const lengthParagraphs01 = () => {
    console.log("Exercício 01.01: ");

    let paragraphs = document.querySelectorAll("section p");
    let arrayParagraphs = Array.from(paragraphs);

    let totalLengthParagraphs = arrayParagraphs.reduce((lastParagraph, paragraph) => {
        let textCurrentParagraph = paragraph.innerText;
        let lengthParagraphs = lastParagraph + textCurrentParagraph.length;
        console.log("Texto atual: " + textCurrentParagraph);
        console.log("Tamanho texto atual: " + lengthParagraphs);
        return lengthParagraphs;
    }, 0);

    console.log("Tamanho total - Textos: " + totalLengthParagraphs);
    return totalLengthParagraphs;
};  

let lengthParagraphs02 = () => {
    console.log("Exercício 01.02: ");

    let paragraphs = document.querySelectorAll("section p");

    /* 
    
        - O array que retorna do querySelectorAll é uma nodeList, que não possui os métodos do construtor Array (filter, reduce...)
        - Para usar o reduce, ou se transforma em Array, ou se usa o método reduce do prototype de Array,
        usando o método call para chamar a função
        - O primeiro argumento do call é o this, que no caso é a nodeList. Dentro do reduce, essa vai ser a referência para o loop
        - O segundo arg é o próprio callback do reduce, com os args acumulador, itemAtual etc.
    
    */
    
    let totalLengthParagraphs = Array.prototype.reduce.call(paragraphs, (lastParagraph, paragraph) => {
        let textCurrentParagraph = paragraph.innerText;
        let lengthParagraphs = lastParagraph + textCurrentParagraph.length;
        console.log("Texto atual: " + textCurrentParagraph);
        return lengthParagraphs;
    }, 0);

    console.log("Tamanho total - Textos: " + totalLengthParagraphs);
    return totalLengthParagraphs;
}

lengthParagraphs01();
// lengthParagraphs02(); // usar call ao invés de array.from

/* Exercício 02: 
Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo. */

const createNewElement = (tagElement, classElement, contentElement) => {
    // Criar novo elemento - createElement recebe como parâmetro uma string do nome do elemento

    let newElement;

    if (tagElement) {
        newElement = document.createElement(tagElement);

        if (classElement) {
            // Adicionar classe
            newElement.classList.add(classElement);
        }

        if (contentElement) {
            newElement.innerHTML = contentElement;
        }
    }

    console.log(newElement);
    return newElement;
}

console.log("Exercício 02: ");
createNewElement("section", "ativo", "Novo conteúdo");

/* Exercício 03: 
Crie uma nova função utilizando a anterior como base. Essa nova função deverá sempre criar h1 com a
classe titulo. Porém o parâmetro conteudo continuará dinâmico */

/* Usar o call para evitar repetir código
Criar um objeto com as chaves tag e class fixas
Na função call, passar novo objeto como this - referência, demais argumentos exigidos */

const createNewElementH1 = () => {
    let newContent = "Hello, world";

    const newElementH1 = {
        tagElement: "h1",
        classElement: "container",
        contentElement: newContent
    }

    console.log("Exercício 03: ");
    createNewElement.call(newElementH1, newElementH1.tagElement, newElementH1.classElement, newElementH1.contentElement);

}

createNewElementH1();
