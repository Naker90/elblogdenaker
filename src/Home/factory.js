const RenderService = require("../Services/RenderService");
const homeController = require("./../Home/Controllers/homeController");
const articles = require("../Articles/articles");
const homeView = require("./Views/homeView.jsx");

export const createHomeController = () => {
    let view = homeView(RenderService());
    return homeController(view, articles)
};