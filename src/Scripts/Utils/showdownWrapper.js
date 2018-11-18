const showdown = require("showdown");

function showdownWrapper(){

    let converter = new showdown.Converter();

    function convertToHtml(markdown){
        return converter.makeHtml(markdown);
    }

    return {
        converterToHtml: convertToHtml
    }
}

module.exports = showdownWrapper;