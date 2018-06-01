window.NakerNoventa = window.NakerNoventa || {};

((NakerNoventa) => {

    function NavigatorContract(){
        return {
            getLocationHash: function(){},
            render: function(){},
            setHashLocation: function() {},
            addWindowEventLister: function() {}
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

        function setHashLocation(location) {
            window.location.hash = location
        }

        function addWindowEventLister(event, func) {
            window.addEventListener(event, func);
        }

        contract.getLocationHash = getLocationHash;
        contract.render = render;
        contract.setHashLocation = setHashLocation;
        contract.addWindowEventLister = addWindowEventLister;
        return contract;
    }

    NakerNoventa.Navigator = Navigator();

})(window.NakerNoventa);