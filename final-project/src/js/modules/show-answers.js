class ShowAnswers {
    constructor(listQuestions) {
        // .list-questions dt - perguntas
        this.listQuestions = document.querySelectorAll(`${listQuestions} dt`);
        // .list-questions dd - respostas
        this.listAnswers = document.querySelectorAll(`${listQuestions} dd`);
    }

    showAnswer = (event) => {
        const classActive = 'active';

        // Item clicado
        const questionClicked = event.currentTarget;
        const answer = questionClicked.nextElementSibling;
        answer.classList.toggle(classActive);
    };

    clickShowAnswer = () => {
        this.listQuestions.forEach((question) => {
            question.addEventListener('click', (event) => this.showAnswer(event));
        });
    };

    initShowAnswers = () => {
        const classActive = 'active';

        // Selecionar todas as perguntas - dt
        if (this.listQuestions.length <= 0) return;

        this.clickShowAnswer();

        // Mostrar primeira resposta no onload
        this.listAnswers[0].classList.add(classActive);
    };
}

export default ShowAnswers;
