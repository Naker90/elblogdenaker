import Page from "page";

function Router(){

    function registerRoute({route, resolver}){
        Page(route, resolver);
    }

    function finish(){
        Page({hashbang : true});
    }

    return {
        registerRoute: registerRoute,
        finish: finish
    }
}

module.exports = Router;