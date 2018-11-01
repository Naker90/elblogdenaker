function homeView(navigator){

    function render(){
        navigator.render("Not found");
    }

    return {
        render: render
    }
}

module.exports = homeView;
