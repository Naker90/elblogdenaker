function MarkdownService({showdownWrapper, fileSystemWrapper}){

    let self = this;

    self.convertToHtml = (markdownPath) => {
        let markdown = fileSystemWrapper.read(markdownPath);
        return showdownWrapper.convertToHtml(markdown);
    };
}

module.exports = MarkdownService;