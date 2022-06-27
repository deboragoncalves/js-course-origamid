import ValidateCpf from './ValidateCpf.js';

let userCpf;

let inputCpf = document.querySelector("#cpf");

inputCpf.addEventListener("change", (event) => {
    userCpf = event.target.value;

    const classValidateCpf = new ValidateCpf(userCpf);
    const validCpf = classValidateCpf.validateCpf();

    let cpf = validCpf ? classValidateCpf.formatCpf() : "CPF inválido";
    console.log(cpf);
});