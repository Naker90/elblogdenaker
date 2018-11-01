const articleList = require("./../Home/Views/articlesList.jsx");
const homeView = require("./../Home/Views/homeView");
const homePresenter = require("./../domain/home/homePresenter");
const articlesList = require("../articles/articles");

export const createHomePresenter = () => {
    let view = homeView(articleList());
    return homePresenter(view, articlesList.articles)
};
