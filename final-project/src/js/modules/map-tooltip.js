class MapTooltip {
    constructor(map) {
        // [data-tooltip="map"]
        // Tooltip/popover
        this.imageMap = document.querySelector(map);
    }

    // Criar toolTip
    createTooltip = (event) => {
        if (event) {
            const tooptipMap = document.createElement('div');
            tooptipMap.setAttribute('id', 'tooltip-map');

            // Não criar classe tooltip = nome class bootstrap
            tooptipMap.classList.add('tooltip-map');

            // Posicionar - event.pageX = posição mouse eixo X
            tooptipMap.style.top = `${event.pageY}px`;
            tooptipMap.style.left = `${event.pageX}px`;
            tooptipMap.innerText = 'Endereço da CBV';

            // Remover todos os tooltips antes de adicionar, para evitar duplicação
            if (tooptipMap) {
                this.removeTooltips();
            }

            document.body.appendChild(tooptipMap);

            console.log('Tooltip');
            console.log(tooptipMap);
        }
    };

    // Remove tooltip caso clique fora do mapa
    removeTooltips = () => {
        const tooltipsMap = document.querySelectorAll('#tooltip-map');

        if (tooltipsMap) {
            tooltipsMap.forEach((tooltip) => {
                if (tooltip) {
                    tooltip.remove();
                }
            });
        }
    };

    // Quando o mouse se mover no mapa, criar tooltip e remover quando sair
    onMouseMove = () => {
        if (this.imageMap) {
            this.imageMap.addEventListener('mousemove', (event) => {
                this.createTooltip(event);
                this.imageMap.addEventListener('mouseleave', this.removeTooltips);
            });
        }

        return this;
    };

    initMapTooltip = () => {
        this.onMouseMove();
    };
}

export default MapTooltip;
