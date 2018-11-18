function builder(articles, dirCreator, markdownConverter){

    function build() {

        articles.forEach((article) => {
            let date = getDate(article.date);
            createArticleDirectory(date);
            markdownConverter.convertToHtml(article.markdownPath, "/" + date.year + "/" + date.month + "/" + date.day + "/")
        });

        return;

        function createArticleDirectory(date){
            dirCreator.mkdir(date.year);
            dirCreator.mkdir(date.year + "/" + date.month);
            dirCreator.mkdir(date.year + "/" + date.month + "/" + date.day);
        }

        function getDate(date){
            let year = date.split("/")[2];
            let month = date.split("/")[1];
            let day = date.split("/")[0];
            return {
                year: year,
                month: month,
                day: day
            }
        }
    }



    return {
        build: build
    }

}

module.exports = builder;