require("./styles/main-style.css");
require("./styles/responsive-style.css");
var Routes = require("./router/routes");

console.log("App is running");

setInterval(function(){
    var route = location.hash.slice(1) || 'home';
    window.namespace.getRoute(route);
}, 500);