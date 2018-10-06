const page = require("page");
const HomeController = require("./homeController");

function router(){

    function registerRoutes(){
        page("/", HomeController())
    }

    return {
        registerRoutes: registerRoutes
    }
}

module.exports = router();