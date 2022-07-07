class AddAltImg {
    constructor(allImages) {
        // img
        this.images = document.querySelectorAll(allImages);
    }

    // Se as images do site não tiverem atributo alt, seta esse atributo
    intAddAltImg = () => {
        if (!this.images) return;

        this.images.forEach((image) => {
            if (image.hasAttribute('alt')) {
                return;
            }

            let srcAttribute = image.getAttribute('src');
            if (srcAttribute) {
                srcAttribute = srcAttribute.toUpperCase();

                if (srcAttribute.includes('MAPA')) {
                    image.setAttribute('alt', 'Mapa com a localização da Confederação Brasileira de Vôlei');
                }
            }
        });
    };
}

export default AddAltImg;
