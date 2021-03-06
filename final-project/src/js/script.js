import watchGames from './modules/watch-games.js';
import getTitles from './modules/get-titles.js';
import TimeOperation from './modules/time-operation.js';
import ModalLogin from './modules/modal-login.js';
import ShowCompetitions from './modules/show-competitions.js';
import ShowAnswers from './modules/show-answers.js';
import MapTooltip from './modules/map-tooltip.js';
import MenuMobile from './modules/menu-mobile.js';
import AddAltImg from './modules/alt-images.js';
import AddLinksMenu from './modules/links-navbar.js';
import CountDownOlympicGames from './modules/countdown-olympic-games.js';
// import DropdownMenu from './modules/dropdown-menu.js';

window.onload = () => {
    const showAnswers = new ShowAnswers('.list-questions');
    showAnswers.initShowAnswers();

    const showCompetitions = new ShowCompetitions('.list-competitions li', '.list-descriptions li');
    showCompetitions.initShowCompetitions();

    const modalLogin = new ModalLogin('[data-modal="container"]', '[data-navbar="login"]', '[data-modal="close"]', '#submit-login', '#email', '#password', '#invalid-field-login');
    modalLogin.initModalLogin();

    const mapToolTip = new MapTooltip('[data-tooltip="map"]');
    mapToolTip.onMouseMove();

    const menuMobile = new MenuMobile('#list-navbar', '[data-menu-mobile="button"]');
    menuMobile.initMenuMobile();

    const timeOperation = new TimeOperation('[data-week]', '#open-close');
    timeOperation.initTimeOperation();

    const addAltImg = new AddAltImg('img');
    addAltImg.intAddAltImg();

    const addLinksMenu = new AddLinksMenu('.link-menu');
    addLinksMenu.initAddLinksMenu();

    const countDownOlympicGames = new CountDownOlympicGames('countdown-olympics');
    countDownOlympicGames.initCountDownOlympicGames();

    getTitles();
    watchGames();

    /* const dropdownMenu = new DropdownMenu('.dropdown-menu-about',
    '[data-menu-dropdown="about"]');
    dropdownMenu.initDropdownMenu(); */
};

/*
TODO: Funcionalidade login
TODO: Responsivo - matchMedia
TODO: Corrigir bug tooltip */
