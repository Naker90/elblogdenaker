const Navigator = require("../utils/navigator");

function homeController(){

    function execute(){
        let navigator = Navigator.navigator();
        navigator.render("Home");
    }

    return {
        execute: execute
    }

}

module.exports = homeController;