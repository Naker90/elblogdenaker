const showdown = require("showdown");

function ShowdownWrapper(){

    const classMap = {
        h2: "article-title",
        h3: "article-subtitle",
        p: "article-paragraph",
        pre: "article-code"
    };

    const bindings = Object.keys(classMap)
        .map(key => ({
           type: "output",
           regex: new RegExp(`<${key}\/?>(.*)`, "g"),
           replace: `<${key} class='${classMap[key]}'>$1`
        }));

    const converter = new showdown.Converter({
        extensions: [...bindings],
        omitExtraWLInCodeBlocks: true,
        noHeaderId: true
    });

    function convertToHtml({markdown}){
        return converter.makeHtml(markdown);
    }

    return {
        convertToHtml: convertToHtml
    };
}

module.exports = ShowdownWrapper;