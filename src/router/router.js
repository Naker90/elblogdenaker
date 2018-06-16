window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function router(navigator, routeSolver){

        function resolveRoute(){
            let path = navigator.getLocationHash();
            return routeSolver.getRouteSolver(path);
        }

        return {
            resolveRoute: resolveRoute
        };
    }

    NakerNoventa.Router = router;

})(window.NakerNoventa);
