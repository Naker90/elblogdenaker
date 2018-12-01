const homeFactory = require("../Home/Factory");
const notFoundFactory = require("../NotFound/factory");

function routesResolver(router){

    const homeController = homeFactory.createHomeController();
    const notFoundController = notFoundFactory.createNotFoundController();

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