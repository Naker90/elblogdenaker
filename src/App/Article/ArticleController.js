function ArticleController({notFoundController, view, fileReaderService}){

    function execute(ctx){
        fileReaderService.read({
            filePath: buildPath({context: ctx}),
            successCallback: html => view.render({content: html}),
            errorCallback: () => notFoundController.execute()
        });

        function buildPath({context}){
            return `./articles/${context.params.year}/${context.params.month}/${context.params.day}/${context.params.articleName}.html`;
        }
    }

    return {
        execute: execute
    }
}

module.exports = ArticleController;