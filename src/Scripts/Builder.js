function Builder({articles, folderService, markdownService, fileSystemWrapper}){

    let self = this;

    self.build = () => {
        articles.forEach((article) => {
            let finalPath = folderService.createDirStructureByDate({
                articleDate : article.date
            });
            let html = markdownService.convertToHtmlFromMarkdownFile({
                markdownFilePath: article.markdownFilePath
            });
            fileSystemWrapper.write({
                content: html,
                outputPath: finalPath + "/" + article.htmlFileName
            });
        });
    };

    return self;
}

module.exports = Builder;