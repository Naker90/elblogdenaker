function ListRepository({ajaxClientRepository, trelloAuthenticationRepository}){

    return {
        getListsBy: getListsBy
    };

    async function getListsBy({boardId}){
        let serializedLists = await ajaxClientRepository.get({
            url: `https://api.trello.com/1/boards/${boardId}/?fields=name&lists=all&list_fields=id,name&key=${trelloAuthenticationRepository.apiKey}&token=${trelloAuthenticationRepository.apiToken}`
        });
        let lists = JSON.parse(serializedLists );
        return lists .lists;
    }
}

module.exports = ListRepository;
