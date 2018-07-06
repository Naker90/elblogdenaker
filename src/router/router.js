function router(navigator, routes){

    function initialize(){
        let resolver = getResolverForCurrentRoute();
        resolver.resolve();
        //navigator.setHashLocation(resolver.route);
    }

    function getResolverForCurrentRoute(){
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
        initialize: initialize,
        resolveRoute: getResolverForCurrentRoute
    };
}

module.exports = router;