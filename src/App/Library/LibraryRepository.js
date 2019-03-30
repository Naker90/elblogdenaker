function LibraryRepository({}){
    return {
        getAll: getAll
    };

    function getAll(){
        throw new Error("not implemented");
    }
}

module.exports = LibraryRepository;
