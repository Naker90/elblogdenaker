require("./styles/main-style.css");
require("./styles/responsive-style.css");
const router = require("./controllers/router");

function start(){
    router.registerRoutes();
}

start();
