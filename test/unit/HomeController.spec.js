jest.mock("../../src/App/Home/Views/HomeView", () => {
   return {
       render: jest.fn()
   }
});

import HomeController from "../../src/App/Home/Controllers/HomeController";
import HomeView from "../../src/App/Home/Views/HomeView";

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
        view = HomeView;
        controller = HomeController({view: view, articles: articles});
    });

    it("shows all Articles", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalledWith({articles: articles});
    });
});