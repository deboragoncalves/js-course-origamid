var elementModalLogin = document.querySelector("[data-modal='container']");

const modalLogin = () => {
    let loginMenu = document.querySelector("[data-navbar='login']");
    loginMenu.addEventListener("click", toggleModalLogin);

    let buttonCloseModal = document.querySelector("[data-modal='close'");
    buttonCloseModal.addEventListener("click", toggleModalLogin);

    // click container modal
    elementModalLogin.addEventListener("click", clickOutsideModal);
};

const toggleModalLogin = () => {
    elementModalLogin.classList.toggle("modal-ativo");
}

const clickOutsideModal = event => {
    // event.target = elemento clicado
    // se o elemento clicado for o container do modal, fechar
    
    let idElementClick = event.target.id;

    if (idElementClick == "modal-login") {
        toggleModalLogin();
    }
}

export default modalLogin;