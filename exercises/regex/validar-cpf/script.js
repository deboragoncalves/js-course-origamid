import ValidateCpf from './ValidateCpf.js';

let userCpf;

let inputCpf = document.querySelector("#cpf");

inputCpf.addEventListener("change", (event) => {
    userCpf = event.target.value;

    const validateCpf = new ValidateCpf(userCpf);
    console.log(validateCpf.formatCpf());
});