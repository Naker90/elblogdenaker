function BoardRepository({ajaxClientRepository}){

    return {
        getLibraryBoardId: getLibraryBoardId
    };

    async function getLibraryBoardId(){
        let serializedBoard = await ajaxClientRepository.get({
            url: "https://api.trello.com/1/members/me/boards?key=08a27147750faeb03030d310b919258c&token=4439c681d1629b22c8c14a8f80052c9b950cf524e10b7c8d83a9a38150982eca"
        });
        let board = JSON.parse(serializedBoard);
        return board[0].id;
    }
}

module.exports = BoardRepository;
