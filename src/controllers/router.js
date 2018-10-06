const page = require("page");
const HomeController = require("./HomeController");

function router(){

    function registerRoutes(){
        page("/", HomeController)
    }

    return {
        registerRoutes: registerRoutes
    }
}

module.exports = router();