function LibraryView({renderService}) {

    return {
        renderLibrary: renderLibrary,
        renderEmptyLibrary: renderEmptyLibrary
    };

    function renderLibrary(){
        renderService.reactRender({component: <Library />});
    }

    function renderEmptyLibrary(){
        renderService.reactRender({component: <Library />});
    }
}

module.exports = LibraryView;
