// Exercício 01: Crie 4 li's na página. Utilizando o for...of, adicione uma classe a cada li

// Criar li's dentro do body

const createLi = () => {
    let body = document.querySelector("body");

    let list = document.createElement("ul");
    let firstItemList = document.createElement("li");
    firstItemList.innerHTML = "Linha 1";

    let secondItemList = document.createElement("li");
    secondItemList.innerHTML = "Linha 2";

    let thirdItemList = document.createElement("li");
    thirdItemList.innerHTML = "Linha 3";

    let fourthItemList = document.createElement("li");
    fourthItemList.innerHTML = "Linha 4";

    list.appendChild(firstItemList);
    list.appendChild(secondItemList);
    list.appendChild(thirdItemList);
    list.appendChild(fourthItemList);

    body.appendChild(list);

    console.log("Criar 4 li's dinamicamente: ");
    console.log(body);
}

const addFontClass = () => {
    let listLi = document.querySelectorAll("li");

    for (let itemLi of listLi) {
        if (!itemLi) return;

        itemLi.classList.add("font-li");
    }

    console.log("Adicionar classe para alterar fonte de cada linha: ");
    console.log(listLi);
}

console.log("Exercício 01: ");
createLi();
addFontClass();

// Exercício 02: Utilize o for...in para listar todos as propriedades e valores do objeto window

const showKeyValueWindow = () => {
    for (let key in window) {
        console.log(`Propriedade: ${key}, Valor: ${window[key]}`);
    }
}

console.log("Exercício 03 - Exibir propriedades e valores do objeto window: ");
showKeyValueWindow();