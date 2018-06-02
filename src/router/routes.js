const HomeController = require("../controllers/homeController");

window.NakerNoventa = window.NakerNoventa || {};

NakerNoventa.Routes = [
    {
        route: 'home',
        solve: HomeController
    }
];