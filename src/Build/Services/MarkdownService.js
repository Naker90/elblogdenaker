function MarkdownService({showdownWrapper, fileSystemWrapper, printerService}){

    function convertToHtmlFromMarkdownFile({markdownFilePath}){
        return fileSystemWrapper.read({filePath: markdownFilePath})
            .then(markdown => {
                return showdownWrapper.convertToHtml({markdown: markdown})
            })
            .catch(error => {
                printerService.printLog({message: error})
            });
    }

    return {
        convertToHtmlFromMarkdownFile: convertToHtmlFromMarkdownFile
    };
}

module.exports = MarkdownService;