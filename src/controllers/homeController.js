function homeController(navigator){

    function execute(){
        navigator.render("Home");
    }

    return {
        execute: execute
    }

}

module.exports = homeController;