function BoardRepository({ajaxClientRepository, trelloAuthenticationRepository}){

    return {
        getLibraryBoardId: getLibraryBoardId
    };

    async function getLibraryBoardId(){
        let serializedBoard = await ajaxClientRepository.get({
            url: `https://api.trello.com/1/members/me/boards?key=${trelloAuthenticationRepository.apiKey}&token=${trelloAuthenticationRepository.apiToken}`
        });
        let board = JSON.parse(serializedBoard);
        return board[0].id;
    }
}

module.exports = BoardRepository;
