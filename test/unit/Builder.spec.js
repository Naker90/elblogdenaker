jest.mock("../../src/Build/Services/FolderService", () => {
    return {
        createDirStructureByDate: jest.fn()
    }
});

jest.mock("../../src/Build/Services/MarkdownService", () => {
    return {
        convertToHtmlFromMarkdownFile: jest.fn()
    }
});

jest.mock("../../src/Build/LibsWrappers/FileSystemWrapper", () => {
    return {
        write: jest.fn()
    }
});

const Builder = require("../../src/Build/Builder");
const FolderService = require("../../src/Build/Services/FolderService");
const MarkdownService = require("../../src/Build/Services/MarkdownService");
const FileSystemWrapper = require("../../src/Build/LibsWrappers/FileSystemWrapper");

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
    
    it("creates html file from markdown file in dir structure created by date", () => {
        FolderService.createDirStructureByDate
            .mockImplementation((articleDate) => {
                expect(articleDate).toEqual({articleDate: articles[0].date});
                return "/dir/structure/by/date"
            });
        MarkdownService.convertToHtmlFromMarkdownFile
            .mockImplementation((markdownFilePath) => {
                expect(markdownFilePath).toEqual({markdownFilePath: articles[0].markdownFilePath});
                return "some html";
            });

        builder.build();

        expect(FileSystemWrapper.write).toHaveBeenCalledWith({
            content: "some html",
            outputPath: "/dir/structure/by/date/" + articles[0].htmlFileName
        })
    })
});