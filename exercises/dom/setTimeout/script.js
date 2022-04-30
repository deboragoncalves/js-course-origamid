// Exercício 01: Mude a cor da tela para azul e depois para vermelha a cada 2s.

const changeBackgroundScreen = () => {
    setInterval(() => {
        // Para alternar o background, usar o toggle: add se não tiver, remove se tiver
        document.body.classList.toggle("backgroundRed");
    }, 2000);
}

// changeBackgroundScreen();

// Exercício 02: Crie um cronômetro utilizando o setInterval. Deve ser possível: iniciar, pausar e resetar.

// a cada 1s

var interval;
var number = 0;

// Elements
var containerCronometer = document.querySelector("#cronometer");
var buttonInit = document.querySelector("#init");
var buttonPause = document.querySelector("#pause");
var buttonStop = document.querySelector("#stop");

const createCronometer = () => {
    if (!buttonInit) return;
    buttonInit.addEventListener("click", initCronometer);

    if (!buttonPause) return;
    buttonPause.addEventListener("click", pauseCronometer);

    if (!buttonStop) return;
    buttonStop.addEventListener("click", stopCronometer);
}

const initCronometer = () => {
    if (!containerCronometer) {
        containerCronometer = document.createElement("div");
        containerCronometer.id = "cronometer";
        containerCronometer.style.display = "flex";
    }

    interval = setInterval(countNumber, 100);

    // Desabilitar button
    if (!buttonInit) return;
    buttonInit.setAttribute("disabled", "");
}

const countNumber = () => {
    if (!containerCronometer) return;

    number++;
    containerCronometer.innerHTML = number;
}

const pauseCronometer = () => {
    if (!interval) return;
    clearInterval(interval);

    // Habilitar button init
    if (!buttonInit) return;
    buttonInit.removeAttribute("disabled");
}

const stopCronometer = () => {
    if (!containerCronometer) return;

    number = 0;
    containerCronometer.innerHTML = number;
}

createCronometer();