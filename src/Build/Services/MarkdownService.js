function MarkdownService({showdownWrapper, fileSystemWrapper}){

    function convertToHtmlFromMarkdownFile({markdownFilePath}){
        let markdown = fileSystemWrapper.read({filePath: markdownFilePath});
        return showdownWrapper.convertToHtml({markdown: markdown});
    }

    return {
        convertToHtmlFromMarkdownFile: convertToHtmlFromMarkdownFile
    };
}

module.exports = MarkdownService;