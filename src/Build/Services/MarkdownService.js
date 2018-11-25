function MarkdownService({showdownWrapper, fileSystemWrapper}){

    function convertToHtmlFromMarkdownFile({markdownFilePath}){
        return fileSystemWrapper.read({filePath: markdownFilePath})
            .then((markdown) => {
                showdownWrapper.convertToHtml({markdown: markdown})
            });
    }

    return {
        convertToHtmlFromMarkdownFile: convertToHtmlFromMarkdownFile
    };
}

module.exports = MarkdownService;