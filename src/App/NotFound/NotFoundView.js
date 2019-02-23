function HomeView({renderService}){

    const HangmanMarkup = `
        <h2 class="text-big">404 - Página no encontrada</h2>
        <input id="start" class="btn btn-big" type="button" value="¡Jugar al ahorcado!">
        <div id="gameContainer" style="display: none;">
            <h2 class="text-big">¡Adivina el titulo de las peliculas!</h2>
            <canvas id="canvas"></canvas>
            <br>
            <h2 id="lives">Tienes 10 vidas.</h2>
            <h3 id="hint-text"></h3>
            <div id="movie-title"></div>
            <div id="alphabet"></div>
            <div>
                <input id="hint" class="btn" type="button" value="¡Dame una pista!">
                <input id="play" class="btn" type="button" value="Jugar">
            </div>
        </div>`;

    function render(){
        renderService.render({content: HangmanMarkup});
    }

    return {
        render: render
    }
}

module.exports = HomeView;
