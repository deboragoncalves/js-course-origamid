/*
Exercício: Utilizando a API https://viacep.com.br/ws/${CEP}/json/
crie um formulário onde o usuário pode digitar o cep
e o endereço completo é retornado ao clicar em buscar
*/

// CEP: input numérico, não aceita espaços e alfanuméricos
// Atributo maxlength não funciona para input number
// API ViaCep: https://viacep.com.br/ . CEP válido: 8 digitos

let formCep = document.querySelector("#formCep");
let messageInvalidCep = document.querySelector("#invalidCep");
let cepValue;

const changeCep = e => {
    cepValue = e.target.value;
}

const submitCep = e => {
    // evitar reload ao clicar
    e.preventDefault();

    // Validar
    let validCep = validateCep();
    if (!validCep) return;

    messageInvalidCep.innerHTML = "";
    console.log(cepValue.length);

    let urlViacep = `https://viacep.com.br/ws/${cepValue}/json`;

    // Requisição
    // Fetch: Transformar em json e no próximo then exibir retorno
    fetch(urlViacep)
        .then(response => response.json())
        .then(responseJson => {
            // Verificar erro
            // Contains key = hasOwnProperty
            if (responseJson.hasOwnProperty("erro")) {
                messageInvalidCep.innerHTML = "CEP não encontrado. Tente novamente.";
                messageInvalidCep.style.display = "block";
                return;
            }

            messageInvalidCep.innerHTML = "";
            messageInvalidCep.style.display = "none";
            showAddress(responseJson);
        })
        .catch(error => console.log(error));
}

const showAddress = dataAddress => {
    let containerAddress = document.querySelector("#containerAddress");
    containerAddress.innerText = "";

    console.log(containerAddress);
    if (!dataAddress) return;

    let cepText = document.createElement("p");
    cepText.innerHTML = `CEP: ${dataAddress.cep}`;

    let streetText = document.createElement("p");
    streetText.innerHTML = `Rua: ${dataAddress.logradouro}`;

    let complementText;
    if (dataAddress.complemento.length > 0) {
        complementText = document.createElement("p");
        complementText.innerHTML = `Complemento: ${dataAddress.complemento}`;
    } 
    
    let districtText = document.createElement("p");
    districtText.innerHTML = `Bairro: ${dataAddress.bairro}`;

    let cityStateText = document.createElement("p");
    cityStateText.innerHTML = `Cidade: ${dataAddress.localidade}, Estado: ${dataAddress.uf}`

    containerAddress.appendChild(cepText);
    containerAddress.appendChild(streetText);

    dataAddress.complemento.length > 0 ? containerAddress.appendChild(complementText) : null;

    containerAddress.appendChild(districtText);
    containerAddress.appendChild(cityStateText);
}

const validateCep = () => {
    let validCep = true;

    if (!cepValue) {
        messageInvalidCep.innerHTML = "CEP inválido. Tente novamente.";
        messageInvalidCep.style.display = "block";
        validCep = false;
    } else if (cepValue.length !== 8) {
        messageInvalidCep.innerHTML = "CEP inválido. Tente novamente.";
        messageInvalidCep.style.display = "block";
        validCep = false;
    }

    return validCep;
}

formCep.addEventListener("submit", submitCep);
