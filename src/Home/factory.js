const navigator = require("../Utils/navigator");
const homeController = require("./../Home/Controllers/homeController");
const articles = require("../Articles/articles");
const homeView = require("./Views/homeView.jsx");

export const createHomeController = () => {
    let view = homeView(navigator());
    return homeController(view, articles)
};