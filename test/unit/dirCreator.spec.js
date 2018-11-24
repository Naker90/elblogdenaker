jest.mock("../../src/Scripts/Utils/fileSystemWrapper", () => {
    return {
        createDir: jest.fn()
    }
});

describe("dir creator", () => {

    it("creates dir structure by date", () => {
        const dirCreator = require("../../src/Scripts/Utils/dirCreator");
        const fileSystemWrapper = require("../../src/Scripts/Utils/fileSystemWrapper");
        let dirCreator2 = dirCreator("/any/Base/Path", fileSystemWrapper);

        let finalPath = dirCreator2.createDirStructureByDate({articleDate: "10/12/2018"});

        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018");
        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018/12");
        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018/12/10");
        expect(finalPath).toBe("/any/Base/Path/2018/12/10")
    })

});