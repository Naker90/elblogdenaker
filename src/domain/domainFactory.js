const articleList = require("./home/articlesList.jsx");
const homeView = require("./home/homeView");
const homePresenter = require("./home/homePresenter");
const articlesList = require("../articles/articles");

export const createHomePresenter = () => {
    let view = homeView(articleList());
    return homePresenter(view, articlesList.articles)
};
