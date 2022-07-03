class ModalLogin {
    // This faz referência à propria classe
    constructor(container, buttonOpen, buttonClose) {
        // [data-modal="container"]
        this.elementModalLogin = document.querySelector(container);
        // [data-navbar="login"]
        this.buttonOpenModal = document.querySelector(buttonOpen);
        // [data-modal="close"]
        this.buttonCloseModal = document.querySelector(buttonClose);
    }

    toggleModalLogin = () => {
        this.elementModalLogin.classList.toggle('modal-ativo');
    };

    clickOutsideModal = (event) => {
        // event.target = elemento clicado
        // se o elemento clicado for o container do modal, fechar
        const idElementClick = event.target.id;

        if (idElementClick === 'modal-login') {
            this.toggleModalLogin();
        }
    };

    initModalLogin = () => {
        this.buttonOpenModal.addEventListener('click', this.toggleModalLogin);
        this.buttonCloseModal.addEventListener('click', this.toggleModalLogin);

        // click container modal
        this.elementModalLogin.addEventListener('click', this.clickOutsideModal);
    };
}
export default ModalLogin;
