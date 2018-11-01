require("./Content/styles/main-style.css");
require("./Content/styles/responsive-style.css");
const routerFactory = require("./Router/routerFactory");

function start(){
    let routesResolver = routerFactory.createRoutesResolver();
    routesResolver.init();
}

start();
