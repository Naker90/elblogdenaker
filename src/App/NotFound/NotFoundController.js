function NotFoundController({view, hangmanGame}){

    function execute(){
        view.render();
        hangmanGame.start();
    }

    return {
        execute: execute
    }
}

module.exports = NotFoundController;