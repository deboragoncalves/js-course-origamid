class TimeOperation {
    constructor(timeOperation, openClose) {
        // [data-week]
        this.textTimeOperation = document.querySelector(timeOperation);
        // #open-close
        this.textOpenClose = document.querySelector(openClose);
    }

    setStringToNumber = (array) => {
        if (!array || array.length < 0) return;

        // Map não modifica o array original
        // + (string to number) ou parseInt()
        const newArray = array.split(',').map((item) => +item);
        return newArray;
    };

    getCurrentDate = () => {
        const currentDate = new Date();

        // Get date - retorna dia do mes, get day - retorna dia da semana, iniciando com 0 - domingo
        const currentDay = currentDate.getDay();
        const currentHour = currentDate.getHours();

        return {
            currentDay,
            currentHour,
        };
    };

    // De acordo com a data atual e horário de funcionamento (arrayWeek e arrayHours)
    // verifica aberto/fechado
    openClosed = (arrayWeek, arrayHours) => {
        if (!arrayWeek || arrayWeek.length < 0 || !arrayHours || arrayHours.length < 0) return;

        if (!this.textOpenClose) return;

        const { currentDay, currentHour } = this.getCurrentDate();
        const weekOpen = arrayWeek.includes(currentDay);
        const hourOpen = currentHour >= arrayHours[0] && currentHour < arrayHours[1];

        weekOpen && hourOpen ? this.textOpenClose.innerText = 'Aberto' : this.textOpenClose.innerText = 'Fechado';
    };

    // Resgata um objeto com os atributos data-week e data-hour da tag p
    // data-week="1,2,3,4,5" data - hour="8,18"
    initTimeOperation = () => {
        if (!this.textTimeOperation) return;

        const timeOperationDataset = this.textTimeOperation.dataset;

        let { week, hour } = timeOperationDataset;
        week = this.setStringToNumber(week);
        hour = this.setStringToNumber(hour);

        this.openClosed(week, hour);
        return this;
    };
}

export default TimeOperation;
