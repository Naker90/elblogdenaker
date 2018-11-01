require("./Content/styles/main-style.css");
require("./Content/styles/responsive-style.css");
const routerFactory = require("./Factories/routerFactory");

function start(){
    let routesResolver = routerFactory.createRoutesResolver();
    routesResolver.init();
}

start();
