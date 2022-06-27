const elementModalLogin = document.querySelector('[data-modal="container"]');

const toggleModalLogin = () => {
    elementModalLogin.classList.toggle('modal-ativo');
};

const clickOutsideModal = (event) => {
    // event.target = elemento clicado
    // se o elemento clicado for o container do modal, fechar
    const idElementClick = event.target.id;

    if (idElementClick === 'modal-login') {
        toggleModalLogin();
    }
};

const modalLogin = () => {
    const loginMenu = document.querySelector('[data-navbar="login"]');
    loginMenu.addEventListener('click', toggleModalLogin);

    const buttonCloseModal = document.querySelector('[data-modal="close"');
    buttonCloseModal.addEventListener('click', toggleModalLogin);

    // click container modal
    elementModalLogin.addEventListener('click', clickOutsideModal);
};

export default modalLogin;
