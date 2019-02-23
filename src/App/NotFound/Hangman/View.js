function View(){

    let startGameRequestedHandler = () => {};
    let playAgainRequestedHandler = () => {};
    let guessLetterRequestedHandler = ({letter}) => {};
    let getHintRequestedHandler = () => {};

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let gameContainer = document.getElementById("gameContainer");
    let alphabetContainer = document.getElementById("alphabet");
    let movieContainer = document.getElementById("movie-title");
    let livesText = document.getElementById("lives");
    let hintBtn = document.getElementById("hint");
    let startBtn = document.getElementById("start");
    let playBtn = document.getElementById("play");
    let hintText = document.getElementById("hint-text");

    startBtn.addEventListener("click", () => {
        startGameRequestedHandler();
        gameContainer.removeAttribute("style");
        startBtn.style.display = "none";

        playBtn.addEventListener("click", () => {
            playAgainRequestedHandler();
        });
        hintBtn.addEventListener("click", () => {
            getHintRequestedHandler()
        });
    });

    generateBtnAlphabet();

    return {
        showWord: showWord,
        showLives: showLives,
        endGameAsWinner: endGameAsWinner,
        endGameAsLoser: endGameAsLoser,
        reloadPage: reloadPage,
        showHint: showHint,
        subscribeToStartGameRequested: subscribeToStartGameRequested,
        subscribeToPlayAgainRequested: subscribeToPlayAgainRequested,
        subscribeToGuessLetterRequested: subscribeToGuessLetterRequested,
        subscribeToGetHintRequested: subscribeToGetHintRequested
    };

    function showWord({movieTitle}){
        movieContainer.innerHTML = "";
        movieTitle.map((letter) => {
            let text = letter === "_" ? " " : letter;
            createSpanWith(text);
        });

        function createSpanWith(text){
            let span = document.createElement("span");
            span.appendChild(document.createTextNode(text));
            movieContainer.appendChild(span);
        }
    }

    function showLives({numberOfLives}){
        livesText.innerHTML = `You have ${numberOfLives} lives!`;
    }

    function endGameAsWinner(){
        livesText.innerHTML = `You Win!`;
        deleteAllButtonEventLister();
    }

    function endGameAsLoser(){
        livesText.innerHTML = `You Lose!`;
        deleteAllButtonEventLister();
    }

    function reloadPage(){
        location.reload();
    }

    function showHint({hint}){
        hintText.innerHTML = hint;
    }

    function subscribeToStartGameRequested({handler}){
        startGameRequestedHandler = handler;
    }

    function subscribeToPlayAgainRequested({handler}){
        playAgainRequestedHandler = handler;
    }

    function subscribeToGuessLetterRequested({handler}){
        guessLetterRequestedHandler = handler;
    }

    function subscribeToGetHintRequested({handler}){
        getHintRequestedHandler = handler;
    }

    function generateBtnAlphabet() {
        Array.prototype.forEach.call(alphabet, (letter) => {
            let btn = document.createElement("button");
            btn.appendChild(document.createTextNode(letter));

            let id = document.createAttribute("id");
            id.value = letter;
            btn.setAttributeNode(id);
            btn.addEventListener("click", () => {
                guessLetterRequestedHandler({letter: letter});
                setStyleDisabled(btn);
                deleteEventListenerTo(btn)
            });

            alphabetContainer.appendChild(btn);
        });

        function setStyleDisabled(btn){
            let style = document.createAttribute("class");
            style.value="disabled-button";
            btn.setAttributeNode(style);
        }
    }

    function deleteAllButtonEventLister(){
        let buttons = alphabetContainer.getElementsByTagName("button");
        Array.prototype.map.call(buttons, (btn) => {
            deleteEventListenerTo(btn);
        });
        deleteEventListenerTo(hintBtn);
    }

    function deleteEventListenerTo(element){
        let newElementWithoutEvent = element.cloneNode(true);
        element.parentNode.replaceChild(newElementWithoutEvent, element);
    }
}

module.exports = View;