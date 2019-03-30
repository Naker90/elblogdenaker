import * as HomeFactory from "../Home/Factory";
import * as NotFoundFactory from "../NotFound/Factory";
import * as ArticleFactory from "../Article/Factory";
import * as LibraryFactory from "../Library/Factory";

function RoutesResolver({router: router}){

    const homeController = HomeFactory.createHomeController();
    const notFoundController = NotFoundFactory.createNotFoundController();
    const articleController = ArticleFactory.createArticleController();
    const libraryController = LibraryFactory.createLibraryController();

    function init(){
        router.registerRoute({route: "/", resolver: homeController.execute});
        router.registerRoute({route: "/:year/:month/:day/:articleName", resolver: articleController.execute});
        router.registerRoute({route: "/library", resolver: libraryController.execute});
        router.registerRoute({route: "*", resolver: notFoundController.execute});
        router.finish();
    }

    return {
        init: init
    }
}

module.exports = RoutesResolver;