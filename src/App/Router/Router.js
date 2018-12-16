import Page from "page";

function Router(){

    function registerRoute({route, resolver}){
        Page(route, resolver);
    }

    function finish(){
        Page();
    }

    return {
        registerRoute: registerRoute,
        finish: finish
    }
}

module.exports = Router;