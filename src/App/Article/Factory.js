import RenderService from "../Services/RenderService";
import ArticleController from "./ArticleController";
import ArticleView from "./ArticleView";
import FileReaderService from "../Services/FileReaderService";

export const createArticleController = () => {
    let view = ArticleView({renderService: RenderService()});
    return ArticleController({view: view, fileReaderService: FileReaderService()})
};