function navigatorContract(){
    return {
        getLocationHash: function (){},
        render: function (){},
        setHashLocation: function (){}
    }
}

function navigator(){

    let contract = navigatorContract();

    function getLocationHash(){
        return location.hash.slice(1);
    }

    function render(content){
        document.getElementById('app').innerHTML = content;
    }

    function setHashLocation(location) {
        window.location.hash = location
    }

    contract.getLocationHash = getLocationHash;
    contract.render = render;
    contract.setHashLocation = setHashLocation;
    return contract;
}

module.exports = {
    navigator: navigator,
    navigatorContract: navigatorContract
};