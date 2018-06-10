window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function router(navigator, routes){

        async function resolveRoute(){
            let path = navigator.getLocationHash();
            return await routes.getRouteSolverHandler(path);
        }

        return {
            resolveRoute: resolveRoute
        };
    }

    function createRouter(navigator, routes){
        return router(navigator, routes)
    }

    NakerNoventa.Router = router;
    NakerNoventa.CreateRouter = createRouter;

})(window.NakerNoventa);
