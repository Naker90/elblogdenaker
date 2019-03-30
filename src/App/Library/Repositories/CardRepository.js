function CardRepository({ajaxClientRepository}){

    return {
        getCardsBy: getCardsBy
    };

    async function getCardsBy({listId}){
        let serializedCards = await ajaxClientRepository.get({
            url: `https://api.trello.com/1/lists/${listId}/cards?fields=name&key=08a27147750faeb03030d310b919258c&token=4439c681d1629b22c8c14a8f80052c9b950cf524e10b7c8d83a9a38150982eca`
        });
        let cards = JSON.parse(serializedCards);
        return cards.map((card) => card.name);
    }
}

module.exports = CardRepository;
