const MarkdownService = require("../../../src/Build/Services/MarkdownService");
const ShowdownWrapper = require("../../../src/Build/LibsWrappers/ShowdownWrapper");
const FileSystemWrapper = require("../../../src/Build/LibsWrappers/FileSystemWrapper");
const PrinterService = require("../../../src/Build/Services/PrinterService");
const JestUtils = require("../../utils/JestUtils");

describe("markdown service", () => {

    let markdownService, showdownWrapper, fileSystemWrapper, printerService;

    beforeEach(() => {
        showdownWrapper = JestUtils.mockAllMethods({obj: ShowdownWrapper()});
        fileSystemWrapper = JestUtils.mockAllMethods({obj: FileSystemWrapper()});
        printerService = JestUtils.mockAllMethods({obj: PrinterService()});
        markdownService = MarkdownService({
            showdownWrapper: showdownWrapper,
            fileSystemWrapper: fileSystemWrapper,
            printerService: printerService
        });
    });

    it("logs error when can not read markdown file", async () => {
        fileSystemWrapper.read
            .mockImplementation((filePath) => {
                expect(filePath).toEqual({filePath: "markdownFilePath"});
                return Promise.reject("error");
            });

        await markdownService.convertToHtmlFromMarkdownFile({
            markdownFilePath: "markdownFilePath"
        });

        expect(printerService.printLog).toHaveBeenCalled();
        expect(showdownWrapper.convertToHtml).not.toHaveBeenCalled();
    });

    it("return html from markdown file", async () => {
        fileSystemWrapper.read
            .mockImplementation((filePath) => {
                expect(filePath).toEqual({filePath: "markdownFilePath"});
                return Promise.resolve("some markdown");
            });
        showdownWrapper.convertToHtml
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