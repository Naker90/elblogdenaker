function NotFoundController({view, hangmanGame}){

    const hangmanPlayMarkup = `<div class="container">
            <canvas id="canvas" width="500" height="250"></canvas>
            <br>
            <h2 id="lives">You have 10 lives.</h2>
            <h3 id="hint-text"></h3>
            <div id="movie-title"></div>
            <div id="alphabet"></div>
            <div>
                <input id="hint" type="button" value="Give me a hint!">
                <input id="play" type="button" value="Play again!">
            </div>
        </div>`;

    function execute(){
        view.render({content: hangmanPlayMarkup});
        hangmanGame.start();
    }

    return {
        execute: execute
    }
}

module.exports = NotFoundController;