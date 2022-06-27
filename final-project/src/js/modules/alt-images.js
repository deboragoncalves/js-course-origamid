const addAltImg = () => {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
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

export default addAltImg;
