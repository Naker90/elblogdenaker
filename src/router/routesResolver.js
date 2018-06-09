window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolver(route){
            return new Promise(resolve => {
                routes.map(x => {
                    if(x.route === route){
                        resolve(x)
                    }
                });
                resolve(routes.filter(x => x.byDefault));
            });
        }

        return {
            getRouteSolver: getRouteSolver
        }
    }

    function createRoutesResolver(routes){
        return routesResolver(routes)
    }

    NakerNoventa.RoutesResolver = routesResolver;
    NakerNoventa.CreateRoutesResolver = createRoutesResolver;

})(window.NakerNoventa);