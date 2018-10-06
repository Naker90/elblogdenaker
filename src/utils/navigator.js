function navigatorContract(){
    return {
        render: function (){},
    }
}

function navigator(){

    let contract = navigatorContract();

    function render(content){
        document.getElementById('app').innerHTML = content;
    }

    contract.render = render;
    return contract;
}

module.exports = {
    navigator: navigator,
    navigatorContract: navigatorContract
};