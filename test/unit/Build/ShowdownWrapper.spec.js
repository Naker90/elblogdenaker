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

    it("put on h3 tag article sub title class name", () => {
        let markdown = "### Test";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe("<h3 class='article-subtitle' id=\"test\">Test</h3>")
    });

    it("put on pre tag article code class name", () => {
        let markdown = "```\nTest\n```";

        let html = converter.convertToHtml({
            markdown: markdown
        });

        expect(html).toBe("<pre class='article-code'><code>Test</code></pre>")
    });
});