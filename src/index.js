require("./styles/main-style.css");
require("./styles/responsive-style.css");

const RouterFactory = require("./router/factory");

let router = RouterFactory.router();

setInterval(() => router.resolveCurrentRoute(), 200);
