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

        async function resolveRoute(){
            let path = navigator.getLocationHash();
            return await getRouteSolver(path);
        }

        function getRouteSolver(route){
            return new Promise(resolve => {
                routes.map(x => {
                    if(x.route === route){
                        resolve(x)
                    }
                });
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
