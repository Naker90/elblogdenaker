function LibraryView({renderService}){

    function renderLibrary({library}){
        throw new Error("not implemented");
    }

    function renderEmptyLibrary(){
        throw new Error("not implemented");
    }

    return {
        renderLibrary: renderLibrary,
        renderEmptyLibrary: renderEmptyLibrary
    }
}

module.exports = LibraryView;
