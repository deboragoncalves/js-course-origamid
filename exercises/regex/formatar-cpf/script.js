const cpfsList = document.querySelectorAll(".cpf li");

const getElementText = elements => {
    if (!elements) return;

    const arrayElements = Array.from(elements);

    // Map - retorna uma nova lista com cada item que retorna da função
    return arrayElements.map(element => element.innerText);
}

const clearCpf = cpf => {
    /* Substituir todos os ., espaços ( ) e - por ""
    Duas maneiras de fazer a regex: 
    
    1) /[ .,]/g (flag g - pega todos os elementos que aparecem na expressão)
    
    2) /\D/g (\d - retorna todos os números que possuem na expressão. \D é o contrário, pega tudo o que não é número, 
    podendo ser espaço, caractere, letras, etc.)

    */
    
    if (!cpf) return;

    cpf = cpf.replace(/\D/g, "");
    return cpf;
}

const formatCpf = cpf => {
    /* 
    
    - Recebe como argumento um cpf apenas com dígitos
    - Selecionar três primeiros dígitos: \d{3}
    - Usar grupos de captura para facilitar no replace: (\d{3})
    - O índice 0 representa toda a expressão, $0, sendo $1 o primeiro grupo de captura, etc.
    - Para usar os grupos de captura com $, colocar entre aspas no 2o arg do replace

    */
    
    if (!cpf) return;
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    return cpf;
}

const createListFormatedCpfs = () => {
    const listCpfs = getElementText(cpfsList);

    const listCleanCpfs = listCpfs.map(cpf => clearCpf(cpf));
    const listFormatedCpfs = listCleanCpfs.map(cpf => formatCpf(cpf));

    createSectionFormatedCpf(listFormatedCpfs);
}

const createSectionFormatedCpf = cpfs => {
    const titleCpfFormated = document.createElement("h2");
    titleCpfFormated.innerHTML = "CPFs formatados: ";

    const listFormatedCpfs = document.createElement("ul");
    
    cpfs.forEach(cpf => {
        const cpfFormated = document.createElement("li");
        cpfFormated.innerText = cpf;
        listFormatedCpfs.appendChild(cpfFormated);
    })

    const body = document.querySelector("body");

    body.appendChild(titleCpfFormated);
    body.appendChild(listFormatedCpfs);
}

createListFormatedCpfs();
