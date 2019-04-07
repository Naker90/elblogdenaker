function LibraryRepository({boardRepository, listRepository, cardRepository, memoryCacheService}){

    const LIBRARY_CACHE_KEY = "library";

    return {
        getAll: getAll
    };

    async function getAll(){
        let library = [];
        if(memoryCacheService.exist({key: LIBRARY_CACHE_KEY})){
            return memoryCacheService.get({key: LIBRARY_CACHE_KEY});
        }
        return boardRepository
            .getLibraryBoardId()
            .then((libraryBoardId) => listRepository.getListsBy({boardId: libraryBoardId})
            .then((lists) => {
                lists.forEach(async (list) => {
                    let cards = await cardRepository.getCardsBy({listId: list.id});
                    library.push({bookcase: list.name, books: cards});
                });
                return library;
            })
            .then(() => library))
            .catch(() => []);
    }
}

module.exports = LibraryRepository;
