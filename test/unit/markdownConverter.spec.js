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

const markdownConverter = require("../../src/Scripts/Utils/markdownConverter");
const showdownWrapper = require("../../src/Scripts/Utils/showdownWrapper");
const FileSystemWrapper = require("../../src/Scripts/Utils/FileSystemWrapper");

describe("markdown converter", () => {

    it("create html file from markdown file", () => {
        let markdownConverter2 = markdownConverter(
            "/base/path/",
            showdownWrapper,
            FileSystemWrapper);
        FileSystemWrapper.read
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

        expect(FileSystemWrapper.createFile).toHaveBeenCalledWith(
            "some html",
            "/base/path/" + "/out/path"
        )
    })

});