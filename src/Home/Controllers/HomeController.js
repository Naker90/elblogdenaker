function HomeController({view, articles}){

    function execute(){
        view.render(articles);
    }

    return {
        execute: execute
    }

}

module.exports = HomeController;