function homeView(articlesListView){

    function render(articles){
        articlesListView.render(articles);
    }

    return {
        render: render
    }
}

module.exports = homeView;
