function ArticleController({view}){

    function execute(ctx){
        let path = `./articles/${ctx.params.year}/${ctx.params.month}/${ctx.params.day}/${ctx.params.articleName}.html`;
        read2({
            file: path,
            successCallback: html => view.render({content: html}),
            errorCallback: () => view.render({content: "Articulo no encontrado."})
        });
    }

    function read2({file, successCallback, errorCallback})
    {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    return successCallback(rawFile.responseText);
                }
            }
        };
        rawFile.send();
    }

    return {
        execute: execute
    }

}

module.exports = ArticleController;