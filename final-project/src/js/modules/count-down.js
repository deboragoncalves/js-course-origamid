class CountDown {
    constructor(futureDate) {
        // atributo ou método interno da classe inicia com _
        this._futureDate = futureDate;
    }

    // Data atual
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

export default CountDown;
