const Showdown = require("showdown");

function markdownConverter(){

    function makeHtmlFromMarkdown(markdown){
        let converter = Showdown.Converter();
        return converter.makeHtml(markdown);
    }

    return {
        makeHtmlFromMarkdown: makeHtmlFromMarkdown
    }
}

module.exports = markdownConverter;