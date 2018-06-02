window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function router(navigator, routes){

        function router(){
            let route = navigator.getLocationHash();
            routes.getRouteSolver(route, successCallback);

            function successCallback(solver){
                solver.solve();
            }
        }

        return {
            router: router
        };
    }

    function createRouter(navigator, routes){
        return router(navigator, routes)
    }

    NakerNoventa.CreateRouter = createRouter;


})(window.NakerNoventa);
