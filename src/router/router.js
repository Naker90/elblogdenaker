const page = require("page");

function router(){

    function registerRoute(route, resolver){
        page(route, resolver);
    }

    return {
        registerRoute: registerRoute
    }
}

module.exports = router;