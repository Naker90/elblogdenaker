function NotFoundController({view, hangmanGame}){

    const hangmanPlayMarkup = `
        <h1>404 - Page has not been found but you can play a little bit</h1>
        <div class="hangmanContainer">
            <h2>Hangman play - movie titles</h2>
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