import BoardRepository from "../../../src/App/Library/Repositories/BoardRepository"
import ListRepository from "../../../src/App/Library/Repositories/ListRepository"
import CardRepository from "../../../src/App/Library/Repositories/CardRepository"
import LibraryRepository from "../../../src/App/Library/LibraryRepository"
import JestUtils from "../../utils/JestUtils";

describe("library controller tests", () => {

    let libraryRepository, boardRepository, listRepository, cardRepository;

    beforeEach(() => {
        boardRepository = JestUtils.mockAllMethods({obj: BoardRepository({})});
        listRepository = JestUtils.mockAllMethods({obj: ListRepository({})});
        cardRepository = JestUtils.mockAllMethods({obj: CardRepository({})});
        libraryRepository = LibraryRepository({
            boardRepository: boardRepository,
            listRepository: listRepository,
            cardRepository: cardRepository
        });
    });

    it("get library", async () => {
        let libraryBoardId = "libraryBoardId";
        let lists = [
            {id: "listId1", name: "Lista 1"},
            {id: "listId2", name: "Lista 2"}
        ];
        let cards1 = ["Libro 1", "Libro 2"];
        let cards2 = ["Libro 3", "Libro 4"];
        boardRepository.getLibraryBoardId
            .mockImplementation(() => {
                return libraryBoardId
            });
        listRepository.getListsBy
            .mockImplementation(({boardId}) => {
                expect(boardId).toBe(libraryBoardId);
                return lists
            });
        cardRepository.getCardsBy
            .mockImplementationOnce(({listId}) => {
                expect(listId).toBe(lists[0].id);
                return cards1
            })
            .mockImplementationOnce(({listId}) => {
                expect(listId).toBe(lists[1].id);
                return cards2
        });

        let library = await libraryRepository.getAll();

        expect(library).toMatchObject([
            {
                bookcase: lists[0].name,
                books: cards1
            },
            {
                bookcase: lists[1].name,
                books: cards2
            },
        ]);
    });

        it("get empty library when not found elements", async () => {
        boardRepository.getLibraryBoardId
            .mockImplementation(() => {
                return "boardId"
            });
        listRepository.getListsBy
            .mockImplementation(() => {
                return undefined;
            });

        let library = await libraryRepository.getAll();

        expect(library.length).toBe(0);
        expect(cardRepository.getCardsBy).not.toHaveBeenCalled();
    });
});