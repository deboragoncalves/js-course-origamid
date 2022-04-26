const mapTooltip = () => {
    onMouseMove();
}

// HTML: adicionar data-tooltip - resgatar elemento no JS,
// Quando tiver o evento de mousemove, criar elemento tooltip, com texto x, como último filho do body
// Mouse leave = remover elemento
// Tooltip = popover

const onMouseMove = () => {
    let imageMap = document.querySelector("[data-tooltip='map'");

    if (imageMap) {
        imageMap.addEventListener("mousemove", (event) => {
            createTooltip(event);
            imageMap.addEventListener("mouseleave", removeTooltips);
        });
    }
}

const createTooltip = event => {

    if (event) {
        let tooptipMap = document.createElement("div");
    
        tooptipMap.id = "tooltip-map";

        // Não criar classe tooltip = nome class bootstrap
        tooptipMap.classList.add("tooltip-map");
    
        // Posicionar - event.pageX = posição mouse eixo X
    
        tooptipMap.style.top = `${event.pageY}px`; 
        tooptipMap.style.left = `${event.pageX}px`;
        
        tooptipMap.innerText = "Endereço da CBV";
        document.body.appendChild(tooptipMap);
    }

}

const removeTooltips = () => {
    let tooltipsMap = document.querySelectorAll("#tooltip-map");

    if (tooltipsMap) {
        tooltipsMap.forEach(tooltip => {
            if (tooltip) {
                tooltip.remove();
            }
        });
    }
}

export default mapTooltip;