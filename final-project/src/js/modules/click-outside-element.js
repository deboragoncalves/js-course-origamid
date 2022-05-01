const classActive = "active";

const clickOutsideElement = (element, events) => {
    const html = document.documentElement;

    const removeClassActive = event => {
        let elementClicked = event.target;
    
        // Se a ul do menu contém o item clicado (um das li's, ex), remove
        if (!element.contains(elementClicked)) {
            element.classList.remove(classActive);
            
            // Remover evento
            html.removeEventListener("click", removeClassActive)
        }
    }

    // Para cada evento, chamar a função de remover
    if (events.length > 0) {
        events.forEach(event => {
            html.addEventListener(event, removeClassActive);
        });
    }
}

export default clickOutsideElement;