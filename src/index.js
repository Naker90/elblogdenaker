require("./styles/main-style.css");
require("./styles/responsive-style.css");

require("./utils/navigator");

require("./router/routes");
require("./router/routesResolver");
require("./router/router");

window.NakerNoventa = window.NakerNoventa || {};

let routerResolver = NakerNoventa.RoutesResolver(
    NakerNoventa.Routes);

let router = NakerNoventa.Router(
    NakerNoventa.Navigator(),
    routerResolver);

setInterval(() => {
    router.resolveRoute()
        .then(x => x.solve());
}, 200);
