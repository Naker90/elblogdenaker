const page = require("page");
const homeController = require("./homeController");

function routesResolver(){

    function init(){
        page("/", homeController())
    }

    return {
        init: init
    }
}

module.exports = routesResolver();