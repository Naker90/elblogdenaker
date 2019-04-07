function LibraryRepository({boardRepository, listRepository, cardRepository, memoryCacheService}){

    return {
        getAll: getAll
    };

    async function getAll(){
        let library = [];
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
