window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolver(route){
            return new Promise(resolve => {
                let routeSolver = getRouteSolverIfThereIsAMatch(route);
                if(!routeSolver){
                    routeSolver = getRouteSolverByDefault();
                }
                resolve(routeSolver);
            });
        }

        function getRouteSolverIfThereIsAMatch(route) {
            return routes.filter(x => x.route === route)[0];
        }

        function getRouteSolverByDefault () {
            return routes.filter(x => x.routeByDefault)[0];
        }

        return {
            getRouteSolver: getRouteSolver
        }
    }

    NakerNoventa.RoutesResolver = routesResolver;

})(window.NakerNoventa);