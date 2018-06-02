require("./styles/main-style.css");
require("./styles/responsive-style.css");
require("./utils/navigator");
require("./router/routes");
require("./router/router");

window.NakerNoventa = window.NakerNoventa || {};

setInterval(() => {
    NakerNoventa.Router.router();
}, 200);
