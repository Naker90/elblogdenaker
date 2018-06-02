window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function router(navigator, routes){

        function resolveRoute(){
            let path = navigator.getLocationHash();
            routes.getRouteSolver(path, successCallback);

            function successCallback(solver){
                solver.solve();
            }
        }

        return {
            resolveRoute: resolveRoute
        };
    }

    function createRouter(navigator, routes){
        return router(navigator, routes)
    }

    NakerNoventa.CreateRouter = createRouter;


})(window.NakerNoventa);
