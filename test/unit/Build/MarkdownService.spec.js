jest.mock("../../src/Build/LibsWrappers/ShowdownWrapper", () => {
    return {
        convertToHtml: jest.fn()
    }
});

jest.mock("../../src/Build/LibsWrappers/FileSystemWrapper", () => {
    return {
        read: jest.fn()
    }
});

const MarkdownService = require("../../../src/Build/Services/MarkdownService");
const ShowdownWrapper = require("../../../src/Build/LibsWrappers/ShowdownWrapper");
const FileSystemWrapper = require("../../../src/Build/LibsWrappers/FileSystemWrapper");

describe("markdown service", () => {

    let markdownService;

    beforeEach(() => {
        markdownService = new MarkdownService({
            showdownWrapper: ShowdownWrapper,
            fileSystemWrapper: FileSystemWrapper
        });
    });

    it("return html from markdown file", () => {
        FileSystemWrapper.read
            .mockImplementation((filePath) => {
                expect(filePath).toEqual({filePath: "markdownFilePath"});
                return "some markdown";
            });
        ShowdownWrapper.convertToHtml
            .mockImplementation((markdown) => {
                expect(markdown).toEqual({markdown: "some markdown"});
                return "some html";
            });

        let html = markdownService.convertToHtmlFromMarkdownFile({
            markdownFilePath: "markdownFilePath"
        });

        expect(html).toBe("some html");
    })
});