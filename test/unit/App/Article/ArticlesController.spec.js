import ArticleController from "../../../../src/App/Article/ArticleController";
import NotFoundController from "../../../../src/App/NotFound/NotFoundController";
import ArticleView from "../../../../src/App/Article/ArticleView";
import FileReaderService from "../../../../src/App/Services/FileReaderService";
import JestUtils from "../../../utils/JestUtils";

describe("not found controller tests", () => {

    let controller, notFoundController,  view, fileReaderService, context;

    beforeEach(() => {
        context = {
            params: {
                year: "2018",
                month: "05",
                day: "10",
                articleName: "anyArticleName"
            }
        };
        notFoundController = JestUtils.mockAllMethods({obj: NotFoundController({})});
        view = JestUtils.mockAllMethods({obj: ArticleView({})});
        fileReaderService = JestUtils.mockAllMethods({obj: FileReaderService({})});
        controller = ArticleController({
            notFoundController: notFoundController,
            view: view,
            fileReaderService: fileReaderService});
    });

    it("renders not found", () => {
        fileReaderService.read
            .mockImplementation(({filePath, successCallback, errorCallback}) => {
                expect(filePath).toEqual("./articles/2018/05/10/anyArticleName.html");
                return errorCallback();
            });

        controller.execute(context);

        expect(notFoundController.execute).toHaveBeenCalled();
    });

    it("renders article", () => {
        fileReaderService.read
            .mockImplementation(({filePath, successCallback}) => {
                expect(filePath).toEqual(`./articles/${context.params.year}/${context.params.month}/${context.params.day}/${context.params.articleName}.html`);
                return successCallback("any html");
            });

        controller.execute(context);

        expect(view.render).toHaveBeenCalledWith({content: "any html"});
    });
});