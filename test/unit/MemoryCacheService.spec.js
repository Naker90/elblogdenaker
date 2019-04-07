import MemoryCacheService from "../../src/App/Services/MemoryCacheService";

describe("not found controller tests", () => {

    let cacheService;

    beforeEach(() => {
        cacheService = MemoryCacheService();
    });

    it("gets cached element", () => {
        let data = {
            cache: true
        };

        cacheService.add({key: "element", data: data});

        expect(cacheService.get({key: "element"})).toBe(data);
    });

    it("checks if cached element exist", () => {
        let data = {
            cache: true
        };

        cacheService.add({key: "element", data: data});

        expect(cacheService.exist({key: "element"})).toBe(true);
        expect(cacheService.exist({key: "any"})).toBe(false);
    });
});