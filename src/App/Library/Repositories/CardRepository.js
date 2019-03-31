function CardRepository({ajaxClientRepository, trelloAuthenticationRepository}){

    return {
        getCardsBy: getCardsBy
    };

    async function getCardsBy({listId}){
        let serializedCards = await ajaxClientRepository.get({
            url: `https://api.trello.com/1/lists/${listId}/cards?fields=name&key=${trelloAuthenticationRepository.apiKey}&token=${trelloAuthenticationRepository.apiToken}`
        });
        let cards = JSON.parse(serializedCards);
        return cards.map((card) => card.name);
    }
}

module.exports = CardRepository;
