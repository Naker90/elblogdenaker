const Navigator = require("../utils/navigator");

function test(){
    let navigator = Navigator.navigator();
    navigator.render("Estás en la home");
}

module.exports = test;