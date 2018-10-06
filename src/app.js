require("./styles/main-style.css");
require("./styles/responsive-style.css");
const routesResolver = require("./controllers/router");

function start(){
    routesResolver.init();
}

start();
