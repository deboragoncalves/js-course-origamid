const setStringToNumber = (array) => {
    if (!array || array.length < 0) return;

    // Map não modifica o array original
    // + - string to number ou parseInt()
    const newArray = array.split(',').map((item) => +item);
    return newArray;
};

const openClosed = (arrayWeek, arrayHours) => {
    if (!arrayWeek || arrayWeek.length < 0 || !arrayHours || arrayHours.length < 0) return;

    const textOpenClose = document.querySelector('#open-close');
    if (!textOpenClose) return;
    const currentDate = new Date();

    // Get date - retorna dia do mes, get day - retorna dia da semana, iniciando com 0 - domingo
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    const weekOpen = arrayWeek.includes(currentDay);
    const hourOpen = currentHour >= arrayHours[0] && currentHour < arrayHours[1];

    weekOpen && hourOpen ? textOpenClose.innerText = 'Aberto' : textOpenClose.innerText = 'Fechado';
};

const timeOperation = () => {
    const textTimeOperation = document.querySelector('[data-week]');

    if (!textTimeOperation) return;
    const timeOperationDataset = textTimeOperation.dataset;

    console.log(timeOperationDataset);

    let { week, hour } = timeOperationDataset;

    week = setStringToNumber(week);
    hour = setStringToNumber(hour);

    openClosed(week, hour);
};

export default timeOperation;
