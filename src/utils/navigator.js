function navigator(){

    function render(content){
        document.getElementById('app').innerHTML = content;
    }

    return {
        render: render
    };
}

module.exports = navigator;