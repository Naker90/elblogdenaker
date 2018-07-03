function navigator(){
    const HOME_ROUTE = 'home';

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

    return {
        getLocationHash: getLocationHash,
        render: render,
        setHashLocation: setHashLocation,
        addWindowEventLister: addWindowEventLister
    };
}

module.exports = navigator;