const ShowdownWrapper = require("../../../src/Build/LibsWrappers/ShowdownWrapper");

describe("showdown wrapper", () => {

    let converter;

    beforeEach(() => {
        converter = ShowdownWrapper();
    });

    it("put on h2 tag article title class name", () => {
        let markdown = "## Test";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe("<h2 class='article-title' id=\"test\">Test</h2>")
    });

    it("put on p tag article paragraph class name", () => {
        let markdown = "Test";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe("<p class='article-paragraph'>Test</p>")
    });
});