window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function NavigatorContract(){
        return {
            getLocationHash: function(){},
            render: function(){}
        }
    }

    function Navigator(){
        const HOME_ROUTE = 'home';
        let contract = NavigatorContract();

        function getLocationHash(){
            return location.hash.slice(1) || HOME_ROUTE;
        }

        function render(content){
            document.getElementById('app').innerHTML = content;
        }

        contract.getLocationHash = getLocationHash;
        contract.render = render;
        return contract;
    }

    NakerNoventa.Navigator = Navigator();

})(window.NakerNoventa);