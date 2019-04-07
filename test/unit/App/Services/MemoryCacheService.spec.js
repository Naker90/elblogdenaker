import MemoryCacheService from "../../../src/App/Services/MemoryCacheService";

describe("not found controller tests", () => {

    let cacheService, data;

    beforeEach(() => {
        data = {
            cache: true
        };
        cacheService = MemoryCacheService();
    });

    it("gets cached element", () => {
        cacheService.add({key: "element", data: data});

        expect(cacheService.get({key: "element"})).toBe(data);
    });

    it("checks if cached element exist", () => {
        cacheService.add({key: "element", data: data});

        expect(cacheService.exist({key: "element"})).toBeTruthy();
        expect(cacheService.exist({key: "any"})).toBeFalsy();
    });
});