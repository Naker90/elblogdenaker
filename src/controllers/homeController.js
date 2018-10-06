const Navigator = require("../utils/navigator");

function homeController(){
    let navigator = Navigator.navigator();
    navigator.render("Home");
}

module.exports = homeController;