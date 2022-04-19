// Exercício 01: Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso

const getObjectCourses = () => {
    console.log("Exercício 01: ");
    let courses = document.querySelectorAll(".curso");

    // Transformar em array
    let arrayCourses = Array.from(courses);

    // Map - retorna um array com todos os itens que retornam nas iterações

    let objectCourses = arrayCourses.map((item, index) => {
        // Item precisa ser passado por parâmetro 

        let course = {}
        let title = document.querySelectorAll(".curso h1")[index];
            
        if (title) {
            // Se for !null e undefined, faz o spread e adiciona no objeto
            course = {...course, title: title.innerText}
        };

        let description = document.querySelectorAll(".curso p")[index];

        if (description) {
            course = {...course, description: description.innerText}
        }

        let classes = document.querySelectorAll(".aulas")[index];

        if (classes) {
            course = {...course, classes: classes.innerText}
        }

        let hours = document.querySelectorAll(".horas")[index];

        if (hours) {
            course = {...course, hours: hours.innerText}
        }

        console.log("Curso: ");
        console.log(course);

        return course;
    })

    console.log("Cursos: ");
    console.log(objectCourses);
}

getObjectCourses();

// Exercício 02: Retorne uma lista com os números maiores que 100

const numbers = [3, 44, 333, 23, 122, 322, 33];

// Filter: retorna um array com todos os itens que satisfazem a condição de retorno
const upperTen = numbers => {
    console.log("Exercício 02: ");
    let arrayUpperTen = numbers.filter(number => number > 100);
    console.log(arrayUpperTen);
    return arrayUpperTen;
}

upperTen(numbers);

// Exercício 03: Verifique se Baixo faz parte da lista de instrumentos e retorne true

const instruments = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

// Some: retorna true/false caso pelo menos 1 dos itens satisfaça a condição de retorna

const arrayIncludeInstrument = instruments => {
    let arrayIncludeBaixo = instruments.some(instrument => {
        if (instrument) {
            instrument = instrument.toUpperCase();
            return instrument == "BAIXO";
        }
    });

    console.log("Exercício 03: ");
    console.log(arrayIncludeBaixo);
}

arrayIncludeInstrument(instruments);

// Exercício 04: Retorne o valor total das compras

const items = [
    {
        item: 'Banana',
        price: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        price: 'R$ 2,99'
    },
    {
        item: 'Carne',
        price: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        price: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        price: 'R$ 10,60'
    }
]

// Retornar array apenas com os preços

let totalCosts = 0;

const totalCostsItems = items => {
    if (items) {
        totalCosts = items.reduce((itemAnterior, itemAtual) => {
            if (itemAtual.price) {
                // Para número, colocar o + na frente
                // Iniciar acumulador com 0, somar o preço a cada iteração
                let price = +itemAtual.price.replaceAll("R$ ", "").replaceAll(",", ".");
                return itemAnterior + price;
            }
        }, 0)
    }
}

totalCostsItems(items);
console.log("Exercício 04: R$ " + totalCosts);