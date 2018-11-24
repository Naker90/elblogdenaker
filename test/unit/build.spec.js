jest.mock("../../src/Scripts/Utils/FolderService", () => {
    return {
        createDirStructureByDate: jest.fn()
    }
});

const builder = require("../../src/Scripts/builder");
const FolderService = require("../../src/Scripts/Utils/FolderService");

describe('build', () => {

    let articles, builder2;

    beforeEach(() => {
        articles = [
            {
                date: "05/10/2018",
                markdownPath: "~/anyRoute/markdown.md"
            }
        ];
        builder2 = builder(articles, FolderService);
    });

    it("creates dir structure by date", () => {
        builder2.build();

        expect(FolderService.createDirStructureByDate).toHaveBeenCalledWith(articles[0].date);
    });
});