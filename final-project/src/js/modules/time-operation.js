const timeOperation = () => {
    let textTimeOperation = document.querySelector("[data-week]");

    if (!textTimeOperation) return;
    let timeOperationDataset = textTimeOperation.dataset;

    let week = timeOperationDataset.week;
    let hours = timeOperationDataset.hour;

    week = setStringToNumber(week);
    hours = setStringToNumber(hours);

    openClosed(week, hours);
}

const setStringToNumber = array => {
    if (!array || array.length < 0) return;

    // Map não modifica o array original
    // + - string to number ou parseInt()
    let newArray = array.split(",").map(item => +item);
    return newArray;
}

const openClosed = (arrayWeek, arrayHours) => {
    if (!arrayWeek || arrayWeek.length < 0 || !arrayHours || arrayHours.length < 0) return;

    let textOpenClose = document.querySelector("#open-close");
    if (!textOpenClose) return;
    
    let currentDate = new Date();

    // Get date - retorna dia do mes, get day - retorna dia da semana, iniciando com 0 - domingo
    let currentDay = currentDate.getDay();
    let currentHour = currentDate.getHours();

    let weekOpen = arrayWeek.includes(currentDay);
    let hourOpen = currentHour >= arrayHours[0] && currentHour < arrayHours[1];

    weekOpen && hourOpen ? textOpenClose.innerText = "Aberto" : textOpenClose.innerText = "Fechado";
}

export default timeOperation;