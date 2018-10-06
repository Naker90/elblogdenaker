const router = require("./router");
const routesResolver = require("./routesResolver");

function routerFactory(){

    function createRoutesResolver(){
        return routesResolver(router());
    }

    return {
        createRoutesResolver: createRoutesResolver
    }
}

module.exports = routerFactory();