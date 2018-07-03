const HomeController = require("../controllers/homeController");

module.exports = [
    {
        route: 'home',
        resolve: HomeController,
        routeByDefault: true
    }
];





