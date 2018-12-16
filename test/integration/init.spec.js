const fs = require("fs");
const path = require("path");

describe("index",() => {

    beforeEach(done => {
        loadTemplate("../../src/App/index.html", html => {
            document.body.innerHTML = html;
            done();
        });
    });

    it("loads the markup", () => {
        expect(document.querySelector("h1")).not.toBeNull();
    });

    function loadTemplate(viewPath, onLoad){
        const filePath = path.join(__dirname, viewPath);
        fs.readFile(filePath, {encoding: "utf-8"}, (error, data) => {
            if(!error) {
                onLoad(data);
            } else {
                console.log(error);
            }
        });
    }
});