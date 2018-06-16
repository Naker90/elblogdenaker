window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolverHandler(route){
            return new Promise(resolve => {
                let routeSolver = routes.filter(x => x.route === route)[0];
                if(!routeSolver){
                    routeSolver = routes.filter(x => x.routeByDefault)[0];
                }
                resolve(routeSolver);
            });
        }

        return {
            getRouteSolverHandler: getRouteSolverHandler
        }
    }

    NakerNoventa.RoutesResolver = routesResolver;

})(window.NakerNoventa);