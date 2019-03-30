function ListRepository({ajaxClientRepository}){

    return {
        getListsBy: getListsBy
    };

    async function getListsBy({boardId}){
        let serializedLists = await ajaxClientRepository.get({
            url: `https://api.trello.com/1/boards/${boardId}/?fields=name&lists=all&list_fields=id,name&key=08a27147750faeb03030d310b919258c&token=4439c681d1629b22c8c14a8f80052c9b950cf524e10b7c8d83a9a38150982eca`
        });
        let lists = JSON.parse(serializedLists );
        return lists .lists;
    }
}

module.exports = ListRepository;
