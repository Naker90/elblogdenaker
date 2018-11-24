jest.mock("../../src/Scripts/Utils/fileSystemWrapper", () => {
    return {
        createDir: jest.fn()
    }
});

const dirCreator = require("../../src/Scripts/Utils/dirCreator");
const fileSystemWrapper = require("../../src/Scripts/Utils/fileSystemWrapper");

describe("dir creator", () => {

    let dirCreator2;

    beforeEach(() => {
        dirCreator2 = dirCreator("/any/Base/Path", fileSystemWrapper);
    });

    it("creates dir structure by date", () => {
        let finalPath = dirCreator2.createDirStructureByDate({articleDate: "10/12/2018"});

        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018");
        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018/12");
        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018/12/10");
        expect(finalPath).toBe("/any/Base/Path/2018/12/10")
    })

});