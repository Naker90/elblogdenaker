function ArticleView({renderService}){

    function render({content}){
        renderService.renderWithCodeBlockHighlighting({content: content});
    }

    return {
        render: render
    }
}

module.exports = ArticleView;
