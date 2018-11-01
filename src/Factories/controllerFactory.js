const navigator = require("../utils/navigator");
const homeController = require("./../Home/Controllers/homeController");
const notFoundController = require("./../NotFound/Controllers/notFoundController");
const homeView = require("./../Home/Views/homeView");
const articlesList = require("../articles/articles");
const articleList = require("./../Home/Views/articlesList.jsx");

export const createHomeController = () => {
    let view = homeView(articleList());
    return homeController(view, articlesList.articles)
};

export const createNotFoundController = () => notFoundController(navigator());
