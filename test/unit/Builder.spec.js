jest.mock("../../src/Scripts/Utils/FolderService", () => {
    return {
        createDirStructureByDate: jest.fn()
    }
});

jest.mock("../../src/Scripts/Utils/MarkdownService", () => {
    return {
        convertToHtmlFromMarkdownFile: jest.fn()
    }
});

jest.mock("../../src/Scripts/Utils/FileSystemWrapper", () => {
    return {
        write: jest.fn()
    }
});

const Builder = require("../../src/Scripts/Builder");
const FolderService = require("../../src/Scripts/Utils/FolderService");
const MarkdownService = require("../../src/Scripts/Utils/MarkdownService");
const FileSystemWrapper = require("../../src/Scripts/Utils/FileSystemWrapper");

describe('builder', () => {

    let articles, builder;

    beforeEach(() => {
        articles = [
            {
                date: "05/10/2018",
                htmlFileName: "html-file-name.html",
                markdownFilePath: "~/anyRoute/markdown.md"
            }
        ];
        builder = new Builder({
            articles: articles,
            folderService: FolderService,
            markdownService: MarkdownService,
            fileSystemWrapper: FileSystemWrapper
        });
    });

    it("creates dir structure by date", () => {
        builder.build();

        expect(FolderService.createDirStructureByDate)
            .toHaveBeenCalledWith(articles[0].date);
    });

    it("creates html file from markdown file in dir structure created by date", () => {
        FolderService.createDirStructureByDate
            .mockImplementation((articleDate) => {
                expect(articleDate).toEqual(articles[0].date);
                return "/dir/structure/by/date"
            });
        MarkdownService.convertToHtmlFromMarkdownFile
            .mockImplementation((markdownFilePath) => {
                expect(markdownFilePath).toEqual(markdownFilePath);
                return "some html";
            });

        builder.build();

        expect(FileSystemWrapper.write).toHaveBeenCalledWith(
            "some html",
            "/dir/structure/by/date/" + articles[0].htmlFileName
        )
    })
});