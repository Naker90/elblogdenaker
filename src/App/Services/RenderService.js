import ReactDom from "react-dom";

function RenderService(){

    const APP_CONTAINER_ID = "app";

    function render({content}){
        let appContainer = document.getElementById(APP_CONTAINER_ID);
        ReactDom.unmountComponentAtNode(appContainer);
        appContainer.innerHTML = content;
    }

    function reactRender({component}){
        ReactDom.render(
            component,
            document.getElementById(APP_CONTAINER_ID))
    }

    return {
        render: render,
        reactRender: reactRender
    };
}

module.exports = RenderService;