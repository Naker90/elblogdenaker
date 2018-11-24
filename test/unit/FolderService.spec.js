jest.mock("../../src/Scripts/Utils/fileSystemWrapper", () => {
    return {
        createDir: jest.fn(),
        existDir: jest.fn()
    }
});

const FolderService = require("../../src/Scripts/Utils/FolderService");
const fileSystemWrapper = require("../../src/Scripts/Utils/fileSystemWrapper");

describe("folder service", () => {

    let dirCreator;

    beforeEach(() => {
        dirCreator = new FolderService("/any/Base/Path", fileSystemWrapper);
    });

    afterEach(() => {
        jest.resetAllMocks()
    });

    it("does not create dir if already exist", () => {
        fileSystemWrapper.existDir
            .mockImplementation(() => {
                return true;
            });

        let finalPath = dirCreator.createDirStructureByDate({articleDate: "10/12/2018"});

        expect(fileSystemWrapper.createDir).not.toHaveBeenCalled();
        expect(finalPath).toBe("/any/Base/Path/2018/12/10")
    });

    it("creates dir structure by date", () => {
        let finalPath = dirCreator.createDirStructureByDate({articleDate: "10/12/2018"});

        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018");
        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018/12");
        expect(fileSystemWrapper.createDir).toHaveBeenCalledWith("/any/Base/Path/2018/12/10");
        expect(finalPath).toBe("/any/Base/Path/2018/12/10")
    });
});