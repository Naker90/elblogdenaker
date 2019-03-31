function LibraryController({view, libraryRepository}){

    return {
        execute: execute
    };

    async function execute(){
        let library = await libraryRepository.getAll();
        library.length > 0
            ? view.renderLibrary({library: library})
            : view.renderEmptyLibrary();
    }
}

module.exports = LibraryController;
