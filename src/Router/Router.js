const page = require("page");

function Router(){

    function registerRoute({route, resolver}){
        page(route, resolver);
    }

    function finish(){
        page();
    }

    return {
        registerRoute: registerRoute,
        finish: finish
    }
}

module.exports = Router;