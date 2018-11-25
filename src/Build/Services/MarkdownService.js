function MarkdownService({showdownWrapper, fileSystemWrapper}){

    function convertToHtmlFromMarkdownFile({markdownFilePath}){
        fileSystemWrapper.read({filePath: markdownFilePath})
            .then((markdown) => {
                return showdownWrapper.convertToHtml({markdown: markdown})
            });
    }

    return {
        convertToHtmlFromMarkdownFile: convertToHtmlFromMarkdownFile
    };
}

module.exports = MarkdownService;