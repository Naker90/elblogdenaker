window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolverHandler(route){
            return new Promise(resolve => {
                resolve(getRouteSolver(route));
            });
        }

        function getRouteSolver(route){
            let defaultRoute = routes.filter(x => x.routeByDefault)[0];

            routes.map(x => {
                if(x.route === route){
                    defaultRoute = x;
                }
            });

            return defaultRoute;
        }

        return {
            getRouteSolverHandler: getRouteSolverHandler
        }
    }

    NakerNoventa.RoutesResolver = routesResolver;

})(window.NakerNoventa);