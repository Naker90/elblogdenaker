const HomeController = require("../controllers/homeController");

window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function router(navigator){

        const routes = [
            {
                route: 'home',
                solve: HomeController
            }
        ];

        function resolveRoute(){
            let path = navigator.getLocationHash();
            getRouteSolver(path, successCallback);

            function successCallback(solver){
                solver.solve();
            }
        }

        function getRouteSolver(route, successCallback){
            routes.map(function(x) {
                if(x.route === route){
                    successCallback(x);
                }
            });
        }

        return {
            resolveRoute: resolveRoute
        };
    }

    function createRouter(navigator){
        return router(navigator)
    }

    NakerNoventa.CreateRouter = createRouter;


})(window.NakerNoventa);
