class CountDown {
    constructor(futureDate) {
        // atributo ou método interno da classe inicia com _
        this._futureDate = futureDate;
    }

    get _currentDate() {
        return new Date();
    }

    // diferença entre data atual e data futura. método getTime() retorna em ms
    get _diffMilliseconds() {
        return this._futureDate.getTime() - this._currentDate.getTime();
    }

    // diferença dias: ms total / ms em um dia
    get _countDays() {
        const days = this._diffMilliseconds / (24 * 60 * 60 * 1000);

        // arredondar para baixo com Math.floor
        return Math.floor(days);
    }
}

const countDownOlympicGames = () => {
    // 26/07/2024
    let dateOlympicGames = new Date('2024-07-26T00:00:00');

    let countDown = new CountDown(dateOlympicGames);

    // métodos são chamados como se fossem propriedades, sem parênteses ()
    let countDays = countDown._countDays;

    showCountDown(countDays);
};

const showCountDown = days => {
    let containerCountDown = document.getElementById("countdown-olympics");
    containerCountDown.classList.add("titles");
    containerCountDown.innerHTML = `Faltam ${days} para as Olimpíadas de Paris!`;
}

export default countDownOlympicGames; 