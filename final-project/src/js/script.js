import addLinksMenu from './modules/links-navbar.js';
import addAltImg from './modules/alt-images.js';
import dropdownMenu from './modules/dropdown-menu.js';
import menuMobile from './modules/menu-mobile.js';
import titles from './modules/titles.js';
import timeOperation from './modules/time-operation.js';
import watchGames from './modules/watch-games.js';
import countDownOlympicGames from './modules/countdown-olympic-games.js';
import ModalLogin from './modules/modal-login.js';
import ShowCompetitions from './modules/show-competitions.js';
import ShowAnswers from './modules/show-answers.js';
import MapTooltip from './modules/map-tooltip.js';

window.onload = () => {
    const showAnswers = new ShowAnswers('.list-questions');
    showAnswers.initShowAnswers();

    const showCompetitions = new ShowCompetitions('.list-competitions li', '.list-descriptions li');
    showCompetitions.initShowCompetitions();

    const modalLogin = new ModalLogin();
    modalLogin.initModalLogin();

    const mapToolTip = new MapTooltip('[data-tooltip="map"]');
    mapToolTip.onMouseMove();

    addLinksMenu();
    addAltImg();
    dropdownMenu();
    menuMobile();
    titles();
    timeOperation();
    watchGames();
    countDownOlympicGames();
};

/* TODO: Adicionar imagens às competições
TODO: Responsivo - matchMedia
TODO: Funcionalidade login
TODO: Toggle dropdown menu mobile
TODO: Fechar menu dropdown/mobile quando clicar fora
TODO: Iniciar contagem de titulos apenas quando o usuário estiver navegando na section */
