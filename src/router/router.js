window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function Router(){

        function router(){
            let route = NakerNoventa.Navigator.getLocationHash();
            NakerNoventa.Routes.getRouteSolver(route, successCallback);

            function successCallback(solver){
                solver.solve();
            }
        }

        return {
            router: router
        };
    }

    NakerNoventa.Router = Router();

})(window.NakerNoventa);
