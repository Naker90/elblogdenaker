require("./styles/main-style.css");
require("./styles/responsive-style.css");
const routerFactory = require("./router/routerFactory");

function start(){
    let routesResolver = routerFactory.createRoutesResolver();
    routesResolver.init();
}

start();
