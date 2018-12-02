const HomeFactory = require("../Home/Factory");
const NotFoundFactory = require("../NotFound/Factory");
const ArticleFactory = require("../Article/Factory");

function RoutesResolver({router: router}){

    const homeController = HomeFactory.createHomeController();
    const notFoundController = NotFoundFactory.createNotFoundController();
    const articleController = ArticleFactory.createArticleController();

    function init(){
        router.registerRoute({route: "/", resolver: homeController.execute});
        router.registerRoute({route: "/:year/:month/:day/:articleName", resolver: articleController.execute});
        router.registerRoute({route: "*", resolver: notFoundController.execute});
        router.finish();
    }

    return {
        init: init
    }
}

module.exports = RoutesResolver;