import NotFoundController from "../../src/App/NotFound/Controllers/NotFoundController";
import NotFoundView from "../../src/App/NotFound/Views/NotFoundView";
import JestUtils from "../utils/JestUtils";

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