function LibraryController({view}){

    return {
        execute: execute
    };

    function execute(){
        view.render();
    }
}

module.exports = LibraryController;
