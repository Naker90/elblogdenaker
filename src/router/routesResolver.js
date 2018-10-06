const controllerFactory = require("../controllers/controllerFactory");

function routesResolver(router){

    const homeController = controllerFactory.createHomeController();

    function init(){
        router.registerRoute("/", homeController.execute());
    }

    return {
        init: init
    }
}

module.exports = routesResolver;