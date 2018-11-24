function MarkdownService({showdownWrapper, fileSystemWrapper}){

    let self = this;

    self.convertToHtmlFromMarkdownFile = (markdownPath) => {
        let markdown = fileSystemWrapper.read(markdownPath);
        return showdownWrapper.convertToHtml(markdown);
    };
}

module.exports = MarkdownService;