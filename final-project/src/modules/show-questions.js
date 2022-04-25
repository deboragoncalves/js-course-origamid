const getQuestions = () => {
    const classActive = "active";

    // Selecionar todas as perguntas - dt 
    let listQuestions = document.querySelectorAll(".list-questions dt");

    if (listQuestions.length <= 0) return;

    listQuestions.forEach(question => {
        question.addEventListener("click", showAnswer);
    });

    // Mostrar primeira resposta no onload
    let listAnswers = document.querySelectorAll(".list-questions dd");
    listAnswers[0].classList.add(classActive);
}

const showAnswer = event => {
    const classActive = "active";

    // Item clicado
    let questionClicked = event.currentTarget;
    let answer = questionClicked.nextElementSibling;
    answer.classList.toggle(classActive);
};

export default getQuestions;