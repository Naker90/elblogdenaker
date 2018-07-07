require("./styles/main-style.css");
require("./styles/responsive-style.css");

const Navigator = require("./utils/navigator");

const Router = require("./router/router");
const Routes = require("./router/routes");

let navigator = Navigator.navigator();
let router = Router(navigator, Routes);

setInterval(() => router.resolveCurrentRoute(), 200);
