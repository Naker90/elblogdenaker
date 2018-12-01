const HomeFactory = require("../Home/Factory");
const NotFoundFactory = require("../NotFound/Factory");

function RoutesResolver({router: router}){

    const homeController = HomeFactory.createHomeController();
    const notFoundController = NotFoundFactory.createNotFoundController();

    function init(){
        router.registerRoute({route: "/", resolver: homeController.execute});
        router.registerRoute({route: "*", resolver: notFoundController.execute});
        router.finish();
    }

    return {
        init: init
    }
}

module.exports = RoutesResolver;