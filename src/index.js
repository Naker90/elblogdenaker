require("./styles/main-style.css");
require("./styles/responsive-style.css");
require("./utils/navigator");
require("./router/routesResolver");
require("./router/router");

window.NakerNoventa = window.NakerNoventa || {};

let router = NakerNoventa.CreateRouter(
    NakerNoventa.Navigator(),
    NakerNoventa.Routes());

setInterval(() => {
    router.resolveRoute()
        .then(x => x.solve());
}, 200);
