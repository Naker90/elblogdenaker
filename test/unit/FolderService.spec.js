jest.mock("../../src/Scripts/Utils/FileSystemWrapper", () => {
    return {
        createPath: jest.fn(),
        existPath: jest.fn()
    }
});

const FolderService = require("../../src/Scripts/Utils/FolderService");
const FileSystemWrapper = require("../../src/Scripts/Utils/FileSystemWrapper");

describe("folder service", () => {

    let folderService;

    beforeEach(() => {
        folderService = new FolderService({
            basePath: "/any/Base/Path",
            fileSystemWrapper: FileSystemWrapper
        });
    });

    afterEach(() => {
        jest.resetAllMocks()
    });

    it("does not create dir if already exist", () => {
        FileSystemWrapper.existPath
            .mockImplementation(() => {
                return true;
            });

        let finalPath = folderService.createDirStructureByDate({articleDate: "10/12/2018"});

        expect(FileSystemWrapper.createPath).not.toHaveBeenCalled();
        expect(finalPath).toBe("/any/Base/Path/2018/12/10")
    });

    it("creates dir structure by date", () => {
        let finalPath = folderService.createDirStructureByDate({articleDate: "10/12/2018"});

        expect(FileSystemWrapper.createPath).toHaveBeenCalledWith("/any/Base/Path/2018");
        expect(FileSystemWrapper.createPath).toHaveBeenCalledWith("/any/Base/Path/2018/12");
        expect(FileSystemWrapper.createPath).toHaveBeenCalledWith("/any/Base/Path/2018/12/10");
        expect(finalPath).toBe("/any/Base/Path/2018/12/10")
    });
});