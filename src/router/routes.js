const HomeController = require("../controllers/homeController");

window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routes(){

        const routes = [
            {
                route: 'home',
                solve: HomeController
            }
        ];

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
            getRouteSolver: getRouteSolver
        }
    }

    NakerNoventa.Routes = routes;

})(window.NakerNoventa);