require("./styles/main-style.css");
require("./styles/responsive-style.css");
require("./utils/navigator");
require("./router/routes");
require("./router/router");

window.NakerNoventa = window.NakerNoventa || {};
window.addEventListener("hashchange", NakerNoventa.Router.router);
window.location.hash = '#home';
