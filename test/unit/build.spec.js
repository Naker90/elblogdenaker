jest.mock("../../src/Scripts/Utils/dirCreator", () => {
    return {
        mkdir: jest.fn()
    }
});

const builder = require("../../src/Scripts/builder");
const dirCreator = require("../../src/Scripts/Utils/dirCreator");

describe('build', () => {

    let builder2;

    beforeEach(() => {
        let articles = [
            {
                date: "05/10/2018",
            }
        ];
        builder2 = builder(articles, dirCreator);
    });

    it("creates path by article date", () => {
        builder2.build();

        expect(dirCreator.mkdir).toHaveBeenCalledWith("2018");
        expect(dirCreator.mkdir).toHaveBeenCalledWith("2018/10");
        expect(dirCreator.mkdir).toHaveBeenCalledWith("2018/10/05");
    })

    

});