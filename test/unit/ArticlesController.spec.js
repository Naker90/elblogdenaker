const ArticleController = require("../../src/App/Article/Controllers/ArticleController");
const ArticleView = require("../../src/App/Article/Views/ArticleView");
const FileReaderService = require("../../src/App/Services/FileReaderService");
const JestUtils = require("../utils/JestUtils");

describe("not found controller tests", () => {

    let controller, view, fileReaderService;

    beforeEach(() => {
        view = JestUtils.mockAllMethods({obj: ArticleView({})});
        fileReaderService = JestUtils.mockAllMethods({obj: FileReaderService({})});
        controller = ArticleController({view: view, fileReaderService: fileReaderService});
    });

    it("renders article", () => {
        let context = {
          params: {
              year: "2018",
              month: "05",
              day: "10",
              articleName: "anyArticleName"
          }
        };
        fileReaderService.read
            .mockImplementation(({filePath, successCallback, errorCallback}) => {
                expect(filePath).toEqual("./articles/2018/05/10/anyArticleName.html");
                return successCallback("any html");
            });


        controller.execute(context);

        expect(view.render).toHaveBeenCalledWith({content: "any html"});
    });
});