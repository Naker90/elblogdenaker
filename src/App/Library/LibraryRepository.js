function LibraryRepository({boardRepository, listRepository, cardRepository}){

    return {
        getAll: getAll
    };

    async function getAll(){
        let libraryBoardId = await boardRepository.getLibraryBoardId();
        let libraryLists = await listRepository.getListsBy({
            boardId: libraryBoardId
        });
        return libraryLists
            ? await BuildLibraryFrom({lists: libraryLists})
            : [];

        async function BuildLibraryFrom({lists}){
            let library = [];
            await lists.forEach((list) => {
                let cards = cardRepository.getCardsBy({listId: list.id});
                library.push({bookcase: list.name, books: cards});
            });
            return library;
        }
    }
}

module.exports = LibraryRepository;
