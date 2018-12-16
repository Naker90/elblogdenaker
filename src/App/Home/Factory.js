const RenderService = require("../Services/RenderService");
const HomeController = require("./Controllers/HomeController");
const HomeView = require("./Views/HomeView.jsx");
const articles = require("../Articles/articles");

export const createHomeController = () => {
    let view = HomeView({renderService: RenderService()});
    return HomeController({view: view, articles: articles})
};