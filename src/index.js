require("./styles/main-style.css");
require("./styles/responsive-style.css");

const Navigator = require("./utils/navigator");

const Router = require("./router/router");
const Routes = require("./router/routes");

setInterval(() => resolveRoutes(), 200);

function resolveRoutes(){
    let router = Router(Navigator(), Routes);
    let resolver = router.resolveRoute();
    resolver.resolve();
}
