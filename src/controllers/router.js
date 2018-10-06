const page = require("page");
const homeController = require("./homeController");

function router(){

    function registerRoutes(){
        page("/", homeController())
    }

    return {
        registerRoutes: registerRoutes
    }
}

module.exports = router();