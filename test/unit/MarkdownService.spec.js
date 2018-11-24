jest.mock("../../src/Scripts/Utils/showdownWrapper", () => {
    return {
        convertToHtml: jest.fn()
    }
});

jest.mock("../../src/Scripts/Utils/FileSystemWrapper", () => {
    return {
        read: jest.fn(),
        createFile: jest.fn()
    }
});

const MarkdownService = require("../../src/Scripts/Utils/MarkdownService");
const showdownWrapper = require("../../src/Scripts/Utils/showdownWrapper");
const FileSystemWrapper = require("../../src/Scripts/Utils/FileSystemWrapper");

describe("markdown service", () => {

    let markdownService;

    beforeEach(() => {
        markdownService = new MarkdownService({
            showdownWrapper: showdownWrapper,
            fileSystemWrapper: FileSystemWrapper
        });
    });

    it("return html from markdown file", () => {
        FileSystemWrapper.read
            .mockImplementation((markdownPath) => {
                expect(markdownPath).toBe("markdownFilePath");
                return "some markdown";
            });
        showdownWrapper.convertToHtml
            .mockImplementation((markdown) => {
                expect(markdown).toBe("some markdown");
                return "some html";
            });

        let html = markdownService.convertToHtmlFromMarkdownFile("markdownFilePath");

        expect(html).toBe("some html");
    })

});