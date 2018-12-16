import * as HomeFactory from "../Home/Factory";
import * as NotFoundFactory from "../NotFound/Factory";
import * as ArticleFactory from "../Article/Factory";

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