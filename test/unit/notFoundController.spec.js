const NotFoundController = require("../../src/NotFound/Controllers/notFoundController");
const NotFoundView = require("../../src/NotFound/Views/notFoundView");
const JestUtils = require("../utils/JestUtils");

describe("not found controller tests", () => {

    let controller, view;

    beforeEach(() => {
        view = JestUtils.mockAllMethods({obj: NotFoundView()});
        controller = NotFoundController(view);
    });

    it("renders not found view", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalled();
    });
});