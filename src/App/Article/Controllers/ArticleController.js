function ArticleController({view, fileReaderService}){

    function execute(ctx){
        let path = `./articles/${ctx.params.year}/${ctx.params.month}/${ctx.params.day}/${ctx.params.articleName}.html`;
        fileReaderService.read({
            file: path,
            successCallback: html => view.render({content: html}),
            errorCallback: () => view.render({content: "Articulo no encontrado."})
        });
    }

    return {
        execute: execute
    }
}

module.exports = ArticleController;