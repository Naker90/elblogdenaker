const navigator = require("../utils/navigator");

function homeController(){

    function execute(){
        navigator.render("Home");
    }

    return {
        execute: execute
    }

}

module.exports = homeController;