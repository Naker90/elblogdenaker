const fs = require("fs");

function ArticleController({view}){

    function execute(ctx){
        let path = `./articles/${ctx.params.year}/${ctx.params.month}/${ctx.params.day}/${ctx.params.articleName}.html`;
        read({
            filePath: path,
            successCallback: html => view.render(html),
            errorCallback: () => view.render("Articulo no encontrado.")
        })
    }

    function read({filePath, successCallback, errorCallback}){
        fs.readFile(filePath, {encoding: "utf-8"}, (error, data) => {
            if(!error) {
                console.log(data);
                successCallback(data);
            } else {
                console.log(error);
                errorCallback();
            }
        });
    }

    return {
        execute: execute
    }

}

module.exports = ArticleController;