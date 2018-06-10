window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolver(route){
            return new Promise(resolve => {
                resolve(getRoute(route));
            });
        }

        function getRoute(route){
            let defaultRoute = routes.filter(x => x.routeByDefault)[0];

            routes.map(x => {
                if(x.route === route){
                    defaultRoute = x;
                }
            });

            return defaultRoute;
        }

        return {
            getRouteSolver: getRouteSolver
        }
    }

    function createRoutesResolver(routes){
        return routesResolver(routes)
    }

    NakerNoventa.RoutesResolver = routesResolver;
    NakerNoventa.CreateRoutesResolver = createRoutesResolver;

})(window.NakerNoventa);