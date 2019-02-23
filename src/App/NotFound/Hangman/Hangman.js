function Hangman({view, moviesAndHintsRepository, stickman}){

    const encodeCharacter = "-";
    const blankSpaceEncodeCharacter = "_";
    let lives = 10;
    let hintsCounter = 0;

    view.subscribeToStartGameRequested({handler: subscribeToGameStartRequested});
    view.subscribeToPlayAgainRequested({handler: playAgainRequestedHandler});
    return;

    function subscribeToGameStartRequested(){
        let movieAndHintsDto = moviesAndHintsRepository.getMovieAndHints();
        let encodedMovieTitle = encodeMovieTitle({movieTitle: movieAndHintsDto.movieTitle});
        view.showWord({movieTitle: encodedMovieTitle});
        view.showLives({numberOfLives: lives});
        view.subscribeToGuessLetterRequested({handler: guessLetterRequestedHandler});
        view.subscribeToGetHintRequested({handler: getHintRequestedHandler});
        return;

        function guessLetterRequestedHandler({letter}){
            if(!isWordContainsLetter({letter: letter})) {
                lives--;
                stickman.drawNext();
                if(lives === 0){
                    view.endGameAsLoser();
                }else{
                    view.showLives({numberOfLives: lives});
                }
            }else{
                decodeLetterOnWord({guessLetter: letter});
                view.showWord({movieTitle: encodedMovieTitle});
                if(isPlayerWinner({encodeMovieTitle: encodedMovieTitle})){
                    view.endGameAsWinner();
                }
            }
            return;

            function isWordContainsLetter({letter}){
               return movieAndHintsDto.movieTitle.includes(letter)
            }

            function decodeLetterOnWord({guessLetter}){
                Array.prototype.forEach.call(movieAndHintsDto.movieTitle, (letter, index) => {
                    if(letter === guessLetter){encodedMovieTitle[index] = guessLetter}
                });
            }

            function isPlayerWinner({encodeMovieTitle}){
                return !encodeMovieTitle.some((letter) => letter === encodeCharacter);
            }
        }

        function getHintRequestedHandler(){
            if(hintsCounter !== movieAndHintsDto.hints.length){
                let hint = movieAndHintsDto.hints[hintsCounter];
                hintsCounter++;
                return view.showHint({hint: hint});
            }
            return view.showHint({hint: "Have not got more hints!"});
        }

        function encodeMovieTitle({movieTitle}){
            let encodeWord = [];
            Array.prototype.forEach.call(
                movieTitle,
                (letter) => (letter === " ")
                    ? encodeWord.push(blankSpaceEncodeCharacter)
                    : encodeWord.push(encodeCharacter)
            );
            return encodeWord;
        }
    }

    function playAgainRequestedHandler(){
        view.reloadPage();
    }
}

module.exports = Hangman;