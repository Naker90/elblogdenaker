function Builder(articles, folderService){

    let self = this;

    self.build = () => {
        articles.forEach((article) => {
            folderService.createDirStructureByDate(article.date);
        });
    };
}

module.exports = Builder;