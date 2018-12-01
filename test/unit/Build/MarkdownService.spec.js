jest.mock("../../../src/Build/LibsWrappers/ShowdownWrapper", () => {
    return {
        convertToHtml: jest.fn()
    }
});

jest.mock("../../../src/Build/LibsWrappers/FileSystemWrapper", () => {
    return {
        read: jest.fn()
    }
});

jest.mock("../../../src/Build/Services/PrinterService", () => {
    return {
        printLog: jest.fn()
    }
});

const MarkdownService = require("../../../src/Build/Services/MarkdownService");
const ShowdownWrapper = require("../../../src/Build/LibsWrappers/ShowdownWrapper");
const FileSystemWrapper = require("../../../src/Build/LibsWrappers/FileSystemWrapper");
const PinterService = require("../../../src/Build/Services/PrinterService");

describe("markdown service", () => {

    let markdownService;

    beforeEach(() => {
        markdownService = MarkdownService({
            showdownWrapper: ShowdownWrapper,
            fileSystemWrapper: FileSystemWrapper,
            printerService: PinterService
        });
    });

    it("logs error when can not read markdown file", async () => {
        FileSystemWrapper.read
            .mockImplementation((filePath) => {
                expect(filePath).toEqual({filePath: "markdownFilePath"});
                return Promise.reject("error");
            });

        await markdownService.convertToHtmlFromMarkdownFile({
            markdownFilePath: "markdownFilePath"
        });

        expect(PinterService.printLog).toHaveBeenCalled();
        expect(ShowdownWrapper.convertToHtml).not.toHaveBeenCalled();
    });

    it("return html from markdown file", async () => {
        FileSystemWrapper.read
            .mockImplementation((filePath) => {
                expect(filePath).toEqual({filePath: "markdownFilePath"});
                return Promise.resolve("some markdown");
            });
        ShowdownWrapper.convertToHtml
            .mockImplementation((markdown) => {
                expect(markdown).toEqual({markdown: "some markdown"});
                return "some html";
            });

        let html = await markdownService.convertToHtmlFromMarkdownFile({
            markdownFilePath: "markdownFilePath"
        });

        expect(html).toBe("some html");
    });
});