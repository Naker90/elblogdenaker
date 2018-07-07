const Navigator = require("../utils/navigator");
const Router = require("./router");
const Routes = require("./routes");

function factory(){

    function router(){
        return Router(Navigator.navigator(), Routes)
    }

    return {
        router: router
    }
}

module.export = factory;