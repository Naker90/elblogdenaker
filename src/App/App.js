import "./Content/styles/main-style.css";
import "./Content/styles/responsive-style.css";
import "./Content/styles/fullscreen-style.css";
import "./Content/styles/articles.css";
import "./Content/styles/normalize.css";
import "./Content/styles/hangman.css";
import * as RouterFactory from "./Router/RouterFactory";

function start(){
    let routesResolver = RouterFactory.createRoutesResolver();
    routesResolver.init();
}

start();
