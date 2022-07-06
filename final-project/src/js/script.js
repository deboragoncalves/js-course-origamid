import addLinksMenu from './modules/links-navbar.js';
import addAltImg from './modules/alt-images.js';
import watchGames from './modules/watch-games.js';
import countDownOlympicGames from './modules/countdown-olympic-games.js';
import TimeOperation from './modules/time-operation.js';
import DropdownMenu from './modules/dropdown-menu.js';
import ModalLogin from './modules/modal-login.js';
import ShowCompetitions from './modules/show-competitions.js';
import ShowAnswers from './modules/show-answers.js';
import MapTooltip from './modules/map-tooltip.js';
import getTitles from './modules/get-titles.js';
import MenuMobile from './modules/menu-mobile.js';

window.onload = () => {
    const showAnswers = new ShowAnswers('.list-questions');
    showAnswers.initShowAnswers();

    const showCompetitions = new ShowCompetitions('.list-competitions li', '.list-descriptions li');
    showCompetitions.initShowCompetitions();

    const modalLogin = new ModalLogin('[data-modal="container"]', '[data-navbar="login"]', '[data-modal="close"]');
    modalLogin.initModalLogin();

    const mapToolTip = new MapTooltip('[data-tooltip="map"]');
    mapToolTip.onMouseMove();

    const dropdownMenu = new DropdownMenu();
    dropdownMenu.initDropdownMenu();

    const menuMobile = new MenuMobile('#list-navbar', '[data-menu-mobile="button"]');
    menuMobile.initMenuMobile();

    const timeOperation = new TimeOperation('[data-week]', '#open-close');
    timeOperation.initTimeOperation();

    getTitles();

    addLinksMenu();
    addAltImg();
    watchGames();
    countDownOlympicGames();
};

/* TODO: Adicionar imagens às competições
TODO: Responsivo - matchMedia
TODO: Funcionalidade login
TODO: Fechar menu dropdown/mobile quando clicar fora
TODO: Corrigir bug tooltip */
