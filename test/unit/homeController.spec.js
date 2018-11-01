jest.mock("../../src/Home/Views/homeView", () => {
   return {
       render: jest.fn()
   }
});

const homeController = require("../../src/Home/Controllers/homeController");
const homeView = require("../../src/Home/Views/homeView");

describe("home controller tests", () => {

    let controller, articles;

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
        controller = homeController(homeView, articles);
    });

    it("shows all Articles", () => {
        controller.execute();

        expect(homeView.render).toHaveBeenCalledWith(articles);
    });
});