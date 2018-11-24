jest.mock("../../src/Scripts/Utils/FolderService", () => {
    return {
        createDirStructureByDate: jest.fn()
    }
});

const Builder = require("../../src/Scripts/Builder");
const FolderService = require("../../src/Scripts/Utils/FolderService");

describe('build', () => {

    let articles, builder;

    beforeEach(() => {
        articles = [
            {
                date: "05/10/2018",
                markdownFilePath: "~/anyRoute/markdown.md"
            }
        ];
        builder = new Builder(articles, FolderService);
    });

    it("creates dir structure by date", () => {
        builder.build();

        expect(FolderService.createDirStructureByDate).toHaveBeenCalledWith(articles[0].date);
    });
});