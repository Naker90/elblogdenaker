function notFoundController(navigator){

    function execute(){
        navigator.render("Not found");
    }

    return {
        execute: execute
    }

}

module.exports = notFoundController;