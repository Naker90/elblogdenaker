function homeView(renderService){

    function render(){
        renderService.render("Not found");
    }

    return {
        render: render
    }
}

module.exports = homeView;
