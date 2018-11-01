jest.mock("../../src/NotFound/Views/notFoundView", () => {
   return {
       render: jest.fn()
   }
});

const notFoundController = require("../../src/NotFound/Controllers/notFoundController");
const notFoundView = require("../../src/NotFound/Views/notFoundView");

describe("not found controller tests", () => {

    let controller;

    beforeEach(() => {
        controller = notFoundController(notFoundView);
    });

    it("renders not found view", () => {
        controller.execute();

        expect(notFoundView.render).toHaveBeenCalled();
    });
});