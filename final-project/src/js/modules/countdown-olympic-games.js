import CountDown from './count-down.js';

class CountDownOlympicGames {
    constructor(sectionCountDown) {
        // countdown-olympics
        this.containerCountDown = document.getElementById(sectionCountDown);
    }

    // Exibe na tela os dias restantes
    showCountDown = (days) => {
        if (!this.containerCountDown || !days) return;

        this.containerCountDown.classList.add('titles');
        this.containerCountDown.innerHTML = `Faltam ${days} para as Olimpíadas de Paris!`;
    };

    // Declara a data inicial das Olimpíadas e passa essa data no construtor da classe CountDown
    // Chama o método que calcula a diferença de dias entre a data futura - data presente
    initCountDownOlympicGames = () => {
        // 26/07/2024
        const dateOlympicGames = new Date('2024-07-26T00:00:00');

        const countDown = new CountDown(dateOlympicGames);

        // métodos são chamados como se fossem propriedades, sem parênteses ()
        const countDays = countDown._countDays;

        this.showCountDown(countDays);

        return this;
    };
}

export default CountDownOlympicGames;
