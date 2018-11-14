require("./Content/styles/main-style.css");
require("./Content/styles/responsive-style.css");
require("./Content/styles/articles.css");
require("./Content/styles/normalize.css");
const routerFactory = require("./Router/routerFactory");

function start(){
    let routesResolver = routerFactory.createRoutesResolver();
    routesResolver.init();
}

start();
