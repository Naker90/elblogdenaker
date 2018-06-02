require("./styles/main-style.css");
require("./styles/responsive-style.css");
require("./utils/navigator");
require("./router/router");

window.NakerNoventa = window.NakerNoventa || {};
let router = NakerNoventa.CreateRouter(NakerNoventa.Navigator);

setInterval(() => {
    router.resolveRoute();
}, 200);
