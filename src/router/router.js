window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function router(navigator, routes){

        function resolveRoute(){
            let route = navigator.getLocationHash();
            return getRouteSolver(route);
        }

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
            resolveRoute: resolveRoute
        };
    }

    NakerNoventa.Router = router;

})(window.NakerNoventa);
