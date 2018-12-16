import showdown from "showdown";

function ShowdownWrapper(){

    const converter = new showdown.Converter();

    function convertToHtml({markdown}){
        return converter.makeHtml(markdown);
    }

    return {
        convertToHtml: convertToHtml
    };
}

module.exports = ShowdownWrapper;