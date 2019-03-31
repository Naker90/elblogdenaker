function HomeView({renderService}){

    const HangmanMarkup = `
        <div id="notFoundContainer">
            <h2 class="text-big error">404 - Page not found.</h2>
            <input id="start" class="btn btn-big" type="button" value="¡Play to Hangman!">
            <div id="gameContainer" style="display: none;">
                <h2 class="text-big">Guess the title of the movies!</h2>
                <canvas id="canvas"></canvas>
                <br>
                <h2 id="lives"></h2>
                <h3 id="hint-text"></h3>
                <div id="movie-title"></div>
                <div id="alphabet"></div>
                <div>
                    <input id="hint" class="btn" type="button" value="Give me a hint!">
                    <input id="play" class="btn" type="button" value="Play again!">
                </div>
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
