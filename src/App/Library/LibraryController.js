function LibraryController({view, libraryRepository}){

    return {
        execute: execute
    };

    async function execute(){
        let library = await libraryRepository.getAll();
        if(library.length > 0){
            view.renderLibrary({library: library});
        }
    }
}

module.exports = LibraryController;
