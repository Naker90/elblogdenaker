const RenderService = require("../Services/RenderService");
const ArticleController = require("./Controllers/ArticleController");
const ArticleView = require("./Views/ArticleView");

export const createArticleController = () => {
    let view = ArticleView({renderService: RenderService()});
    return ArticleController({view: view})
};