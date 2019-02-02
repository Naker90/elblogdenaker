import Hangman from "./Hangman";
import View from "./View";
import MoviesAndHintsRepository from "./MoviesAndHintsRepository";
import MoviesAndHints from "./MoviesAndHints";
import Stickman from "./Stickman";

function HangmanPlay(){

    return {
        startGame: startGame
    };

    function startGame(){
        Hangman({
            view: View(),
            moviesAndHintsRepository: MoviesAndHintsRepository({moviesAndHints: MoviesAndHints}),
            stickman: Stickman()
        })
    }
}

module.exports = HangmanPlay;