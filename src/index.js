require("./styles/main-style.css");
require("./styles/responsive-style.css");

require("./utils/navigator");

require("./router/router");
require("./router/routes");

window.NakerNoventa = window.NakerNoventa || {};

setInterval(() => resolveRoutes(), 200);

function resolveRoutes(){
    const router = NakerNoventa.Router(
        NakerNoventa.Navigator(),
        NakerNoventa.Routes);
    let resolver = router.resolveRoute();
    resolver.resolve();
}
