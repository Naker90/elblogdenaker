const domainFactory = require("../domain/domainFactory");

function homeController(navigator){

    function execute(){
        domainFactory.createHomePresenter();
    }

    return {
        execute: execute
    }

}

module.exports = homeController;