require("./styles/main-style.css");
require("./styles/responsive-style.css");

require("./utils/navigator");

require("./router/routes");
require("./router/routesResolver");
require("./router/router");

window.NakerNoventa = window.NakerNoventa || {};

let routerResolver = NakerNoventa.CreateRoutesResolver(
    NakerNoventa.Routes);

let router = NakerNoventa.CreateRouter(
    NakerNoventa.Navigator(),
    routerResolver);

setInterval(() => {
    router.resolveRoute()
        .then(x => x.solve());
}, 200);
