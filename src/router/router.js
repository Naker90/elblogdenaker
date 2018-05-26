window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function Router(){

        function initialize(){
            setInterval(() => {
                let route = NakerNoventa.Navigator.getLocationHash();
                NakerNoventa.Routes.getRouteSolver(route, successCallback);
            }, 500);

            function successCallback(solver){
                solver.solve();
            }
        }

        return {
            initialize: initialize
        };
    }

    NakerNoventa.Router = Router();

})(window.NakerNoventa);
