function MarkdownService({showdownWrapper, fileSystemWrapper, printerService}){

    function convertToHtmlFromMarkdownFile({markdownFilePath}){
        return fileSystemWrapper.read({filePath: markdownFilePath})
            .then(markdown => showdownWrapper.convertToHtml({markdown: markdown}))
            .catch(error => printerService.printLog({message: `[+] Can not read file: ${error}`}));
    }

    return {
        convertToHtmlFromMarkdownFile: convertToHtmlFromMarkdownFile
    };
}

module.exports = MarkdownService;