import LibraryController from "../../../../src/App/Library/LibraryController"
import LibraryView from "../../../../src/App/Library/LibraryView.jsx"
import JestUtils from "../../../utils/JestUtils";

describe("library controller tests", () => {

    let controller, view;

    beforeEach(() => {
        view = JestUtils.mockAllMethods({obj: LibraryView({})});
        controller = LibraryController({
            view: view
        })
    });

    it("renders library view", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalledWith()
    });
});
