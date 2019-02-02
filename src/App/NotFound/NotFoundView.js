function HomeView({renderService}){

    const HangmanMarkup = `<div class="container">
        <canvas id="canvas"></canvas>
            <br>
            <h2 id="lives">You have 10 lives.</h2>
            <h3 id="hint-text"></h3>
            <div id="movie-title"></div>
            <div id="alphabet"></div>
            <div>
                <input id="hint" class="btn" type="button" value="Give me a hint!">
                <input id="play" class="btn" type="button" value="Play again!">
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
