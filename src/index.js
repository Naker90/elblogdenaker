require("./styles/main-style.css");
require("./styles/responsive-style.css");

const Navigator = require("./utils/navigator");

const Router = require("./router/router");
const Routes = require("./router/routes");

setInterval(() => initializeRouter(), 200);

function initializeRouter(){
    let navigator = Navigator();
    let router = Router(navigator, Routes);
    let resolver = router.resolveRoute();
    resolver.resolve();
    navigator.setHashLocation(resolver.route);
}
