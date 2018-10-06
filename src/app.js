require("./styles/main-style.css");
require("./styles/responsive-style.css");

const RouterFactory = require("./router/factory");

let router = RouterFactory.router();
let routeResolver = router.resolveCurrentRoute();

setInterval(() => routeResolver(), 200);
