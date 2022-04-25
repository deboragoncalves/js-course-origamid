import addLinksMenu from './modules/links-navbar.js';
import addAltImg from './modules/alt-images.js';
import showCompetitions from './modules/show-competitions.js';
import getQuestions from './modules/show-questions.js';

window.onload = () => {
    addLinksMenu();
    addAltImg();
    showCompetitions();
    getQuestions();
};

// TODO: Adicionar imagens às competições
// TODO: Responsivo - matchMedia