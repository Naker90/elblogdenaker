import LibraryPresenter from "../../../../src/App/Library/Presenter/LibraryPresenter"
import LibraryRepository from "../../../../src/App/Library/LibraryRepository"
import LibraryView from "../../../../src/App/Library/Presenter/LibraryView.js"
import JestUtils from "../../../utils/JestUtils";

describe("library presenter tests", () => {

    let presenter, view, libraryRepository;

    beforeEach(() => {
        libraryRepository = JestUtils.mockAllMethods({obj: LibraryRepository({})});
        view = JestUtils.mockAllMethods({obj: LibraryView({})});
        presenter = LibraryPresenter({
            view: view,
            libraryRepository: libraryRepository
        })
    });

    it("loads library", async () => {
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

        await presenter.loadLibrary();

        expect(view.renderLibrary).toHaveBeenCalledWith({library: library})
    });

    it("loads empty library", async () => {
        libraryRepository.getAll.mockImplementation(() => {
            return [];
        });

        await presenter.loadLibrary();

        expect(view.renderEmptyLibrary).toHaveBeenCalled()
    });
});
