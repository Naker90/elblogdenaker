function MarkdownService({showdownWrapper, fileSystemWrapper}){

    let self = this;

    self.convertToHtmlFromMarkdownFile = ({markdownFilePath}) => {
        let markdown = fileSystemWrapper.read({filePath: markdownFilePath});
        return showdownWrapper.convertToHtml({markdown: markdown});
    };

    return self;
}

module.exports = MarkdownService;