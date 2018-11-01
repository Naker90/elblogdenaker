jest.mock("../../src/domain/home/homeView", () => {
   return {
       render: jest.fn()
   }
});

const homePresenter = require("../../src/domain/home/homePresenter");
const homeView = require("../../src/Home/Views/homeView");

describe("home presenter tests", () => {

    let articles;

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
        homePresenter(homeView, articles);
    });

    it("shows all articles", () => {
        expect(homeView.render).toHaveBeenCalledWith(articles);
    });
});