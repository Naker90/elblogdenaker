function notFoundController(view){

    function execute(){
        view.render();
    }

    return {
        execute: execute
    }
}

module.exports = notFoundController;