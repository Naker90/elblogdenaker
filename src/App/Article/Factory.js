const RenderService = require("../Services/RenderService");
const ArticleController = require("./Controllers/ArticleController");
const ArticleView = require("./Views/ArticleView");
const FileReaderService = require("../Services/FileReaderService");

export const createArticleController = () => {
    let view = ArticleView({renderService: RenderService()});
    return ArticleController({view: view, fileReaderService: FileReaderService()})
};