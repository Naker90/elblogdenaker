function LibraryPresenter({view, libraryRepository}){

    return {
        loadLibrary: loadLibrary
    };

    async function loadLibrary(){
        let library = await libraryRepository.getAll();
        library.length > 0
            ? view.renderLibrary({library: library})
            : view.renderEmptyLibrary();
    }
}

module.exports = LibraryPresenter;
