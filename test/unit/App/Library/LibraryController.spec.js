import LibraryController from "../../../../src/App/Library/LibraryController"
import LibraryRepository from "../../../../src/App/Library/LibraryRepository"
import LibraryView from "../../../../src/App/Library/LibraryView.jsx"
import JestUtils from "../../../utils/JestUtils";

describe("library controller tests", () => {

    let controller, view, libraryRepository;

    beforeEach(() => {
        libraryRepository = JestUtils.mockAllMethods({obj: LibraryRepository({})});
        view = JestUtils.mockAllMethods({obj: LibraryView({})});
        controller = LibraryController({
            view: view,
            libraryRepository: libraryRepository
        })
    });

    it("renders library view", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalledWith()
    });
});
