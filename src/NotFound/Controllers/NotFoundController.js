function NotFoundController({view}){

    function execute(){
        view.render();
    }

    return {
        execute: execute
    }
}

module.exports = NotFoundController;