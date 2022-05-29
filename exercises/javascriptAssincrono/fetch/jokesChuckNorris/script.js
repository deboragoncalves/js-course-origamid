/*
Exercício: Utilizando a API https://api.chucknorris.io/jokes/random
retorne uma piada randomica do chucknorris, toda vez que clicar em próxima
*/

let jokeChuckNorris;

window.onload = () => {
    getJokeChuckNorris();

    // setTimeOut - esperar retorno
    setTimeout(() => {
        if (!jokeChuckNorris) return;
        showJoke(jokeChuckNorris);
    }, 2000);
}

const getJokeChuckNorris = () => {
    const URL_CHUCK_NORRIS = "https://api.chucknorris.io/jokes/random";
    fetch(URL_CHUCK_NORRIS)
        .then(response => response.json())
        .then(responseJson => {
            if (!responseJson || !responseJson.value) return;

            jokeChuckNorris = responseJson.value;
            console.log(jokeChuckNorris);
        });
}

const showJoke = joke => {
    if (!joke) return;

    let imageChuckNorris = document.createElement("img");
    imageChuckNorris.setAttribute("src", "./assets/chuckNorris.jpg");
    imageChuckNorris.setAttribute("alt", "Chuck Norris");
    imageChuckNorris.classList.add("image-chuck-norris");

    let titleJoke = document.createElement("p");
    titleJoke.innerText = "Piada do Chuck Norris";
    titleJoke.classList.add("title-joke");

    let chuckNorrisJoke = document.createElement("blockquote");
    chuckNorrisJoke.innerHTML = `"${joke}"`;
    chuckNorrisJoke.classList.add("joke-chuck-norris");

    let buttonNextJoke = document.createElement("button");
    buttonNextJoke.classList.add("btn");
    buttonNextJoke.classList.add("btn-outline-success");
    buttonNextJoke.classList.add("button-next-joke");
    buttonNextJoke.innerHTML = "Próxima piada";
    buttonNextJoke.addEventListener("click", () => {
        getJokeChuckNorris();

        setTimeout(() => {
            chuckNorrisJoke.innerHTML = `"${jokeChuckNorris}"`;
        }, 2000);
    });

    let containerJoke = document.querySelector("#container-joke");
    containerJoke.appendChild(imageChuckNorris);
    containerJoke.appendChild(titleJoke);
    containerJoke.appendChild(chuckNorrisJoke);
    containerJoke.appendChild(buttonNextJoke);
};

// TODO: implementar loading