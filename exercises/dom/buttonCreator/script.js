var formButtonCreator = document.querySelector("#formButtonCreator");
var buttonTest = document.querySelector("#buttonTest");
var codeCss = document.querySelector(".codeCss");

// Centralizar todas as funções dentro de um objeto

const changeStyleButton = {
    textButton: text => {
        buttonTest.innerHTML = text;
    },
    color: color => {
        buttonTest.style.color = color;
    },
    backgroundColor: background => {
        buttonTest.style.backgroundColor = background;
    },
    height: height => {
        buttonTest.style.height = `${height}px`;
    },
    width: width => {
        buttonTest.style.width = `${width}px`;
    },
    border: border => {
        buttonTest.style.border = border;
    },
    borderRadius: borderRadius => {
        buttonTest.style.borderRadius = `${borderRadius}%`;
    },
    fontFamily: fontFamily => {
        buttonTest.style.fontFamily = fontFamily;
    },
    fontSize: fontSize => {
        buttonTest.style.fontSize = `${fontSize}px`;
    }
}

// Ao invés de criar um evento individual pra cada input, pegar as mudanças através do form

const changeFormButton = event => {
    // event.target.name retorna o valor do atributo name do input
    let eventChange = event.target.name;
    let valueChange = event.target.value;

    // objeto[chave] ou objeto.chave

    changeStyleButton[eventChange](valueChange);
    showCodeCss();
}

const showCodeCss = () => {
    codeCss.innerHTML = "";
    if (!buttonTest) return;
    // Dentro do style tem a propriedade cssText, exibindo em forma de texto o código
    let arrayCssText = buttonTest.style.cssText.split(";");
    console.log(arrayCssText);

    for (let textCss of arrayCssText) {
        codeCss.innerHTML += `${textCss}\n`;
    }
}

formButtonCreator.addEventListener("change", changeFormButton);
