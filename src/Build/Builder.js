function Builder({articles, folderService, markdownService, fileSystemWrapper}){

    let self = this;

    self.build = () => {
        articles.forEach((article) => {
            let path = folderService.createDirStructureByDate({
                articleDate : article.date
            });
            let htmlContent = markdownService.convertToHtmlFromMarkdownFile({
                markdownFilePath: article.markdownFilePath
            });
            fileSystemWrapper.write({
                content: htmlContent,
                outputPath: path + "/" + article.htmlFileName
            });
        });
    };

    return self;
}

module.exports = Builder;