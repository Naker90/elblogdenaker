jest.mock("../../src/domain/home/homeView", () => {
   return {
       render: jest.fn()
   }
});

const homePresenter = require("../../src/domain/home/homePresenter");
const homeView = require("../../src/domain/home/homeView");

describe("home presenter tests", () => {

    it("shows all articles", () => {
        let articles = [
            {
                "name": "anyName",
                "description": "anyDescription",
                "date": "anyDate",
                "author": "anyAuthor",
                "route": "anyRoute"
            }
        ];
        homePresenter(homeView, articles);

        expect(homeView.render).toHaveBeenCalledWith(articles);
    });

});