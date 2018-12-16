function HomeController({view, articles}){

    function execute(){
        view.render({articles: articles});
    }

    return {
        execute: execute
    }

}

module.exports = HomeController;