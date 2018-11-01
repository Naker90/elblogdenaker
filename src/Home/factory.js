const homeController = require("./../Home/Controllers/homeController");
const homeView = require("./../Home/Views/homeView");
const articlesList = require("../Articles/articles");
const articleList = require("./../Home/Views/articlesList.jsx");

export const createHomeController = () => {
    let view = homeView(articleList());
    return homeController(view, articlesList.articles)
};