// Exercício 01: Crie uma função que verifique corretamente o tipo de dado

// Se utilizar typeof, vai sempre retornar object (string, array, etc)

const arrayPeople = [
    {
        name: "Débora",
        age: 22
    },
    {
        name: "Sandro",
        age: 20
    }
]

const typeofData = data => {
    if (data) {
        // Call para chamar a função do prototype
        let typeData = Object.prototype.toString.call(data);
        console.log("Tipo objeto: " + typeData);
        return typeData;
    }
}

console.log("Exercício 01: ");
typeofData(arrayPeople);

// Exercício 02: Crie um objeto quadrado com a propriedade lados e torne ela imutável

// Object.defineProperties: 1o arg: o objeto a ser criado. 2o arg: objeto com as propriedades a serem criadas
// Cada propriedade a ser criada no objeto 'pai' é um objeto tb
// Esse novo obt tem como propriedades value e configurable. se config for false, não permite editar nem deletar prop

const square = {};
const side = 4;

const createPropertiesSquare = (square, side) => {
    if (square && side) {
        Object.defineProperties(square, {
            side: {
                value: side,
                configurable: false
            }
        });
    
        console.log("Objeto - Quadrado: ");
        console.log(square);
    }
};

console.log("Exercício 02: ");
createPropertiesSquare(square, side);

const setSide = square => {
    if (square) {
        square.side = 8;
        console.log("Setar lado para valor 8 - Quadrado: ");
        console.log(square);
    }
}

setSide(square);

const deleteSide = square => {
    if (square) {
        delete square.side;
        console.log("Deletar prop side - Quadrado: ");
        console.log(square);
    }
}

deleteSide(square);

// Exercício 03: Previna qualquer mudança no objeto abaixo

const stylesObject = {
    width: 800,
    height: 600,
    background: '#333'
}

// Object.freeze: impede deletar e setar
const fixedStylesObject = stylesObject => {
    if (stylesObject) {
        Object.freeze(stylesObject);
    }
};

fixedStylesObject(stylesObject);

const setStyles = stylesObject => {
    if (stylesObject) {
        console.log("Mudar altura para 1000 - Objeto style: ");
        stylesObject.height = 100;
        console.log(stylesObject);
    }
}

setStyles(stylesObject);

const deleteStyles = stylesObject => {
    if (stylesObject) {
        delete stylesObject.side;
        console.log("Deletar prop width - Objeto style: ");
        console.log(stylesObject);
    }
}

deleteStyles(stylesObject);
   
// Exercício 4: Liste o nome de todas as propriedades do protótipo de String e Array

// Object.getOwnPropertyNames

const getDataProperties = data => {
    if (data) {
        let dataProperties = Object.getOwnPropertyNames(data);
        console.log(dataProperties);
        return dataProperties;
    }
}

console.log("Exercício 04: ");
console.log("Propriedades String: ");
getDataProperties(String);

console.log("Propriedades Array: ");
getDataProperties(Array);