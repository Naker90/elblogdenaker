function Builder({articles, folderService, markdownService, fileSystemWrapper}){

    function build(){
        articles.forEach(async (article) => {
            let path = folderService.createDirStructureByDate({
                articleDate : article.date
            });
            let htmlContent = await markdownService.convertToHtmlFromMarkdownFile({
                markdownFilePath: article.markdownFilePath
            });
            fileSystemWrapper.write({
                content: htmlContent,
                outputPath: path + "/" + article.htmlFileName
            });
        });
    }

    return {
        build: build
    };
}

module.exports = Builder;