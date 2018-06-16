require("./styles/main-style.css");
require("./styles/responsive-style.css");

require("./utils/navigator");

require("./router/router");
require("./router/routes");

window.NakerNoventa = window.NakerNoventa || {};

let router = NakerNoventa.Router(NakerNoventa.Navigator(), NakerNoventa.Routes);
setInterval(() => router.resolveRoute().solve(), 200);
