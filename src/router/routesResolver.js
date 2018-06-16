window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolverContract(){
        return {
            getRouteSolver: function(){}
        }
    }

    function routesResolver(routes){

        function getRouteSolver(route){
            return getRouteSolverIfThereIsAMatch(route)
                || getRouteSolverByDefault();
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
    NakerNoventa.RoutesResolverContract = routesResolverContract;

})(window.NakerNoventa);