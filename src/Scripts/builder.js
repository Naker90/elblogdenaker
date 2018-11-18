function builder(articles, dirCreator, markdownConverter){

    function build() {

        articles.forEach((article) => {
            let date = getDate(article.date);
            createArticleDirectory(date);
            markdownConverter.convertToHtml(
                article.markdownPath,
                date.year + "/" + date.month + "/" + date.day)
        });

        function createArticleDirectory(date){
            dirCreator.mkdir(date.year);
            dirCreator.mkdir(date.year + "/" + date.month);
            dirCreator.mkdir(date.year + "/" + date.month + "/" + date.day);
        }

        function getDate(date){
            let splitDate = date.split("/");
            return {
                year: splitDate[2],
                month: splitDate[1],
                day: splitDate[0]
            }
        }
    }

    return {
        build: build
    }

}

module.exports = builder;