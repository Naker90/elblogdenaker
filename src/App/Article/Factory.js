import RenderService from "../Services/RenderService";
import ArticleController from "./ArticleController";
import ArticleView from "./ArticleView";
import FileReaderService from "../Services/FileReaderService";
import * as NotFoundFactory from "../NotFound/Factory";

export const createArticleController = () => {
    let view = ArticleView({renderService: RenderService()});
    return ArticleController({
        notFoundController: NotFoundFactory.createNotFoundController(),
        view: view,
        fileReaderService: FileReaderService()})
};