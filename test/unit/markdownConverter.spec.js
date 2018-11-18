jest.mock("../../src/Scripts/Utils/showdownWrapper", () => {
    return {
        convertToHtml: jest.fn()
    }
});

jest.mock("../../src/Scripts/Utils/fileSystemWrapper", () => {
    return {
        read: jest.fn(),
        createFile: jest.fn()
    }
});

const markdownConverter = require("../../src/Scripts/Utils/markdownConverter");
const showdownWrapper = require("../../src/Scripts/Utils/showdownWrapper");
const fileSystemWrapper = require("../../src/Scripts/Utils/fileSystemWrapper");

describe("markdown converter", () => {

    it("create html file from markdown file", () => {
        let markdownConverter2 = markdownConverter(
            "/base/path/",
            showdownWrapper,
            fileSystemWrapper);
        fileSystemWrapper.read
            .mockImplementation((markdownPath) => {
                expect(markdownPath).toBe("markdownPath");
                return "some markdown";
            });
        showdownWrapper.convertToHtml
            .mockImplementation((markdown) => {
                expect(markdown).toBe("some markdown");
                return "some html";
            });

        markdownConverter2.convertToHtml("markdownPath", "out/path");

        expect(fileSystemWrapper.createFile).toHaveBeenCalledWith(
            "some html",
            "/base/path/" + "/out/path"
        )
    })

});