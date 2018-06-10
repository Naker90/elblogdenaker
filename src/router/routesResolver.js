window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolver(route){
            return new Promise(resolve => {
                routes.map(x => {
                    if(x.route === route){
                        resolve(x)
                    }
                });
                let defaultRoute = (routes.filter(x => x.routeByDefault));
                resolve(defaultRoute[0]);
            });
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