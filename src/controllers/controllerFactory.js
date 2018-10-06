const navigator = require("../utils/navigator");
const homeController = require("./homeController");

function controllerFactory(){

    function createHomeController(){
        return homeController(navigator());
    }

    return {
        createHomeController: createHomeController
    }
}

module.exports = controllerFactory();