function LibraryView({renderService}){

    function renderLibrary({library}){
        throw new Error("not implemented");
    }

    return {
        renderLibrary: renderLibrary
    }
}

module.exports = LibraryView;
