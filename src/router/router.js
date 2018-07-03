function router(navigator, routes){

    function resolveRoute(){
        let route = navigator.getLocationHash();
        return getRouteSolver(route);
    }

    function getRouteSolver(route){
        return getRouteSolverIfThereIsAMatch()
            || getRouteSolverByDefault();

        function getRouteSolverIfThereIsAMatch() {
            return routes.filter(x => x.route === route)[0];
        }

        function getRouteSolverByDefault () {
            return routes.filter(x => x.routeByDefault)[0];
        }
    }

    return {
        resolveRoute: resolveRoute
    };
}

module.exports = router;