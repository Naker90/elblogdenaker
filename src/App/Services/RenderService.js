import ReactDom from "react-dom";
import Highlight from "highlight.js";

function RenderService(){

    const APP_CONTAINER_ID = "app";
    const CODE_BLOCKS_TAG_NAME = "code";

    function render({content}){
        const appContainer = document.getElementById(APP_CONTAINER_ID);
        ReactDom.unmountComponentAtNode(appContainer);
        appContainer.innerHTML = content;
    }

    function renderWithCodeBlockHighlighting({content}){
        render({content: content});
        const codeBlocks = document.getElementsByTagName(CODE_BLOCKS_TAG_NAME);
        Array.prototype.forEach.call(codeBlocks, codeBlock => Highlight.highlightBlock(codeBlock));
    }

    function reactRender({component}){
        ReactDom.render(
            component,
            document.getElementById(APP_CONTAINER_ID))
    }

    return {
        render: render,
        renderWithCodeBlockHighlighting: renderWithCodeBlockHighlighting,
        reactRender: reactRender
    };
}

module.exports = RenderService;