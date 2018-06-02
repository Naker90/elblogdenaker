const HomeController = require("../controllers/homeController");

window.NakerNoventa = window.NakerNoventa || {};

(function(NakerNoventa){

    const routes = [
        {
            route: 'home',
            solve: HomeController
        }
    ];

    function Routes(){

        function getRouteSolver(route, successCallback){
            routes.map(function(x) {
                if(x.route === route){
                    successCallback(x);
                }
            });
        }

        return {
            getRouteSolver: getRouteSolver
        }
    }

    NakerNoventa.Routes = Routes();

})(window.NakerNoventa);