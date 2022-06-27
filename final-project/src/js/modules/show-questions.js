const showAnswer = (event) => {
    const classActive = 'active';

    // Item clicado
    const questionClicked = event.currentTarget;
    const answer = questionClicked.nextElementSibling;
    answer.classList.toggle(classActive);
};

const getQuestions = () => {
    const classActive = 'active';

    // Selecionar todas as perguntas - dt
    const listQuestions = document.querySelectorAll('.list-questions dt');

    if (listQuestions.length <= 0) return;

    listQuestions.forEach((question) => {
        question.addEventListener('click', showAnswer);
    });

    // Mostrar primeira resposta no onload
    const listAnswers = document.querySelectorAll('.list-questions dd');
    listAnswers[0].classList.add(classActive);
};

export default getQuestions;
