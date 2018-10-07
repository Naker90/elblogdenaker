const page = require("page");

function router(){

    function registerRoute(route, resolver){
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

module.exports = router;