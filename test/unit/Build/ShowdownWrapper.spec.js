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

        expect(html).toBe("<h2 class='article-title'>Test</h2>")
    });

    it("put on h3 tag article sub title class name", () => {
        let markdown = "### Test";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe("<h3 class='article-subtitle'>Test</h3>")
    });

    it("put on p tag article paragraph class name", () => {
        let markdown = "Test";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe("<p class='article-paragraph'>Test</p>")
    });

    it("puts on img tag article img class name", () => {
        let markdown = "![test](./images/test-1.png)";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe(`<p class='article-paragraph'><img class='article-img' src="./images/test-1.png\" alt="test" /></p>`)
    });
});
