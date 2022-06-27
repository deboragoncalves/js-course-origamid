import ValidateCpf from './ValidateCpf.js';

let userCpf;

let inputCpf = document.querySelector("#cpf");

inputCpf.addEventListener("change", (event) => {
    userCpf = event.target.value;

    const classValidateCpf = new ValidateCpf(userCpf);
    const validCpf = classValidateCpf.validateCpf();

    validCpf ? addGreenBorder() : addRedBorder();
});

const addGreenBorder = () => {
    inputCpf.classList.add("border-green");
    inputCpf.classList.remove("border-red");

    let spanInvalidCpf = document.querySelector("span");

    spanInvalidCpf ? spanInvalidCpf.classList.remove("show") : null;
}

const addRedBorder = () => {
    inputCpf.classList.remove("border-green");
    inputCpf.classList.add("border-red");

    let spanInvalidCpf = document.createElement("span");
    spanInvalidCpf.innerText = "CPF inválido";
    spanInvalidCpf.classList.add("span-invalid-cpf");
    spanInvalidCpf.classList.add("show");

    let containerInputCpf = document.querySelector(".container");
    containerInputCpf.appendChild(spanInvalidCpf);
}