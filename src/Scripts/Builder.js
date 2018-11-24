function Builder(articles, folderService, markdownService, fileSystemWrapper){

    let self = this;

    self.build = () => {
        articles.forEach((article) => {
            let finalPath = folderService.createDirStructureByDate(article.date);
            let html = markdownService.convertToHtmlFromMarkdownFile(article.markdownFilePath);
            fileSystemWrapper.write(html, finalPath + "/" + article.htmlFileName);
        });
    };
}

module.exports = Builder;