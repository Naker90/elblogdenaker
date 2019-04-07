import LibraryController from "../../../../src/App/Library/LibraryController"
import LibraryRepository from "../../../../src/App/Library/LibraryRepository"
import LibraryView from "../../../../src/App/Library/LibraryView"
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

    it("renders library", async () => {
        let library = [
            {
                bookcase: "Leidos",
                books:["Libro 1", "Libro 2"]
            },
            {
                bookcase: "Por leer",
                books:["Libro 3", "Libro 4"]
            },
        ];
        libraryRepository.getAll.mockImplementation(() => {
            return library;
        });

        await controller.execute();

        expect(view.renderLibrary).toHaveBeenCalledWith({library: library})
    });

    it("renders empty library", async () => {
        libraryRepository.getAll.mockImplementation(() => {
            return [];
        });

        await controller.execute();

        expect(view.renderEmptyLibrary).toHaveBeenCalled()
    });
});