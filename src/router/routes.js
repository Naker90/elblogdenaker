const HomeController = require("../controllers/homeController");

window.NakerNoventa = window.NakerNoventa || {};

NakerNoventa.Routes = [
    {
        route: 'home',
        resolve: HomeController,
        routeByDefault: true
    }
];





