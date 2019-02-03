import Hangman from "./Hangman";
import View from "./View";
import MoviesAndHintsRepository from "./MoviesAndHintsRepository";
import MoviesAndHints from "./MoviesAndHints";
import Stickman from "./Stickman";

function Game(){

    return {
        start: start
    };

    function start(){
        Hangman({
            view: View(),
            moviesAndHintsRepository: MoviesAndHintsRepository({moviesAndHints: MoviesAndHints}),
            stickman: Stickman()
        })
    }
}

module.exports = Game;