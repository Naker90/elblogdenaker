function navigator(){

    function getLocationHash(){
        return location.hash.slice(1);
    }

    function render(content){
        document.getElementById('app').innerHTML = content;
    }

    function setHashLocation(location) {
        window.location.hash = location
    }

    return {
        getLocationHash: getLocationHash,
        render: render,
        setHashLocation: setHashLocation
    };
}

module.exports = navigator;