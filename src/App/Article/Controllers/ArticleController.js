function ArticleController({view, fileReaderService}){

    function execute(ctx){
        fileReaderService.read({
            file: buildPath({context: ctx}),
            successCallback: html => view.render({content: html}),
            errorCallback: () => view.render({content: "Articulo no encontrado."})
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