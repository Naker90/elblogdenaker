function builder(articles, dirCreator){

    const distPath = "/dist/articles/";

    function build() {

        articles.forEach((article) => {
            let date = getDate(article.date);
            createArticleDirectory(date);
        });

        return;

        function createArticleDirectory(date){
            dirCreator.mkdir(distPath + date.year);
            dirCreator.mkdir(distPath + date.year + "/" + date.month);
            dirCreator.mkdir(distPath + date.year + "/" + date.month + "/" + date.day);
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