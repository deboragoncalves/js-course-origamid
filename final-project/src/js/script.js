import addLinksMenu from './modules/links-navbar.js';
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
import AddAltImg from './modules/alt-images.js';

window.onload = () => {
    const showAnswers = new ShowAnswers('.list-questions');
    showAnswers.initShowAnswers();

    const showCompetitions = new ShowCompetitions('.list-competitions li', '.list-descriptions li');
    showCompetitions.initShowCompetitions();

    const modalLogin = new ModalLogin('[data-modal="container"]', '[data-navbar="login"]', '[data-modal="close"]');
    modalLogin.initModalLogin();

    const mapToolTip = new MapTooltip('[data-tooltip="map"]');
    mapToolTip.onMouseMove();

    const dropdownMenu = new DropdownMenu('.dropdown-menu-about', '[data-menu-dropdown="about"]');
    dropdownMenu.initDropdownMenu();

    const menuMobile = new MenuMobile('#list-navbar', '[data-menu-mobile="button"]');
    menuMobile.initMenuMobile();

    const timeOperation = new TimeOperation('[data-week]', '#open-close');
    timeOperation.initTimeOperation();

    const addAltImg = new AddAltImg('img');
    addAltImg.intAddAltImg();

    getTitles();

    addLinksMenu();
    countDownOlympicGames();
    watchGames();
};

/*
TODO: Refatorar addLinksMenu, countDownOlympicGames
TODO: Responsivo - matchMedia
TODO: Funcionalidade login
TODO: Corrigir bug tooltip */
