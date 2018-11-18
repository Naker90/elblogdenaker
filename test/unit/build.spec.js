jest.mock("../../src/Scripts/Utils/dirCreator", () => {
    return {
        mkdir: jest.fn()
    }
});

jest.mock("../../src/Scripts/Utils/markdownConverter", () => {
    return {
        convertToHtml: jest.fn()
    }
});

const builder = require("../../src/Scripts/builder");
const dirCreator = require("../../src/Scripts/Utils/dirCreator");
const markdownConverter = require("../../src/Scripts/Utils/markdownConverter");

describe('build', () => {

    let articles, builder2;

    beforeEach(() => {
        articles = [
            {
                date: "05/10/2018",
                markdown: "~/anyRoute/markdown.md"
            }
        ];
        builder2 = builder(articles, dirCreator, markdownConverter);
    });

    it("creates path by article date", () => {
        builder2.build();

        expect(dirCreator.mkdir).toHaveBeenCalledWith("2018");
        expect(dirCreator.mkdir).toHaveBeenCalledWith("2018/10");
        expect(dirCreator.mkdir).toHaveBeenCalledWith("2018/10/05");
    });

    it("converts article markdown to html", () => {
        builder2.build();

        expect(markdownConverter.convertToHtml).toHaveBeenCalledWith(
            articles.markdownPath,
            "/2018/10/05/"
        );
    });

});