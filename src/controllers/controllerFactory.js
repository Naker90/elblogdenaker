const homeController = require("./homeController");

function controllerFactory(){

    function createHomeController(){
        return homeController();
    }

    return {
        createHomeController: createHomeController
    }
}

module.exports = controllerFactory();