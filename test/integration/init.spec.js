const fs = require("fs");
const path = require("path");

describe("index", function() {

    beforeEach(function (done) {
        loadTemplate("../../src/index.html", function (html) {
            document.body.innerHTML = html;
            done();
        });
    });

    it("loads the markup", function () {
        expect(document.querySelector("h1")).not.toBeNull();
    });

    function loadTemplate(viewPath, onLoad){
        const filePath = path.join(__dirname, viewPath);
        fs.readFile(filePath, {encoding: "utf-8"}, function(error, data){
            if(!error) {
                onLoad(data);
            } else {
                console.log(error);
            }
        });
    }
});