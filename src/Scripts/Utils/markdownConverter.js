function markdownConverter(basePath){

    function convertToHtml(markdownPath, outPath){
        throw new Error("not implemented");
    }

    return {
        convertToHtml: convertToHtml
    }
}

module.exports = markdownConverter;