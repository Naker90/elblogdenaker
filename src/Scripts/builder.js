function builder(articles, folderService){

    function build() {
        articles.forEach((article) => {
            folderService.createDirStructureByDate(article.date);
        });
    }

    return {
        build: build
    }

}

module.exports = builder;