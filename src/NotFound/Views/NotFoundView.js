function HomeView({renderService}){

    function render(){
        renderService.render({content: "Not found"});
    }

    return {
        render: render
    }
}

module.exports = HomeView;
