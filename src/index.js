require("./styles/main-style.css");
require("./styles/responsive-style.css");
require("./Utils/navigator");
require("./router/routes");

window.NakerNoventa = window.NakerNoventa || {};

setInterval(() => {
    let route = NakerNoventa.Navigator.getLocationHash();
    window.NakerNoventa.getRoute(route);
}, 500);