function ArticleView({renderService}){

    function render({content}){
        renderService.render({content: content});
    }

    return {
        render: render
    }
}

module.exports = ArticleView;
