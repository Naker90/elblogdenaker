import HomeController from "../../../../src/App/Home/HomeController";
import HomeView from "../../../../src/App/Home/HomeView";
import JestUtils from "../../../utils/JestUtils";

describe("home controller tests", () => {

    let controller, view, articles;

    beforeEach(() => {
        articles = [
            {
                "name": "anyName",
                "description": "anyDescription",
                "date": "anyDate",
                "author": "anyAuthor",
                "route": "anyRoute"
            }
        ];
        view = JestUtils.mockAllMethods({obj: HomeView({})});
        controller = HomeController({view: view, articles: articles});
    });

    it("shows all Articles", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalledWith({articles: articles});
    });
});