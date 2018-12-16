const NotFoundController = require("../../src/App/NotFound/Controllers/NotFoundController");
const NotFoundView = require("../../src/App/NotFound/Views/NotFoundView");
const JestUtils = require("../utils/JestUtils");

describe("not found controller tests", () => {

    let controller, view;

    beforeEach(() => {
        view = JestUtils.mockAllMethods({obj: NotFoundView({})});
        controller = NotFoundController({view: view});
    });

    it("renders not found view", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalled();
    });
});