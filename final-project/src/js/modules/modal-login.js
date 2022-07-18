class ModalLogin {
    // This faz referência à propria classe
    // eslint-disable-next-line max-len
    constructor(container, buttonOpen, buttonClose, buttonSubmit, emailValue, passwordValue, errorField) {
        // [data-modal="container"]
        this.elementModalLogin = document.querySelector(container);
        // [data-navbar="login"]
        this.buttonOpenModal = document.querySelector(buttonOpen);
        // [data-modal="close"]
        this.buttonCloseModal = document.querySelector(buttonClose);
        this.buttonSubmitLogin = document.querySelector(buttonSubmit);
        this.email = document.querySelector(emailValue);
        this.password = document.querySelector(passwordValue);
        this.errorMessage = document.querySelector(errorField);
    }

    // Toggle - abre modal caso esteja fechado e vice versa
    toggleModalLogin = () => {
        this.elementModalLogin.classList.toggle('modal-ativo');
    };

    clickOutsideModal = (event) => {
        // event.target = elemento clicado
        // se o elemento clicado for o container do modal, toggle
        const idElementClick = event.target.id;

        if (idElementClick === 'modal-login') {
            this.toggleModalLogin();
        }
    };

    changeEmail = (e) => {
        this.email.value = e.target.value;
    };

    changePassword = (e) => {
        this.password.value = e.target.value;
    };

    validateFieldsLogin = () => {
        let emailValue = this.email.value;
        let passwordValue = this.password.value;

        // Email - tirar espaços em branco, validar @ e .com
        emailValue = emailValue.replace(/[ ]/g, '');

        let validFields = true;

        if (!emailValue) {
            this.errorMessage.innerHTML = 'Email inválido';
            this.errorMessage.style.display = 'block';
            validFields = false;
            return validFields;
        }

        this.errorMessage.innerHTML = 'Email inválido';

        if (!passwordValue) {
            this.errorMessage.innerHTML = 'Senha inválida';
            this.errorMessage.style.display = 'block';
            validFields = false;
            return validFields;
        }

        this.errorMessage.innerHTML = '';

        // [\w.-]
        // \w (todos os caracteres, numeros de 0 a 9 e underline)
        // + seleciona um ou mais caracteres
        // \. escapa o ponto, selecionando apenas esse caractere
        // g - procura todos os caracteres e não somente o primeiro que aparecer
        // i - ignora case sensitive, diferente entre M e m
        const regexEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

        if (!emailValue.match(regexEmail)) {
            this.errorMessage.innerHTML = 'Email inválido';
            this.errorMessage.style.display = 'block';
            validFields = false;
            return validFields;
        }

        this.errorMessage.innerHTML = '';

        // Senha - mínimo 6 - tirar espacos em branco
        passwordValue = passwordValue.replace(/[ ]/g, '');

        if (passwordValue.length < 6) {
            this.errorMessage.innerHTML = 'Senha inválida';
            this.errorMessage.style.display = 'block';
            validFields = false;
            return validFields;
        }

        this.errorMessage.innerHTML = '';

        validFields = true;
        return validFields;
    };

    submitLoginEvent = () => {
        const validFields = this.validateFieldsLogin();
        console.log(validFields);

        if (validFields) this.toggleModalLogin();
    };

    initModalLogin = () => {
        if (!this.buttonOpenModal || !this.buttonCloseModal || !this.elementModalLogin
            || !this.buttonSubmitLogin) return;

        // Adiciona evento para abrir/fechar modal
        this.buttonOpenModal.addEventListener('click', this.toggleModalLogin);
        this.buttonCloseModal.addEventListener('click', this.toggleModalLogin);

        // click container modal
        this.elementModalLogin.addEventListener('click', this.clickOutsideModal);

        // onChange email
        this.email.addEventListener('change', (e) => {
            this.changeEmail(e);
        });

        // onChange password
        this.password.addEventListener('change', (e) => {
            this.changePassword(e);
        });

        // click submit login
        this.buttonSubmitLogin.addEventListener('click', this.submitLoginEvent);

        /* Retornar sempre a classe no método init, assim tenho acesso às propriedades
        e métodos do modal ao instanciar a classe */
        return this;
    };
}
export default ModalLogin;
