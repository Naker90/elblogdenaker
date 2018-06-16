window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function router(navigator, routes){

        function resolveRoute(){
            let path = navigator.getLocationHash();
            return routes.getRouteSolver(path);
        }

        return {
            resolveRoute: resolveRoute
        };
    }

    NakerNoventa.Router = router;

})(window.NakerNoventa);
