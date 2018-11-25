const ReactDom = require("react-dom");

function RenderService(){

    const APP_CONTAINER = "app";

    function render(content){
        document.getElementById(APP_CONTAINER).innerHTML = content;
    }

    function reactRender(component){
        ReactDom.render(
            component,
            document.getElementById(APP_CONTAINER))
    }

    return {
        render: render,
        reactRender: reactRender
    };
}

module.exports = RenderService;