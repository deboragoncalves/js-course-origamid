import addLinksMenu from './modules/links-navbar.js';
import addAltImg from './modules/alt-images.js';
import showCompetitions from './modules/show-competitions.js';
import getQuestions from './modules/show-questions.js';
import modalLogin from './modules/modal-login.js';
import mapTooltip from './modules/map-tooltip.js';
import dropdownMenu from './modules/dropdown-menu.js';


window.onload = () => {
    addLinksMenu();
    addAltImg();
    showCompetitions();
    getQuestions();
    modalLogin();
    mapTooltip();
    dropdownMenu();
};

/* TODO: Adicionar imagens às competições
TODO: Responsivo - matchMedia
TODO: Funcionalidade login */