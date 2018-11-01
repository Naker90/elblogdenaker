const controllerFactory = require("../Factories/controllerFactory");

function routesResolver(router){

    const homeController = controllerFactory.createHomeController();
    const notFoundController = controllerFactory.createNotFoundController();

    function init(){
        router.registerRoute("/", homeController.execute);
        router.registerRoute("*", notFoundController.execute);
        router.finish();
    }

    return {
        init: init
    }
}

module.exports = routesResolver;