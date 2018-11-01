const domainFactory = require("../domain/domainFactory");

function homeController(){

    function execute(){
        domainFactory.createHomePresenter();
    }

    return {
        execute: execute
    }

}

module.exports = homeController;