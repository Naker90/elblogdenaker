function LibraryController({view, libraryRepository}){

    return {
        execute: execute
    };

    async function execute(){
        let library = await libraryRepository.getAll();
        if(library.length > 0){
            return view.renderLibrary({library: library});
        }
        return view.renderEmptyLibrary()
    }
}

module.exports = LibraryController;
