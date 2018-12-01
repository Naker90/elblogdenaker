jest.mock("../../src/Home/Views/homeView", () => {
   return {
       render: jest.fn()
   }
});

const HomeController = require("../../src/Home/Controllers/homeController");
const HomeView = require("../../src/Home/Views/homeView");

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
        controller = HomeController(view, articles);
    });

    it("shows all Articles", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalledWith(articles);
    });
});