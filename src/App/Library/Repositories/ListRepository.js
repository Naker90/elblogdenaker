function ListRepository({ajaxClientRepository, trelloAuthenticationRepository}){

    return {
        getListsBy: getListsBy
    };

    async function getListsBy({boardId}){
        let serializedLists = await ajaxClientRepository.get({
            url: `https://api.trello.com/1/boards/${boardId}/?fields=name&lists=all&list_fields=id,name&key=${trelloAuthenticationRepository.apiKey}&token=${trelloAuthenticationRepository.apiToken}`
        });
        return JSON.parse(serializedLists).lists;
    }
}

module.exports = ListRepository;
